package com.tracedefend.platform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan
public class TraceDefendPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(TraceDefendPlatformApplication.class, args);
    }
}
