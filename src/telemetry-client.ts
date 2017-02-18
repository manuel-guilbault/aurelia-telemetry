export abstract class TelemetryClient {
  abstract trackPageView(properties: PageViewProperties): void;
  abstract trackEvent(name: string, properties?: EventProperties): void;
  abstract trackError(error: Error | string, properties?: ErrorProperties): void;
  abstract trackLog(message: string, properties?: LogProperties): void;
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
