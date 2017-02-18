"use strict";
var telemetry_client_1 = require("./telemetry-client");
var LogAppender = (function () {
    function LogAppender(telemetryClient) {
        this.telemetryClient = telemetryClient;
    }
    LogAppender.prototype.debug = function (logger, message) {
        this.telemetryClient.trackLog(message, { level: 'debug' });
    };
    LogAppender.prototype.info = function (logger, message) {
        this.telemetryClient.trackLog(message, { level: 'info' });
    };
    LogAppender.prototype.warn = function (logger, message) {
        this.telemetryClient.trackLog(message, { level: 'warn' });
    };
    LogAppender.prototype.error = function (logger, message) {
        this.telemetryClient.trackLog(message, { level: 'error' });
    };
    return LogAppender;
}());
LogAppender.inject = [telemetry_client_1.TelemetryClient];
exports.LogAppender = LogAppender;
