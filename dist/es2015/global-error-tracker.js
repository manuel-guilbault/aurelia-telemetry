import { TelemetryClient } from './telemetry-client';
var GlobalErrorTracker = (function () {
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
export { GlobalErrorTracker };
GlobalErrorTracker.inject = [TelemetryClient];
