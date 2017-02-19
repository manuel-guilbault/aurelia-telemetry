import { logLevel } from 'aurelia-logging';
import { TelemetryClient } from './telemetry-client';
var LogAppender = (function () {
    function LogAppender(telemetryClient) {
        this.telemetryClient = telemetryClient;
    }
    LogAppender.prototype.debug = function (logger, message) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        (_a = this.telemetryClient).trackLog.apply(_a, [message, logLevel.debug].concat(rest));
        var _a;
    };
    LogAppender.prototype.info = function (logger, message) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        (_a = this.telemetryClient).trackLog.apply(_a, [message, logLevel.info].concat(rest));
        var _a;
    };
    LogAppender.prototype.warn = function (logger, message) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        (_a = this.telemetryClient).trackLog.apply(_a, [message, logLevel.warn].concat(rest));
        var _a;
    };
    LogAppender.prototype.error = function (logger, message) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        (_a = this.telemetryClient).trackLog.apply(_a, [message, logLevel.error].concat(rest));
        var _a;
    };
    return LogAppender;
}());
export { LogAppender };
LogAppender.inject = [TelemetryClient];
