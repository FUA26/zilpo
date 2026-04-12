# Reuse Readiness

Phase 10 makes the starter safe to clone, rename, and adapt into a new product without rediscovering the setup.

## Goal

The repo should work as a template:

- a new team can rename it without breaking the app shell
- theme presets can be swapped without rewriting components
- seed data can be regenerated from scratch
- app-specific code stays app-specific
- shared code stays reusable

## Scope

### Rename Pass

- Replace product name strings in the obvious surfaces.
- Verify metadata, titles, and descriptions still make sense after rename.
- Keep design and runtime tokens independent from the brand string.

### Seed Pass

- Provide minimal deterministic seed/example data.
- Keep demo data small enough to understand.
- Make sure seed data supports both `web` and `admin` smoke flows.

### Fresh Clone Pass

- Document the first-run steps clearly.
- Verify install, check, test, build, and hooks after a fresh clone.
- Verify Docker runtime still works after the repo is moved or renamed.

### Theme Swap Pass

- Confirm the active theme can change without component rewrites.
- Confirm token overrides still map cleanly to CSS variables.
- Confirm both apps still render with the alternate preset.

## Current Implementation

- Branding is centralized in `packages/config/src/brand.ts`.
- Example reuse data lives in `packages/db/src/seed.ts`.
- `apps/web` and `apps/admin` both consume the same brand and seed helpers.
- App metadata, shell labels, and smoke copy now come from those helpers instead of scattered literals.

## Exit Criteria

- The repo can be cloned and renamed without manual archaeology.
- Example data is deterministic and minimal.
- Theme presets still work after a brand swap.
- `check`, `test`, and `build` still pass after the reuse pass.
- Docker images still build after the rename and seed review.

## Non-Goals

- Do not turn the starter into a full template engine.
- Do not add enterprise provisioning automation.
- Do not extract packages just because a future consumer might want them.
