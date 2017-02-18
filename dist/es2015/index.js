import { LogManager } from 'aurelia-framework';
import { defaultConfiguration } from './configuration';
import { LogAppender } from './log-appender';
import { GlobalErrorTracker } from './global-error-tracker';
import { PageViewTracker } from './page-view-tracker';
export function configure(aurelia, config) {
    aurelia.globalResources(['./track-event']);
    config = Object.assign({}, config || {}, defaultConfiguration);
    if (config.trackLogs) {
        var logAppender = aurelia.container.get(LogAppender);
        LogManager.addAppender(logAppender);
    }
    if (config.trackGlobalErrors) {
        var globalErrorTracker = aurelia.container.get(GlobalErrorTracker);
        globalErrorTracker.activate();
    }
    if (config.trackPageViews) {
        var pageViewTracker = aurelia.container.get(PageViewTracker);
        pageViewTracker.activate();
    }
}
