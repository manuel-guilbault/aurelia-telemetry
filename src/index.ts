export * from './configuration';
export * from './debug-telemetry-client';
export * from './global-error-tracker';
export * from './log-appender';
export * from './page-view-tracker';
export * from './telemetry-client';
export * from './track-event-binding-behavior';

import {FrameworkConfiguration, LogManager} from 'aurelia-framework';
import {Configuration, defaultConfiguration} from './configuration';
import {LogAppender} from './log-appender';
import {GlobalErrorTracker} from './global-error-tracker';
import {PageViewTracker} from './page-view-tracker';

export function configure(aurelia: FrameworkConfiguration, config?: Configuration) {
  aurelia.globalResources(['./track-event-binding-behavior']);
  
  config = Object.assign({}, config || {}, defaultConfiguration);

  if (config.trackLogs) {
    aurelia.postTask(() => { LogManager.addAppender(aurelia.container.get(LogAppender)); });
  }
  if (config.trackGlobalErrors) {
    aurelia.postTask(() => { aurelia.container.get(GlobalErrorTracker).activate(); });
  }
  if (config.trackPageViews) {
    aurelia.postTask(() => { aurelia.container.get(PageViewTracker).activate(); });
  }
}
