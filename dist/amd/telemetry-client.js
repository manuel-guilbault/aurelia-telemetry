define(["require", "exports"], function (require, exports) {
    "use strict";
    var warned = false;
    function warnNoImplementation() {
        if (!warned) {
            console.warn('No TelemetryClient implementation. Telemetry data will be lost.');
            warned = true;
        }
    }
    var TelemetryClient = (function () {
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
    exports.TelemetryClient = TelemetryClient;
});
