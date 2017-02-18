import { TelemetryClient } from './telemetry-client';
export declare class TrackEventBindingBehavior {
    private telemetryClient;
    static inject: typeof TelemetryClient[];
    constructor(telemetryClient: TelemetryClient);
    bind(binding: any, scope: any, name: string, properties?: any): void;
    unbind(binding: any, scope: any): void;
}
