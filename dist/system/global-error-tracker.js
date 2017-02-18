System.register(["./telemetry-client"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var telemetry_client_1, GlobalErrorTracker;
    return {
        setters: [
            function (telemetry_client_1_1) {
                telemetry_client_1 = telemetry_client_1_1;
            }
        ],
        execute: function () {
            GlobalErrorTracker = (function () {
                function GlobalErrorTracker(telemetryClient) {
                    var _this = this;
                    this.telemetryClient = telemetryClient;
                    this.onUnhandledError = function (e) {
                        _this.telemetryClient.trackError(e.error || e.message);
                    };
                }
                GlobalErrorTracker.prototype.activate = function () {
                    if (window) {
                        window.addEventListener('error', this.onUnhandledError);
                    }
                };
                GlobalErrorTracker.prototype.deactivate = function () {
                    if (window) {
                        window.removeEventListener('error', this.onUnhandledError);
                    }
                };
                return GlobalErrorTracker;
            }());
            GlobalErrorTracker.inject = [telemetry_client_1.TelemetryClient];
            exports_1("GlobalErrorTracker", GlobalErrorTracker);
        }
    };
});
