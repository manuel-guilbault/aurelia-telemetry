export * from './configuration';
export * from './debug-telemetry-client';
export * from './global-error-tracker';
export * from './log-appender';
export * from './page-view-tracker';
export * from './telemetry-client';
export * from './track-event-binding-behavior';

import {FrameworkConfiguration, LogManager, PLATFORM} from 'aurelia-framework';
import {ConfigurationBuilder, ConfigurationBuilderImpl} from './configuration';
import {LogAppender} from './log-appender';
import {GlobalErrorTracker} from './global-error-tracker';
import {PageViewTracker} from './page-view-tracker';

export function configure(aurelia: FrameworkConfiguration, callback?: ((c: ConfigurationBuilder) => void)) {
  aurelia.globalResources([PLATFORM.moduleName('./track-event-binding-behavior')]);
  
  const builder = new ConfigurationBuilderImpl();
  if (callback) {
    callback(builder);
  }
  const configuration = builder.create();

  if (configuration.doTrackLogs) {
    aurelia.postTask(() => { LogManager.addAppender(aurelia.container.get(LogAppender)); });
  }
  if (configuration.doTrackGlobalErrors) {
    aurelia.postTask(() => { aurelia.container.get(GlobalErrorTracker).activate(); });
  }
  if (configuration.doTrackPageViews) {
    aurelia.postTask(() => { aurelia.container.get(PageViewTracker).activate(); });
  }
}
