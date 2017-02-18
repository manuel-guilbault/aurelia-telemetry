System.register(["./telemetry-client"], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    var telemetry_client_1, DebugTelemetryClient;
    return {
        setters: [
            function (telemetry_client_1_1) {
                telemetry_client_1 = telemetry_client_1_1;
            }
        ],
        execute: function () {
            DebugTelemetryClient = (function (_super) {
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
            }(telemetry_client_1.TelemetryClient));
            exports_1("DebugTelemetryClient", DebugTelemetryClient);
        }
    };
});
