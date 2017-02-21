import {TelemetryClient} from './telemetry-client';

export class GlobalErrorTracker {
  public static inject = [TelemetryClient];

  private window: Window;

  constructor(private telemetryClient: TelemetryClient, w?: Window) {
    this.window = w || window;
  }

  activate() {
    if (this.window) {
      this.window.addEventListener('error', this.onUnhandledError);
    }
  }

  deactivate() {
    if (this.window) {
      this.window.removeEventListener('error', this.onUnhandledError);
    }
  }

  private onUnhandledError = (e: ErrorEvent) => {
    this.telemetryClient.trackError(e.error || e.message);
  };
}
