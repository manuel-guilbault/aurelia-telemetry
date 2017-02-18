define(["require", "exports", "aurelia-framework", "./configuration", "./log-appender", "./global-error-tracker", "./page-view-tracker"], function (require, exports, aurelia_framework_1, configuration_1, log_appender_1, global_error_tracker_1, page_view_tracker_1) {
    "use strict";
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
    exports.configure = configure;
});
