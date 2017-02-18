import { TelemetryClient } from './telemetry-client';
export declare class GlobalErrorTracker {
    private telemetryClient;
    static inject: typeof TelemetryClient[];
    constructor(telemetryClient: TelemetryClient);
    activate(): void;
    deactivate(): void;
    private onUnhandledError;
}
