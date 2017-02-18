define(["require", "exports", "./configuration", "./debug-telemetry-client", "./global-error-tracker", "./log-appender", "./page-view-tracker", "./telemetry-client", "./track-event-binding-behavior", "aurelia-framework", "./configuration", "./log-appender", "./global-error-tracker", "./page-view-tracker"], function (require, exports, configuration_1, debug_telemetry_client_1, global_error_tracker_1, log_appender_1, page_view_tracker_1, telemetry_client_1, track_event_binding_behavior_1, aurelia_framework_1, configuration_2, log_appender_2, global_error_tracker_2, page_view_tracker_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    __export(configuration_1);
    __export(debug_telemetry_client_1);
    __export(global_error_tracker_1);
    __export(log_appender_1);
    __export(page_view_tracker_1);
    __export(telemetry_client_1);
    __export(track_event_binding_behavior_1);
    function configure(aurelia, config) {
        aurelia.globalResources(['./track-event']);
        config = Object.assign({}, config || {}, configuration_2.defaultConfiguration);
        if (config.trackLogs) {
            var logAppender = aurelia.container.get(log_appender_2.LogAppender);
            aurelia_framework_1.LogManager.addAppender(logAppender);
        }
        if (config.trackGlobalErrors) {
            var globalErrorTracker = aurelia.container.get(global_error_tracker_2.GlobalErrorTracker);
            globalErrorTracker.activate();
        }
        if (config.trackPageViews) {
            var pageViewTracker = aurelia.container.get(page_view_tracker_2.PageViewTracker);
            pageViewTracker.activate();
        }
    }
    exports.configure = configure;
});
