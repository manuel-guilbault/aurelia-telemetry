import { TelemetryClient, PageViewProperties, EventProperties, ErrorProperties, TraceProperties } from './telemetry-client';
export declare class DebugTelemetryClient extends TelemetryClient {
    trackPageView(properties: PageViewProperties): void;
    trackEvent(name: string, properties?: EventProperties): void;
    trackError(error: Error, properties?: ErrorProperties): void;
    trackTrace(message: string, properties?: TraceProperties): void;
}
