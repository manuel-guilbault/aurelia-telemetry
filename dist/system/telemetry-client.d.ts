export declare abstract class TelemetryClient {
    abstract trackPageView(properties: PageViewProperties): void;
    abstract trackEvent(name: string, properties?: EventProperties): void;
    abstract trackError(error: Error, properties?: ErrorProperties): void;
    abstract trackTrace(message: string, properties?: TraceProperties): void;
}
export interface PageViewProperties {
    title?: string;
    path?: string;
    [x: string]: any;
}
export interface EventProperties {
    [x: string]: any;
}
export interface ErrorProperties {
    level?: string;
    [x: string]: any;
}
export interface TraceProperties {
    level?: string;
    [x: string]: any;
}
