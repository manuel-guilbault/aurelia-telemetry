import { TelemetryClient } from './telemetry-client';
export declare class DebugTelemetryClient extends TelemetryClient {
    trackPageView(path: string): void;
    trackEvent(name: string, properties?: {
        [key: string]: any;
    }): void;
    trackError(error: Error): void;
    trackLog(message: string, level: number, ...args: any[]): void;
}
