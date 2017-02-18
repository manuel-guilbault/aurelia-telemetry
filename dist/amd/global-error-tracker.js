define(["require", "exports", "./telemetry-client"], function (require, exports, telemetry_client_1) {
    "use strict";
    var GlobalErrorTracker = (function () {
        function GlobalErrorTracker(telemetryClient) {
            var _this = this;
            this.telemetryClient = telemetryClient;
            this.onUnhandledError = function (e) {
                if (e.error) {
                    _this.telemetryClient.trackError(e.error);
                }
                else {
                    _this.telemetryClient.trackLog(e.message, { level: 'error' });
                }
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
    exports.GlobalErrorTracker = GlobalErrorTracker;
});
