package com.tracedefend.platform.system;

public record HealthResponse(
        String service,
        String status,
        String version
) {
}
