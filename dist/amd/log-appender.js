define(["require", "exports", "aurelia-logging", "./telemetry-client"], function (require, exports, aurelia_logging_1, telemetry_client_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            (_a = this.telemetryClient).trackLog.apply(_a, [message, aurelia_logging_1.logLevel.debug].concat(rest));
        };
        LogAppender.prototype.info = function (logger, message) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            var _a;
            (_a = this.telemetryClient).trackLog.apply(_a, [message, aurelia_logging_1.logLevel.info].concat(rest));
        };
        LogAppender.prototype.warn = function (logger, message) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            var _a;
            (_a = this.telemetryClient).trackLog.apply(_a, [message, aurelia_logging_1.logLevel.warn].concat(rest));
        };
        LogAppender.prototype.error = function (logger, message) {
            var rest = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                rest[_i - 2] = arguments[_i];
            }
            var _a;
            (_a = this.telemetryClient).trackLog.apply(_a, [message, aurelia_logging_1.logLevel.error].concat(rest));
        };
        LogAppender.inject = [telemetry_client_1.TelemetryClient];
        return LogAppender;
    }());
    exports.LogAppender = LogAppender;
});
