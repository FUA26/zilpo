# Feature Boundaries

Phase 7 defines the first app-local boundary after the shared foundation is in place.

## Core Rule

- Route files in `app/(routes)` stay thin.
- Route files only compose feature modules.
- Product logic, copy, and local UI composition live in `features/`.
- Shared primitives stay in `packages/ui`.

## What Belongs Where

- `app/(routes)`:
  - route entrypoints
  - layout composition
  - route-local wrappers
- `features/`:
  - page-level composition
  - route-specific content
  - local view logic
- `shared/`:
  - app-local code reused by multiple features in the same app
- `components/`:
  - app-local presentational pieces
- `lib/`:
  - app-local adapters, helpers, and runtime glue

## Promotion Rule

- Keep code app-local until reuse is real.
- Move code into `packages/*` only when both `apps/web` and `apps/admin` need it.
- Do not extract shared packages just to stay tidy.

## Current Phase 7 Shape

- `apps/web/app/(routes)/page.tsx` renders `HomePageFeature`.
- `apps/web/app/(routes)/dashboard/page.tsx` renders `DashboardPageFeature`.
- `apps/admin/app/(routes)/page.tsx` renders `AdminHomePageFeature`.
- `apps/admin/app/(routes)/dashboard/page.tsx` renders `AdminDashboardPageFeature`.
- The feature files own the route-specific composition.

## Exit Criteria

- Every route page is a thin wrapper around a feature module.
- Shared UI stays in `packages/ui`.
- The apps remain separate unless reuse is actually needed.
