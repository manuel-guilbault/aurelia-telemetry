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
                function GlobalErrorTracker(telemetryClient, w) {
                    var _this = this;
                    this.telemetryClient = telemetryClient;
                    this.onUnhandledError = function (e) {
                        _this.telemetryClient.trackError(e.error || e.message);
                    };
                    this.window = w || window;
                }
                GlobalErrorTracker.prototype.activate = function () {
                    if (this.window) {
                        this.window.addEventListener('error', this.onUnhandledError);
                    }
                };
                GlobalErrorTracker.prototype.deactivate = function () {
                    if (this.window) {
                        this.window.removeEventListener('error', this.onUnhandledError);
                    }
                };
                return GlobalErrorTracker;
            }());
            GlobalErrorTracker.inject = [telemetry_client_1.TelemetryClient];
            exports_1("GlobalErrorTracker", GlobalErrorTracker);
        }
    };
});
