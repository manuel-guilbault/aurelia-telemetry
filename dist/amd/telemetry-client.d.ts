export declare class TelemetryClient {
    trackPageView(properties: PageViewProperties): void;
    trackEvent(name: string, properties?: EventProperties): void;
    trackError(error: Error, properties?: ErrorProperties): void;
    trackLog(message: string, properties?: LogProperties): void;
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
export interface LogProperties {
    level?: string;
    [x: string]: any;
}
