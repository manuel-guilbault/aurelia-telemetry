System.register([], function (exports_1, context_1) {
    "use strict";
    var warned, TelemetryClient;
    var __moduleName = context_1 && context_1.id;
    function warnNoImplementation() {
        if (!warned) {
            console.warn('No TelemetryClient implementation. Telemetry data will be lost.');
            warned = true;
        }
    }
    return {
        setters: [],
        execute: function () {
            warned = false;
            TelemetryClient = /** @class */ (function () {
                function TelemetryClient() {
                }
                TelemetryClient.prototype.trackPageView = function (path) {
                    warnNoImplementation();
                };
                TelemetryClient.prototype.trackEvent = function (name, properties) {
                    warnNoImplementation();
                };
                TelemetryClient.prototype.trackError = function (error) {
                    warnNoImplementation();
                };
                TelemetryClient.prototype.trackLog = function (message, level) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    warnNoImplementation();
                };
                return TelemetryClient;
            }());
            exports_1("TelemetryClient", TelemetryClient);
        }
    };
});
