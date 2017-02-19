import { Appender, Logger } from 'aurelia-logging';
import { TelemetryClient } from './telemetry-client';
export declare class LogAppender implements Appender {
    private telemetryClient;
    static inject: typeof TelemetryClient[];
    constructor(telemetryClient: TelemetryClient);
    debug(logger: Logger, message: string, ...rest: any[]): void;
    info(logger: Logger, message: string, ...rest: any[]): void;
    warn(logger: Logger, message: string, ...rest: any[]): void;
    error(logger: Logger, message: string, ...rest: any[]): void;
}
