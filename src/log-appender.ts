import {Appender, Logger, logLevel} from 'aurelia-logging';
import {TelemetryClient} from './telemetry-client';

export class LogAppender implements Appender {
  public static inject = [TelemetryClient];

  constructor(private telemetryClient: TelemetryClient) {}

  debug(logger: Logger, message: string, ...rest: any[]) {
    this.telemetryClient.trackLog(message, logLevel.debug, ...rest);
  }

	info(logger: Logger, message: string, ...rest: any[]) {
    this.telemetryClient.trackLog(message, logLevel.info, ...rest);
	}

	warn(logger: Logger, message: string, ...rest: any[]) {
    this.telemetryClient.trackLog(message, logLevel.warn, ...rest);
	}

	error(logger: Logger, message: string, ...rest: any[]) {
    this.telemetryClient.trackLog(message, logLevel.error, ...rest);
	}
}
