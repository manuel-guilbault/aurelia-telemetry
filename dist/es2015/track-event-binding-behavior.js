import { TelemetryClient } from './telemetry-client';
var TrackEventBindingBehavior = /** @class */ (function () {
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
    TrackEventBindingBehavior.inject = [TelemetryClient];
    return TrackEventBindingBehavior;
}());
export { TrackEventBindingBehavior };
