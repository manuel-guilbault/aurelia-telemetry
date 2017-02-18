import {Appender, Logger} from 'aurelia-logging';
import {TelemetryClient} from './telemetry-client';

export class LogAppender implements Appender {
  public static inject = [TelemetryClient];

  constructor(private telemetryClient: TelemetryClient) {}

  debug(logger: Logger, message: string) {
    this.telemetryClient.trackTrace(message, { level: 'debug' });
  }

	info(logger: Logger, message: string) {
    this.telemetryClient.trackTrace(message, { level: 'info' });
	}

	warn(logger: Logger, message: string) {
    this.telemetryClient.trackTrace(message, { level: 'warn' });
	}

	error(logger: Logger, message: string) {
    this.telemetryClient.trackTrace(message, { level: 'error' });
	}
}
