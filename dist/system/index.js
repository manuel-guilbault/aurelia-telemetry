System.register(["./configuration", "./debug-telemetry-client", "./global-error-tracker", "./log-appender", "./page-view-tracker", "./telemetry-client", "./track-event-binding-behavior", "aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1, configuration_1, log_appender_1, global_error_tracker_1, page_view_tracker_1;
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia, callback) {
        aurelia.globalResources([aurelia_framework_1.PLATFORM.moduleName('./track-event-binding-behavior')]);
        var builder = new configuration_1.ConfigurationBuilderImpl();
        if (callback) {
            callback(builder);
        }
        var configuration = builder.create();
        if (configuration.doTrackLogs) {
            aurelia.postTask(function () { aurelia_framework_1.LogManager.addAppender(aurelia.container.get(log_appender_1.LogAppender)); });
        }
        if (configuration.doTrackGlobalErrors) {
            aurelia.postTask(function () { aurelia.container.get(global_error_tracker_1.GlobalErrorTracker).activate(); });
        }
        if (configuration.doTrackPageViews) {
            aurelia.postTask(function () { aurelia.container.get(page_view_tracker_1.PageViewTracker).activate(); });
        }
    }
    exports_1("configure", configure);
    var exportedNames_1 = {
        "configure": true
    };
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default" && !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (configuration_2_1) {
                exportStar_1(configuration_2_1);
                configuration_1 = configuration_2_1;
            },
            function (debug_telemetry_client_1_1) {
                exportStar_1(debug_telemetry_client_1_1);
            },
            function (global_error_tracker_2_1) {
                exportStar_1(global_error_tracker_2_1);
                global_error_tracker_1 = global_error_tracker_2_1;
            },
            function (log_appender_2_1) {
                exportStar_1(log_appender_2_1);
                log_appender_1 = log_appender_2_1;
            },
            function (page_view_tracker_2_1) {
                exportStar_1(page_view_tracker_2_1);
                page_view_tracker_1 = page_view_tracker_2_1;
            },
            function (telemetry_client_1_1) {
                exportStar_1(telemetry_client_1_1);
            },
            function (track_event_binding_behavior_1_1) {
                exportStar_1(track_event_binding_behavior_1_1);
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
        }
    };
});
