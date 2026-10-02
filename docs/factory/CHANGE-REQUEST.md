# Change Request Protocol

## Change Information
- **DATE:** 2026-10-02
- **INITIATOR:** HUMAN
- **REASON:** CREATIVE QUALITY ESCALATION. The rendered site is technically functional but visually simple and too generic for the expected Factory standard. "Visual ambition insufficient."
- **TARGET PHASES:** GATE_03 (Art Direction), VISUAL_ASSET_PLAN, GATE_04 (UI Architecture), GATE_05 (Frontend Implementation), GATE_06 (Visual QA), GATE_07_LOCAL (Performance QA).

## Invalidation Impact
- **GATE_01:** PRESERVED (PASS)
- **GATE_02:** PRESERVED (PASS)
- **GATE_03:** INVALIDATED -> IN_PROGRESS
- **VISUAL_ASSET_PLAN:** INVALIDATED -> IN_PROGRESS
- **GATE_04:** INVALIDATED -> NOT_STARTED
- **GATE_05:** INVALIDATED -> NOT_STARTED
- **GATE_06:** INVALIDATED -> NOT_STARTED
- **GATE_07_LOCAL:** INVALIDATED -> NOT_STARTED

## Action Required
- VISUAL_FREEZE set to INACTIVE.
- Re-run `art-director` to create a strong CORE_VISUAL_IDEA based on brand territories (Climatização, Elétrica, Marca, Serviço, Local).
- `art-director` must generate exactly 3 visual concepts in `docs/factory/VISUAL-CONCEPTS.md`.
- `art-director` must update `docs/factory/03-art-direction.md` and `docs/factory/VISUAL-ASSET-PLAN.md`.
- Stop pipeline and request HUMAN_REVIEW_REQUIRED for concept selection before proceeding to GATE_04.
