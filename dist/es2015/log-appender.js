import { TelemetryClient } from './telemetry-client';
var LogAppender = (function () {
    function LogAppender(telemetryClient) {
        this.telemetryClient = telemetryClient;
    }
    LogAppender.prototype.debug = function (logger, message) {
        this.telemetryClient.trackTrace(message, { level: 'debug' });
    };
    LogAppender.prototype.info = function (logger, message) {
        this.telemetryClient.trackTrace(message, { level: 'info' });
    };
    LogAppender.prototype.warn = function (logger, message) {
        this.telemetryClient.trackTrace(message, { level: 'warn' });
    };
    LogAppender.prototype.error = function (logger, message) {
        this.telemetryClient.trackTrace(message, { level: 'error' });
    };
    return LogAppender;
}());
export { LogAppender };
LogAppender.inject = [TelemetryClient];
