#!/usr/bin/env python3
import json
import sys
from pathlib import Path

IMPLEMENTATION_PREFIXES = (
    "app/",
    "components/",
    "lib/",
    "data/",
    "styles/",
    "src/",
)

IMPLEMENTATION_BASENAMES = {
    "package.json",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "next.config.js",
    "next.config.mjs",
    "next.config.ts",
    "tailwind.config.js",
    "tailwind.config.ts",
    "components.json",
}

REQUIRED_IMPLEMENTATION_GATES = {
    "GATE_01": [
        "GATE_01=PASS",
        "GATE_01 (Material Audit): PASS"
    ],
    "GATE_02": [
        "GATE_02=PASS",
        "GATE_02 (Content Strategy): PASS"
    ],
    "GATE_03": [
        "GATE_03=PASS",
        "GATE_03 (Art Direction): PASS"
    ],
    "GATE_04": [
        "GATE_04=APPROVED",
        "GATE_04 (UI Architecture): APPROVED",
        "GATE_04=PASS",
        "GATE_04 (UI Architecture): PASS"
    ]
}

WRITE_TOOLS = {
    "write_to_file",
    "replace_file_content",
    "multi_replace_file_content",
    "create_file",
    "edit_file",
}

PATH_ARG_KEYS = (
    "TargetFile",
    "FilePath",
    "file_path",
    "target_file",
    "Path",
    "path",
)

def emit(decision, reason):
    print(json.dumps({"decision": decision, "reason": reason}, ensure_ascii=False))
    raise SystemExit(0)

def workspace_root(payload):
    paths = payload.get("workspacePaths") or []
    if paths:
        return Path(paths[0]).resolve()

    # Hook executa com cwd em .agents no Antigravity CLI.
    cwd = Path.cwd().resolve()
    if cwd.name == ".agents":
        return cwd.parent
    return cwd

def normalize_target(value, workspace):
    if not isinstance(value, str) or not value.strip():
        return None
    p = Path(value)
    p = (workspace / p).resolve() if not p.is_absolute() else p.resolve()
    try:
        return p.relative_to(workspace).as_posix()
    except Exception:
        return p.as_posix()

def find_target(args, workspace):
    if not isinstance(args, dict):
        return None

    for key in PATH_ARG_KEYS:
        value = args.get(key)
        if isinstance(value, str) and value.strip():
            return normalize_target(value, workspace)

    for key in ("edits", "replacements", "changes", "files"):
        value = args.get(key)
        if isinstance(value, list):
            for item in value:
                if isinstance(item, dict):
                    found = find_target(item, workspace)
                    if found:
                        return found
    return None

def is_implementation_path(rel):
    if not rel:
        return False
    rel = rel.replace("\\", "/").lstrip("./")
    return (
        any(rel.startswith(prefix) for prefix in IMPLEMENTATION_PREFIXES)
        or Path(rel).name in IMPLEMENTATION_BASENAMES
    )

try:
    payload = json.load(sys.stdin)
except Exception:
    emit("allow", "Payload do hook não pôde ser interpretado.")

tool_call = payload.get("toolCall") or {}
tool = tool_call.get("name", "")
args = tool_call.get("args") or {}

workspace = workspace_root(payload)
status_path = workspace / "docs/factory/STATUS.md"
status = status_path.read_text(encoding="utf-8") if status_path.exists() else ""

is_template_mode = "FACTORY_MODE: TEMPLATE_MODE" in status

missing = []
if not is_template_mode:
    for gate_name, accepted_states in REQUIRED_IMPLEMENTATION_GATES.items():
        if not any(state in status for state in accepted_states):
            missing.append(gate_name)

# Geração visual durante e após Art Direction.
if tool == "generate_image":
    if "GATE_03=PASS" in status:
        emit("allow", "Gate visual liberado.")
        
    is_art_direction = "CURRENT_PHASE: ART_DIRECTION" in status and "CURRENT_GATE: GATE_03" in status
    is_asset_plan = "CURRENT_PHASE: VISUAL_ASSET_PLAN" in status or "CURRENT_GATE: 03A" in status
    
    if is_art_direction or is_asset_plan:
        emit("allow", "Gate visual liberado durante fase criativa.")
        
    emit("deny", "Site Factory Gate: generate_image bloqueado até GATE_03=PASS.")

# Fecha bypass por shell antes da implementação.
if tool == "run_command":
    if missing:
        command = args.get("CommandLine", "").strip()
        
        is_art_direction = "CURRENT_PHASE: ART_DIRECTION" in status and "CURRENT_GATE: GATE_03" in status
        is_asset_plan = "CURRENT_PHASE: VISUAL_ASSET_PLAN" in status or "CURRENT_GATE: 03A" in status
        
        if is_art_direction or is_asset_plan:
            forbidden_tokens = [";", "&&", "||", ">", "<", "$(", "`", "..", "rm ", "mv ", "sed ", "perl ", "python", "bash", "sh ", "git ", "cat ", "echo ", "truncate "]
            has_forbidden = any(token in command for token in forbidden_tokens)
            
            is_mkdir = command in ("mkdir -p docs/factory/visual-concepts", "mkdir -p docs/factory/visual-concepts/")
            is_ls = command.startswith("ls ") and "docs/factory/visual-concepts" in command
            
            is_cp = False
            if command.startswith("cp "):
                parts = command.split()
                if len(parts) == 3:
                    src, dst = parts[1], parts[2]
                    allowed_dsts = {
                        "docs/factory/visual-concepts/concept-01-thermal-pulse.jpg",
                        "docs/factory/visual-concepts/concept-01-thermal-pulse.png",
                        "docs/factory/visual-concepts/concept-02-precise-grid.jpg",
                        "docs/factory/visual-concepts/concept-02-precise-grid.png",
                        "docs/factory/visual-concepts/concept-03-local-craft.jpg",
                        "docs/factory/visual-concepts/concept-03-local-craft.png"
                    }
                    if dst in allowed_dsts:
                        if (src.endswith(".jpg") or src.endswith(".png")) and (dst.endswith(".jpg") or dst.endswith(".png")):
                            is_cp = True
                            
            if not has_forbidden and (is_mkdir or is_ls or is_cp):
                emit("allow", "Gate de shell restrito liberado para gerenciamento de mockups.")
                
        emit(
            "deny",
            "Site Factory Gate: run_command do agente bloqueado antes da implementação. "
            "Faltam: " + ", ".join(missing)
        )
    emit("allow", "Gate de shell liberado.")

# Escrita de documentos da factory continua permitida; implementação fica bloqueada.
if tool in WRITE_TOOLS:
    rel = find_target(args, workspace)

    if not rel:
        if missing:
            emit(
                "deny",
                "Site Factory Gate: escrita sem caminho reconhecível bloqueada antes da implementação."
            )
        emit("allow", "Implementação liberada.")

    if not is_implementation_path(rel):
        emit("allow", "Escrita fora da camada de implementação.")

    if missing:
        emit(
            "deny",
            f"Site Factory Gate: implementação bloqueada para `{rel}`. "
            "Faltam: " + ", ".join(missing)
        )

    emit("allow", "Gates da implementação liberados.")

emit("allow", "Tool fora do escopo do Site Factory Gate.")
