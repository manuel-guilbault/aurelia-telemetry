define(["require", "exports", "./configuration", "./debug-telemetry-client", "./global-error-tracker", "./log-appender", "./page-view-tracker", "./telemetry-client", "./track-event-binding-behavior", "aurelia-framework", "./configuration", "./log-appender", "./global-error-tracker", "./page-view-tracker"], function (require, exports, configuration_1, debug_telemetry_client_1, global_error_tracker_1, log_appender_1, page_view_tracker_1, telemetry_client_1, track_event_binding_behavior_1, aurelia_framework_1, configuration_2, log_appender_2, global_error_tracker_2, page_view_tracker_2) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(configuration_1);
    __export(debug_telemetry_client_1);
    __export(global_error_tracker_1);
    __export(log_appender_1);
    __export(page_view_tracker_1);
    __export(telemetry_client_1);
    __export(track_event_binding_behavior_1);
    function configure(aurelia, callback) {
        aurelia.globalResources(aurelia_framework_1.PLATFORM.moduleName['./track-event-binding-behavior']);
        var builder = new configuration_2.ConfigurationBuilderImpl();
        if (callback) {
            callback(builder);
        }
        var configuration = builder.create();
        if (configuration.doTrackLogs) {
            aurelia.postTask(function () { aurelia_framework_1.LogManager.addAppender(aurelia.container.get(log_appender_2.LogAppender)); });
        }
        if (configuration.doTrackGlobalErrors) {
            aurelia.postTask(function () { aurelia.container.get(global_error_tracker_2.GlobalErrorTracker).activate(); });
        }
        if (configuration.doTrackPageViews) {
            aurelia.postTask(function () { aurelia.container.get(page_view_tracker_2.PageViewTracker).activate(); });
        }
    }
    exports.configure = configure;
});
