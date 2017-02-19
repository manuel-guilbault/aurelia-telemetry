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
import { logLevel } from 'aurelia-logging';
import { TelemetryClient } from './telemetry-client';
var levelMap = new Map();
levelMap.set(logLevel.debug, 'DEBUG');
levelMap.set(logLevel.info, 'INFO');
levelMap.set(logLevel.warn, 'WARN');
levelMap.set(logLevel.error, 'ERROR');
var DebugTelemetryClient = (function (_super) {
    __extends(DebugTelemetryClient, _super);
    function DebugTelemetryClient() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugTelemetryClient.prototype.trackPageView = function (path) {
        console.log("Page view '" + path + "'");
    };
    DebugTelemetryClient.prototype.trackEvent = function (name, properties) {
        console.log("Event '" + name + "'", properties);
    };
    DebugTelemetryClient.prototype.trackError = function (error) {
        console.log("Error", error);
    };
    DebugTelemetryClient.prototype.trackLog = function (message, level) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        console.log("Log [" + levelMap.get(level) + "]: " + message, args);
    };
    return DebugTelemetryClient;
}(TelemetryClient));
export { DebugTelemetryClient };
