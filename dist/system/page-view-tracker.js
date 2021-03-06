System.register(["aurelia-event-aggregator", "./telemetry-client"], function (exports_1, context_1) {
    "use strict";
    var aurelia_event_aggregator_1, telemetry_client_1, PageViewTracker;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            },
            function (telemetry_client_1_1) {
                telemetry_client_1 = telemetry_client_1_1;
            }
        ],
        execute: function () {
            PageViewTracker = /** @class */ (function () {
                function PageViewTracker(eventAggregator, telemetryClient) {
                    var _this = this;
                    this.eventAggregator = eventAggregator;
                    this.telemetryClient = telemetryClient;
                    this.eventSubscriptions = [];
                    this.onNavigationSuccess = function (e) {
                        _this.telemetryClient.trackPageView(e.instruction.fragment);
                    };
                    this.onNavigationError = function (e) {
                        _this.telemetryClient.trackError(e.result.output);
                    };
                }
                PageViewTracker.prototype.activate = function () {
                    this.eventSubscriptions = [
                        this.eventAggregator.subscribe('router:navigation:success', this.onNavigationSuccess),
                        this.eventAggregator.subscribe('router:navigation:error', this.onNavigationError),
                    ];
                };
                PageViewTracker.prototype.deactivate = function () {
                    this.eventSubscriptions.forEach(function (s) { return s.dispose(); });
                    this.eventSubscriptions = [];
                };
                PageViewTracker.inject = [aurelia_event_aggregator_1.EventAggregator, telemetry_client_1.TelemetryClient];
                return PageViewTracker;
            }());
            exports_1("PageViewTracker", PageViewTracker);
        }
    };
});
