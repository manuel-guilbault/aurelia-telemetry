import {TelemetryClient, PageViewProperties, EventProperties, ErrorProperties, TraceProperties} from './telemetry-client';

export class DebugTelemetryClient extends TelemetryClient {

  trackPageView(properties: PageViewProperties) {
    console.log(`Page view`, properties);
  }

  trackEvent(name: string, properties?: EventProperties) {
    console.log(`Event '${name}'`, properties);
  }

  trackError(error: Error, properties?: ErrorProperties) {
    console.log(`Error`, error, properties);
  }

  trackTrace(message: string, properties?: TraceProperties) {
    console.log(`TRACE ${message}`, properties);
  }
}
