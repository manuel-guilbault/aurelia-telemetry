"use strict";
var telemetry_client_1 = require("./telemetry-client");
var GlobalErrorTracker = (function () {
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
exports.GlobalErrorTracker = GlobalErrorTracker;
