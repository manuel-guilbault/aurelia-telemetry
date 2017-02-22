export declare class TelemetryClient {
    trackPageView(path: string): void;
    trackEvent(name: string, properties?: {
        [key: string]: any;
    }): void;
    trackError(error: Error | string): void;
    trackLog(message: string, level: number, ...args: any[]): void;
}
