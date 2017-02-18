System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function warnNoImplementation() {
        if (!warned) {
            console.warn('No TelemetryClient implementation. Telemetry data will be lost.');
            warned = true;
        }
    }
    var warned, TelemetryClient;
    return {
        setters: [],
        execute: function () {
            warned = false;
            TelemetryClient = (function () {
                function TelemetryClient() {
                }
                TelemetryClient.prototype.trackPageView = function (properties) {
                    warnNoImplementation();
                };
                TelemetryClient.prototype.trackEvent = function (name, properties) {
                    warnNoImplementation();
                };
                TelemetryClient.prototype.trackError = function (error, properties) {
                    warnNoImplementation();
                };
                TelemetryClient.prototype.trackLog = function (message, properties) {
                    warnNoImplementation();
                };
                return TelemetryClient;
            }());
            exports_1("TelemetryClient", TelemetryClient);
        }
    };
});
