"use strict";
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
var aurelia_logging_1 = require("aurelia-logging");
var telemetry_client_1 = require("./telemetry-client");
var levelMap = new Map();
levelMap.set(aurelia_logging_1.logLevel.debug, 'DEBUG');
levelMap.set(aurelia_logging_1.logLevel.info, 'INFO');
levelMap.set(aurelia_logging_1.logLevel.warn, 'WARN');
levelMap.set(aurelia_logging_1.logLevel.error, 'ERROR');
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
}(telemetry_client_1.TelemetryClient));
exports.DebugTelemetryClient = DebugTelemetryClient;
