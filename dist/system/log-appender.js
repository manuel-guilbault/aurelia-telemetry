System.register(["./telemetry-client"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var telemetry_client_1, LogAppender;
    return {
        setters: [
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
            LogAppender.inject = [telemetry_client_1.TelemetryClient];
            exports_1("LogAppender", LogAppender);
        }
    };
});
