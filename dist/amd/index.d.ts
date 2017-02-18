export * from './configuration';
export * from './debug-telemetry-client';
export * from './global-error-tracker';
export * from './log-appender';
export * from './page-view-tracker';
export * from './telemetry-client';
export * from './track-event-binding-behavior';
import { FrameworkConfiguration } from 'aurelia-framework';
import { Configuration } from './configuration';
export declare function configure(aurelia: FrameworkConfiguration, config?: Configuration): void;
