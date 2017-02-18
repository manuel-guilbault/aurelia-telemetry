import {TelemetryClient} from './telemetry-client';

export class GlobalErrorTracker {
  public static inject = [TelemetryClient];

  constructor(private telemetryClient: TelemetryClient) {}

  activate() {
    if (window) {
      window.addEventListener('error', this.onUnhandledError);
    }
  }

  deactivate() {
    if (window) {
      window.removeEventListener('error', this.onUnhandledError);
    }
  }

  private onUnhandledError = (e: ErrorEvent) => {
    if (e.error) {
      this.telemetryClient.trackError(e.error);
    } else {
      this.telemetryClient.trackLog(e.message, { level: 'error' });
    }
  };
}
