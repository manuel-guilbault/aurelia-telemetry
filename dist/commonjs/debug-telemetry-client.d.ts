import { TelemetryClient } from './telemetry-client';
export declare class DebugTelemetryClient extends TelemetryClient {
    private console;
    constructor(console?: Console);
    trackPageView(path: string): void;
    trackEvent(name: string, properties?: {
        [key: string]: any;
    }): void;
    trackError(error: Error | string): void;
    trackLog(message: string, level: number, ...args: any[]): void;
}
