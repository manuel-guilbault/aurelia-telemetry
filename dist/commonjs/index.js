"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./configuration"));
__export(require("./debug-telemetry-client"));
__export(require("./global-error-tracker"));
__export(require("./log-appender"));
__export(require("./page-view-tracker"));
__export(require("./telemetry-client"));
__export(require("./track-event-binding-behavior"));
var aurelia_framework_1 = require("aurelia-framework");
var configuration_1 = require("./configuration");
var log_appender_1 = require("./log-appender");
var global_error_tracker_1 = require("./global-error-tracker");
var page_view_tracker_1 = require("./page-view-tracker");
function configure(aurelia, callback) {
    aurelia.globalResources(['./track-event-binding-behavior']);
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
exports.configure = configure;
