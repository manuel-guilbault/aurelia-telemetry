import { TelemetryClient, PageViewProperties, EventProperties, ErrorProperties, LogProperties } from './telemetry-client';
export declare class DebugTelemetryClient extends TelemetryClient {
    trackPageView(properties: PageViewProperties): void;
    trackEvent(name: string, properties?: EventProperties): void;
    trackError(error: Error | string, properties?: ErrorProperties): void;
    trackLog(message: string, properties?: LogProperties): void;
}
