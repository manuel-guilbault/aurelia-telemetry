System.register(["./telemetry-client"], function (exports_1, context_1) {
    "use strict";
    var telemetry_client_1, GlobalErrorTracker;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (telemetry_client_1_1) {
                telemetry_client_1 = telemetry_client_1_1;
            }
        ],
        execute: function () {
            GlobalErrorTracker = /** @class */ (function () {
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
                GlobalErrorTracker.inject = [telemetry_client_1.TelemetryClient];
                return GlobalErrorTracker;
            }());
            exports_1("GlobalErrorTracker", GlobalErrorTracker);
        }
    };
});
