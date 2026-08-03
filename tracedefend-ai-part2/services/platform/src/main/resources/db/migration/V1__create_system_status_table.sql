CREATE TABLE system_status (
    id BIGSERIAL PRIMARY KEY,
    component VARCHAR(100) NOT NULL UNIQUE,
    status VARCHAR(30) NOT NULL,
    checked_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO system_status (component, status)
VALUES ('database', 'READY');
