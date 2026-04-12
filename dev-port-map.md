# Dev Port Map

Local development uses a fixed `851x` block so every service stays predictable.

## Current Mapping

- `web` -> `8510`
- `admin` -> `8511`
- `postgres` -> `8512`

## Reserved Mapping

- `redis` -> `8513`
- `minio` -> `8514`

## Rules

- App ports stay distinct from service ports.
- Native app development stays on the app layer.
- Supporting services live in Docker.
- If a service is added later, keep it inside the same `851x` block.
