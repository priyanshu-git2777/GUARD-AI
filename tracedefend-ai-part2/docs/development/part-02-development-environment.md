# Part 2 — Development Environment

Part 2 establishes:

- Next.js web application
- Spring Boot API
- PostgreSQL
- Redis
- RabbitMQ
- MinIO for local S3-compatible storage
- Environment-variable separation
- Flyway database migration
- API health endpoint
- Browser-to-backend connection test

## Completion gate

- `docker compose ps` shows infrastructure services running.
- PostgreSQL, Redis and RabbitMQ health checks pass.
- The Spring Boot application starts.
- Flyway applies `V1__create_system_status_table.sql`.
- `/api/v1/health` returns an `UP` response.
- `/actuator/health` returns `UP`.
- The Next.js page loads.
- The frontend health card displays `Connected — UP`.
- Frontend lint passes.
- Backend tests pass.
- No `.env` file is committed.
