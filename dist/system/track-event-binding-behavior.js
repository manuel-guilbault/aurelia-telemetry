System.register(["./telemetry-client"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var telemetry_client_1, TrackEventBindingBehavior;
    return {
        setters: [
            function (telemetry_client_1_1) {
                telemetry_client_1 = telemetry_client_1_1;
            }
        ],
        execute: function () {
            TrackEventBindingBehavior = (function () {
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
            exports_1("TrackEventBindingBehavior", TrackEventBindingBehavior);
        }
    };
});
