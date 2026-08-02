# ADR-001: Begin with a Modular Monolith

- **Status:** Accepted
- **Date:** 2026-08-02

## Context

TraceDefend AI requires authentication, workspaces, uploads, asynchronous analysis, findings, incidents, reports and administration.

A microservice architecture would introduce multiple deployments, service-to-service authentication, distributed tracing, network failure handling and more difficult local development.

The project is being built by one learning developer. Completion, correctness and maintainability are more important than creating many services.

## Decision

The backend will begin as a modular Spring Boot application.

Business areas will remain separated through packages and clear interfaces:

- auth
- user
- workspace
- upload
- analysis
- parsing
- detection
- erroranalysis
- finding
- incident
- report
- notification
- audit
- admin
- security
- common

The HTTP API and background worker may run as separate processes using Spring profiles while sharing the same codebase and domain modules.

## Consequences

### Benefits

- Easier local development
- Simpler transactions
- Easier debugging
- Less deployment complexity
- Stronger chance of completing the product
- Modules can still be tested independently

### Costs

- Requires discipline to prevent package coupling
- API and worker deployments share a release cycle initially
- Very large future scale may require extracting selected modules

## Future extraction rule

A module may become a separate service only when there is measured evidence, such as:

- independent scaling requirement
- different security boundary
- independent release requirement
- repeated operational bottleneck
- clearly stable interface

Microservices will not be introduced only to make the architecture look advanced.
