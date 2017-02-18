import {TelemetryClient, PageViewProperties, EventProperties, ErrorProperties, LogProperties} from './telemetry-client';

export class DebugTelemetryClient extends TelemetryClient {

  trackPageView(properties: PageViewProperties) {
    console.log(`Page view`, properties);
  }

  trackEvent(name: string, properties?: EventProperties) {
    console.log(`Event '${name}'`, properties);
  }

  trackError(error: Error | string, properties?: ErrorProperties) {
    console.log(`Error`, error, properties);
  }

  trackLog(message: string, properties?: LogProperties) {
    console.log(`Log ${message}`, properties);
  }
}
