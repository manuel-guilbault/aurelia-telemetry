import {logLevel} from 'aurelia-logging';
import {TelemetryClient} from './telemetry-client';

const levelMap = new Map<number, string>();
levelMap.set(logLevel.debug, 'DEBUG');
levelMap.set(logLevel.info, 'INFO');
levelMap.set(logLevel.warn, 'WARN');
levelMap.set(logLevel.error, 'ERROR');

export class DebugTelemetryClient extends TelemetryClient {

  private console: Console;

  constructor(console?: Console) {
    super();
    this.console = console || window.console;
  }

  trackPageView(path: string) {
    this.console.log(`Page view '${path}'`);
  }

  trackEvent(name: string, properties?: { [key: string]: any }) {
    this.console.log(`Event '${name}'`, properties);
  }

  trackError(error: Error | string) {
    this.console.log(`Error`, error);
  }

  trackLog(message: string, level: number, ...args: any[]) {
    this.console.log(`Log [${levelMap.get(level)}]: ${message}`, ...args);
  }
}
