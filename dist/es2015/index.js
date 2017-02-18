export * from './configuration';
export * from './debug-telemetry-client';
export * from './global-error-tracker';
export * from './log-appender';
export * from './page-view-tracker';
export * from './telemetry-client';
export * from './track-event-binding-behavior';
import { LogManager } from 'aurelia-framework';
import { defaultConfiguration } from './configuration';
import { LogAppender } from './log-appender';
import { GlobalErrorTracker } from './global-error-tracker';
import { PageViewTracker } from './page-view-tracker';
export function configure(aurelia, config) {
    aurelia.globalResources(['./track-event-binding-behavior']);
    config = Object.assign({}, config || {}, defaultConfiguration);
    if (config.trackLogs) {
        aurelia.postTask(function () { LogManager.addAppender(aurelia.container.get(LogAppender)); });
    }
    if (config.trackGlobalErrors) {
        aurelia.postTask(function () { aurelia.container.get(GlobalErrorTracker).activate(); });
    }
    if (config.trackPageViews) {
        aurelia.postTask(function () { aurelia.container.get(PageViewTracker).activate(); });
    }
}
