System.register(["aurelia-logging", "./telemetry-client"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var aurelia_logging_1, telemetry_client_1, LogAppender;
    return {
        setters: [
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (telemetry_client_1_1) {
                telemetry_client_1 = telemetry_client_1_1;
            }
        ],
        execute: function () {
            LogAppender = (function () {
                function LogAppender(telemetryClient) {
                    this.telemetryClient = telemetryClient;
                }
                LogAppender.prototype.debug = function (logger, message) {
                    var rest = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        rest[_i - 2] = arguments[_i];
                    }
                    (_a = this.telemetryClient).trackLog.apply(_a, [message, aurelia_logging_1.logLevel.debug].concat(rest));
                    var _a;
                };
                LogAppender.prototype.info = function (logger, message) {
                    var rest = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        rest[_i - 2] = arguments[_i];
                    }
                    (_a = this.telemetryClient).trackLog.apply(_a, [message, aurelia_logging_1.logLevel.info].concat(rest));
                    var _a;
                };
                LogAppender.prototype.warn = function (logger, message) {
                    var rest = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        rest[_i - 2] = arguments[_i];
                    }
                    (_a = this.telemetryClient).trackLog.apply(_a, [message, aurelia_logging_1.logLevel.warn].concat(rest));
                    var _a;
                };
                LogAppender.prototype.error = function (logger, message) {
                    var rest = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        rest[_i - 2] = arguments[_i];
                    }
                    (_a = this.telemetryClient).trackLog.apply(_a, [message, aurelia_logging_1.logLevel.error].concat(rest));
                    var _a;
                };
                return LogAppender;
            }());
            LogAppender.inject = [telemetry_client_1.TelemetryClient];
            exports_1("LogAppender", LogAppender);
        }
    };
});
