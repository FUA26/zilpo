# DX Baseline

Phase 8 keeps the local feedback loop fast while still catching structural problems early.

## Commands

- `pnpm dev` starts the primary product app.
- `pnpm build` runs the production build across the workspace.
- `pnpm lint` checks code style and framework rules.
- `pnpm typecheck` checks TypeScript across the workspace.
- `pnpm test` runs the lightweight Vitest suite.
- `pnpm test:ci` is the CI-safe test entry point.
- `pnpm check` stays lightweight and does not include tests.

## Hooks

- `pre-commit` runs `pnpm check`.
- `pre-push` runs `pnpm test:ci`.
- Hook installation is handled by `pnpm hooks:install`.
- Run hook install once after cloning or after resetting `.git/hooks`.

## Test Scope

- Prefer pure utility tests.
- Keep the first suite small and deterministic.
- Avoid browser tests unless a browser boundary is actually needed.

## Exit Criteria

- The workspace installs cleanly.
- The quality gate is fast enough to run often.
- The test runner has at least one real assertion per foundational area.
