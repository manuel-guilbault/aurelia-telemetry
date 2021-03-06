"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var telemetry_client_1 = require("./telemetry-client");
var GlobalErrorTracker = /** @class */ (function () {
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
exports.GlobalErrorTracker = GlobalErrorTracker;
