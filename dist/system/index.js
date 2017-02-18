System.register(["aurelia-framework", "./configuration", "./log-appender", "./global-error-tracker", "./page-view-tracker"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(aurelia, config) {
        aurelia.globalResources(['./track-event']);
        config = Object.assign({}, config || {}, configuration_1.defaultConfiguration);
        if (config.trackLogs) {
            var logAppender = aurelia.container.get(log_appender_1.LogAppender);
            aurelia_framework_1.LogManager.addAppender(logAppender);
        }
        if (config.trackGlobalErrors) {
            var globalErrorTracker = aurelia.container.get(global_error_tracker_1.GlobalErrorTracker);
            globalErrorTracker.activate();
        }
        if (config.trackPageViews) {
            var pageViewTracker = aurelia.container.get(page_view_tracker_1.PageViewTracker);
            pageViewTracker.activate();
        }
    }
    exports_1("configure", configure);
    var aurelia_framework_1, configuration_1, log_appender_1, global_error_tracker_1, page_view_tracker_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (configuration_1_1) {
                configuration_1 = configuration_1_1;
            },
            function (log_appender_1_1) {
                log_appender_1 = log_appender_1_1;
            },
            function (global_error_tracker_1_1) {
                global_error_tracker_1 = global_error_tracker_1_1;
            },
            function (page_view_tracker_1_1) {
                page_view_tracker_1 = page_view_tracker_1_1;
            }
        ],
        execute: function () {
        }
    };
});
