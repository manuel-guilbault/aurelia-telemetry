import { TelemetryClient } from './telemetry-client';
export declare class GlobalErrorTracker {
    private telemetryClient;
    static inject: typeof TelemetryClient[];
    private window;
    constructor(telemetryClient: TelemetryClient, w?: Window);
    activate(): void;
    deactivate(): void;
    private onUnhandledError;
}
