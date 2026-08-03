# Part 2 — Development Environment

This part establishes the real local platform:

- Next.js frontend
- Spring Boot backend
- PostgreSQL
- Redis
- RabbitMQ
- MinIO for local object storage
- Flyway database migration
- Backend health endpoints
- Browser-to-backend connection

Use the scripts in `scripts/` to reduce path and environment mistakes.

## Completion gate

- `scripts/check-part2.sh` passes.
- Docker services start.
- PostgreSQL, Redis and RabbitMQ become healthy.
- Backend tests pass.
- `/api/v1/health` returns `UP`.
- `/actuator/health` returns `UP`.
- Frontend opens on port 3000.
- Frontend displays `Connected — UP`.
- Frontend lint and production build pass.
- `.env` and `apps/web/.env.local` are ignored by Git.
