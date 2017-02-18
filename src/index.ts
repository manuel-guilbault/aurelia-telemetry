import {FrameworkConfiguration, LogManager} from 'aurelia-framework';

import {Configuration, defaultConfiguration} from './configuration';
import {LogAppender} from './log-appender';
import {GlobalErrorTracker} from './global-error-tracker';
import {PageViewTracker} from './page-view-tracker';

export function configure(aurelia: FrameworkConfiguration, config?: Configuration) {
  aurelia.globalResources(['./track-event']);
  
  config = Object.assign({}, config || {}, defaultConfiguration);
  
  if (config.trackLogs) {
    const logAppender = <LogAppender>aurelia.container.get(LogAppender);
    LogManager.addAppender(logAppender);
  }
  if (config.trackGlobalErrors) {
    const globalErrorTracker = <GlobalErrorTracker>aurelia.container.get(GlobalErrorTracker);
    globalErrorTracker.activate();
  }
  if (config.trackPageViews) {
    const pageViewTracker = <PageViewTracker>aurelia.container.get(PageViewTracker);
    pageViewTracker.activate();
  }
}
