# Theme System

Phase 2 defines the runtime theme contract for Pisky.

## Source Of Truth

- `DESIGN.md` owns the visual direction.
- `packages/ui/src/theme` owns reusable theme presets and token conversion.
- `apps/web/app/layout.tsx` and `apps/admin/app/layout.tsx` select the active preset.
- `app/globals.css` in each app defines semantic CSS variables and fallbacks.

## Preset Model

- `color` controls palette and contrast.
- `spacing` controls scale tokens.
- `radius` controls border radius scale.
- `typography` controls font family and base size.

## Current Presets

- `mintlify` is the default light theme.
- `mintlify-dark` is the high-contrast dark variant.

## Runtime Rule

- Shared UI reads semantic variables only.
- Apps can switch presets without rewriting components.
- Components should not depend on hardcoded color, radius, or font values.
