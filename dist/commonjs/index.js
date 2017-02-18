"use strict";
var aurelia_framework_1 = require("aurelia-framework");
var configuration_1 = require("./configuration");
var log_appender_1 = require("./log-appender");
var global_error_tracker_1 = require("./global-error-tracker");
var page_view_tracker_1 = require("./page-view-tracker");
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
