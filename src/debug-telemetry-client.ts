import {logLevel} from 'aurelia-logging';
import {TelemetryClient} from './telemetry-client';

const levelMap = new Map<number, string>();
levelMap.set(logLevel.debug, 'DEBUG');
levelMap.set(logLevel.info, 'INFO');
levelMap.set(logLevel.warn, 'WARN');
levelMap.set(logLevel.error, 'ERROR');

export class DebugTelemetryClient extends TelemetryClient {

  trackPageView(path: string) {
    console.log(`Page view '${path}'`);
  }

  trackEvent(name: string, properties?: { [key: string]: any }) {
    console.log(`Event '${name}'`, properties);
  }

  trackError(error: Error) {
    console.log(`Error`, error);
  }

  trackLog(message: string, level: number, ...args: any[]) {
    console.log(`Log [${levelMap.get(level)}]: ${message}`, args);
  }
}
