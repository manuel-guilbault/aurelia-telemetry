let warned = false;

function warnNoImplementation() {
  if (!warned) {
    console.warn('No TelemetryClient implementation. Telemetry data will be lost.');
    warned = true;
  }
}

export class TelemetryClient {
  public trackPageView(properties: PageViewProperties): void {
    warnNoImplementation();
  }

  public trackEvent(name: string, properties?: EventProperties): void {
    warnNoImplementation();
  }

  public trackError(error: Error, properties?: ErrorProperties): void {
    warnNoImplementation();
  }

  public trackLog(message: string, properties?: LogProperties): void {
    warnNoImplementation();
  }
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
