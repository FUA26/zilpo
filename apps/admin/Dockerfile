FROM node:22-alpine AS base

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH

RUN corepack enable

WORKDIR /repo

FROM base AS deps

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY tsconfig.json eslint.config.mjs prettier.config.mjs vitest.config.ts ./
COPY README.md AGENTS.md DESIGN.md canonical-workflow.md initial-implementation-runthrough.md feature-boundaries.md dx-baseline.md theme-system.md v1-implementation-order.md ./
COPY apps ./apps
COPY packages ./packages

RUN pnpm install --frozen-lockfile

FROM deps AS build

RUN pnpm --filter admin build

FROM node:22-alpine AS runner

ENV NODE_ENV=production
WORKDIR /app

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=build /repo/apps/admin/.next/standalone ./
COPY --from=build /repo/apps/admin/.next/static ./apps/admin/.next/static
COPY --from=build /repo/apps/admin/public ./apps/admin/public

EXPOSE 3001

USER nextjs

CMD ["node", "server.js"]
