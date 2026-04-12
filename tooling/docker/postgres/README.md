# Postgres Dev Stack

Local Postgres for the `pisky` workspace.

## Port Map

- Postgres: `8512`

## Commands

- `pnpm db:up` starts the container in detached mode.
- `pnpm db:down` stops the container and removes the network.

## Notes

- The database credentials are intentionally simple for local development.
- Update `.env.example` if the port or credentials change.
