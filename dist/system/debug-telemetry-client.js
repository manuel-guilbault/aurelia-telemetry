System.register(["aurelia-logging", "./telemetry-client"], function (exports_1, context_1) {
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
    var aurelia_logging_1, telemetry_client_1, levelMap, DebugTelemetryClient;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (telemetry_client_1_1) {
                telemetry_client_1 = telemetry_client_1_1;
            }
        ],
        execute: function () {
            levelMap = new Map();
            levelMap.set(aurelia_logging_1.logLevel.debug, 'DEBUG');
            levelMap.set(aurelia_logging_1.logLevel.info, 'INFO');
            levelMap.set(aurelia_logging_1.logLevel.warn, 'WARN');
            levelMap.set(aurelia_logging_1.logLevel.error, 'ERROR');
            DebugTelemetryClient = /** @class */ (function (_super) {
                __extends(DebugTelemetryClient, _super);
                function DebugTelemetryClient(console) {
                    var _this = _super.call(this) || this;
                    _this.console = console || window.console;
                    return _this;
                }
                DebugTelemetryClient.prototype.trackPageView = function (path) {
                    this.console.log("Page view '" + path + "'");
                };
                DebugTelemetryClient.prototype.trackEvent = function (name, properties) {
                    this.console.log("Event '" + name + "'", properties);
                };
                DebugTelemetryClient.prototype.trackError = function (error) {
                    this.console.log("Error", error);
                };
                DebugTelemetryClient.prototype.trackLog = function (message, level) {
                    var args = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        args[_i - 2] = arguments[_i];
                    }
                    var _a;
                    (_a = this.console).log.apply(_a, ["Log [" + levelMap.get(level) + "]: " + message].concat(args));
                };
                return DebugTelemetryClient;
            }(telemetry_client_1.TelemetryClient));
            exports_1("DebugTelemetryClient", DebugTelemetryClient);
        }
    };
});
