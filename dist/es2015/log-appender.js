import { logLevel } from 'aurelia-logging';
import { TelemetryClient } from './telemetry-client';
var LogAppender = /** @class */ (function () {
    function LogAppender(telemetryClient) {
        this.telemetryClient = telemetryClient;
    }
    LogAppender.prototype.debug = function (logger, message) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var _a;
        (_a = this.telemetryClient).trackLog.apply(_a, [message, logLevel.debug].concat(rest));
    };
    LogAppender.prototype.info = function (logger, message) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var _a;
        (_a = this.telemetryClient).trackLog.apply(_a, [message, logLevel.info].concat(rest));
    };
    LogAppender.prototype.warn = function (logger, message) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var _a;
        (_a = this.telemetryClient).trackLog.apply(_a, [message, logLevel.warn].concat(rest));
    };
    LogAppender.prototype.error = function (logger, message) {
        var rest = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            rest[_i - 2] = arguments[_i];
        }
        var _a;
        (_a = this.telemetryClient).trackLog.apply(_a, [message, logLevel.error].concat(rest));
    };
    LogAppender.inject = [TelemetryClient];
    return LogAppender;
}());
export { LogAppender };
