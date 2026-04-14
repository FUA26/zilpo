# Production Hardening

Phase 9 locks the runtime shape for production without making the starter heavy.

## Runtime Baseline

- Next.js apps run with `output: "standalone"`.
- `poweredByHeader` stays disabled.
- Shared security headers are applied from a common helper.
- `web` and `admin` each have their own Dockerfile.

## Security Baseline

- Keep only headers that are safe for the current UI shell.
- Use a small, shared header set.
- Keep secrets out of the image.
- Do not add a complex CSP until it is actually required.

## Docker Baseline

- `apps/web/Dockerfile` builds and runs the product app.
- `apps/admin/Dockerfile` builds and runs the operational app.
- The root `.dockerignore` keeps build context lean.
- Production images run as a non-root user.

## Exit Criteria

- Each app can build in standalone mode.
- Each app has a production Dockerfile.
- The production header baseline is shared and tested.
