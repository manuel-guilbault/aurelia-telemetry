export * from './configuration';
export * from './debug-telemetry-client';
export * from './global-error-tracker';
export * from './log-appender';
export * from './page-view-tracker';
export * from './telemetry-client';
export * from './track-event-binding-behavior';
import { LogManager, PLATFORM } from 'aurelia-framework';
import { ConfigurationBuilderImpl } from './configuration';
import { LogAppender } from './log-appender';
import { GlobalErrorTracker } from './global-error-tracker';
import { PageViewTracker } from './page-view-tracker';
export function configure(aurelia, callback) {
    aurelia.globalResources(PLATFORM.moduleName['./track-event-binding-behavior']);
    var builder = new ConfigurationBuilderImpl();
    if (callback) {
        callback(builder);
    }
    var configuration = builder.create();
    if (configuration.doTrackLogs) {
        aurelia.postTask(function () { LogManager.addAppender(aurelia.container.get(LogAppender)); });
    }
    if (configuration.doTrackGlobalErrors) {
        aurelia.postTask(function () { aurelia.container.get(GlobalErrorTracker).activate(); });
    }
    if (configuration.doTrackPageViews) {
        aurelia.postTask(function () { aurelia.container.get(PageViewTracker).activate(); });
    }
}
