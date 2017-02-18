var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { TelemetryClient } from './telemetry-client';
var DebugTelemetryClient = (function (_super) {
    __extends(DebugTelemetryClient, _super);
    function DebugTelemetryClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugTelemetryClient.prototype.trackPageView = function (properties) {
        console.log("Page view", properties);
    };
    DebugTelemetryClient.prototype.trackEvent = function (name, properties) {
        console.log("Event '" + name + "'", properties);
    };
    DebugTelemetryClient.prototype.trackError = function (error, properties) {
        console.log("Error", error, properties);
    };
    DebugTelemetryClient.prototype.trackTrace = function (message, properties) {
        console.log("TRACE " + message, properties);
    };
    return DebugTelemetryClient;
}(TelemetryClient));
export { DebugTelemetryClient };
