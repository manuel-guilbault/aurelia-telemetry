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
    TelemetryClient.prototype.trackPageView = function (properties) {
        warnNoImplementation();
    };
    TelemetryClient.prototype.trackEvent = function (name, properties) {
        warnNoImplementation();
    };
    TelemetryClient.prototype.trackError = function (error, properties) {
        warnNoImplementation();
    };
    TelemetryClient.prototype.trackLog = function (message, properties) {
        warnNoImplementation();
    };
    return TelemetryClient;
}());
export { TelemetryClient };
