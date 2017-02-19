"use strict";
var aurelia_logging_1 = require("aurelia-logging");
var telemetry_client_1 = require("./telemetry-client");
var LogAppender = (function () {
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
exports.LogAppender = LogAppender;
