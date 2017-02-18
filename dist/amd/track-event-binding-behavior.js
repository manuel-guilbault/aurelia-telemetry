define(["require", "exports", "./telemetry-client"], function (require, exports, telemetry_client_1) {
    "use strict";
    var TrackEventBindingBehavior = (function () {
        function TrackEventBindingBehavior(telemetryClient) {
            this.telemetryClient = telemetryClient;
        }
        TrackEventBindingBehavior.prototype.bind = function (binding, scope, name, properties) {
            var _this = this;
            if (!binding.callSource)
                return;
            binding.standardCallSource = binding.callSource;
            binding.callSource = function (e) {
                Promise.resolve(binding.standardCallSource(e))
                    .then(function () { return _this.telemetryClient.trackEvent(name, properties); });
            };
        };
        TrackEventBindingBehavior.prototype.unbind = function (binding, scope) {
            if (!binding.standardCallSource)
                return;
            binding.callSource = binding.standardCallSource;
            binding.standardCallSource = null;
        };
        return TrackEventBindingBehavior;
    }());
    TrackEventBindingBehavior.inject = [telemetry_client_1.TelemetryClient];
    exports.TrackEventBindingBehavior = TrackEventBindingBehavior;
});
