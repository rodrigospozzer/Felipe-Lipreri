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

REQUIRED_IMPLEMENTATION_GATES = (
    "GATE_01=PASS",
    "GATE_02=PASS",
    "GATE_03=PASS",
    "GATE_04=APPROVED",
    "GATE_05=PASS",
)

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
    missing = [
        gate for gate in REQUIRED_IMPLEMENTATION_GATES
        if gate not in status
    ]

# Geração visual só após Art Direction.
if tool == "generate_image":
    if "GATE_03=PASS" not in status:
        emit("deny", "Site Factory Gate: generate_image bloqueado até GATE_03=PASS.")
    emit("allow", "Gate visual liberado.")

# Fecha bypass por shell antes da implementação.
if tool == "run_command":
    if missing:
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
