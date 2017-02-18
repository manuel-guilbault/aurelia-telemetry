"use strict";
var aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
var telemetry_client_1 = require("./telemetry-client");
var PageViewTracker = (function () {
    function PageViewTracker(eventAggregator, telemetryClient) {
        var _this = this;
        this.eventAggregator = eventAggregator;
        this.telemetryClient = telemetryClient;
        this.eventSubscriptions = [];
        this.onNavigationSuccess = function (e) {
            _this.telemetryClient.trackPageView({
                path: e.instruction.fragment,
            });
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
    return PageViewTracker;
}());
PageViewTracker.inject = [aurelia_event_aggregator_1.EventAggregator, telemetry_client_1.TelemetryClient];
exports.PageViewTracker = PageViewTracker;
