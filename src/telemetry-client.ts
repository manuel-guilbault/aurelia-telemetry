let warned = false;

function warnNoImplementation() {
  if (!warned) {
    console.warn('No TelemetryClient implementation. Telemetry data will be lost.');
    warned = true;
  }
}

export class TelemetryClient {
  public trackPageView(path: string): void {
    warnNoImplementation();
  }

  public trackEvent(name: string, properties?: { [key: string]: any }): void {
    warnNoImplementation();
  }

  public trackError(error: Error): void {
    warnNoImplementation();
  }

  public trackLog(message: string, level: number, ...args: any[]): void {
    warnNoImplementation();
  }
}
