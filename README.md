# TraceDefend AI

> An AI-assisted platform for analysing application errors and defensive security logs.

## Project status

**Current phase:** Part 1 — Product foundation  
**Release status:** Planning  
**Public production status:** Not deployed yet

TraceDefend AI is a learning-first, production-oriented project. The goal is to build a working public platform rather than a UI-only demonstration.

## The problem

Developers frequently receive long stack traces, deployment failures, authentication errors, container logs, and security alerts that are difficult to understand quickly.

Small teams may also lack a dedicated security operations team to review every suspicious event.

## The solution

TraceDefend AI will allow authenticated users to:

- Paste or upload supported application logs and stack traces.
- Upload supported defensive security logs.
- Run asynchronous analyses.
- View evidence-based findings.
- Receive AI-assisted explanations written in simple language.
- Convert important findings into incidents.
- Save investigation notes and status history.
- Export reports.
- Delete their uploaded data.

## Initial supported inputs

- Spring Boot stack traces
- Next.js and Node.js errors
- PostgreSQL errors
- Docker logs
- Nginx access and error logs
- Generic JSON and JSONL application logs
- Basic authentication logs
- Selected AWS CloudTrail event samples

## Important limitation

TraceDefend AI is not an antivirus product and will not claim to detect every security attack or diagnose every software error.

AI output will be treated as an explanation and investigation aid. Deterministic rules, evidence, confidence levels, and human review will remain important.

## Planned technology stack

- Frontend: Next.js, TypeScript and Tailwind CSS
- Backend: Java, Spring Boot and Spring Security
- Database: PostgreSQL
- Cache and session store: Redis
- Background jobs: RabbitMQ
- Object storage: MinIO locally and S3-compatible private storage in production
- Deployment: Docker and GitHub Actions

The exact versions will be pinned during Part 2.

## Repository structure

```text
tracedefend-ai/
├── apps/
│   └── web/
├── services/
│   └── platform/
├── infrastructure/
├── datasets/
├── docs/
└── .github/
```

## Engineering principles

1. No production feature will depend on hardcoded demo data.
2. Every visible production button must work.
3. Every protected record must be checked against the current workspace.
4. Every database change must use a migration.
5. Every background task must be retryable and traceable.
6. Every major feature must include automated tests.
7. Sensitive information must be removed before data is sent to an AI provider.
8. Staging must be tested before production deployment.
9. Known critical defects block deployment.
10. Limitations and accuracy must be communicated honestly.

## Current milestone

See:

- `docs/product-requirements.md`
- `docs/user-journey.md`
- `docs/definition-of-done.md`
- `docs/roadmap.md`
- `docs/architecture/adr-001-modular-monolith.md`

## Local development

Local development setup will be added in Part 2.

## Contributing

Read `CONTRIBUTING.md` before opening a pull request.

## Security

Do not report security vulnerabilities through public issues. Read `SECURITY.md`.

## License

A license has not yet been selected. Do not reuse this code until a license is added.
