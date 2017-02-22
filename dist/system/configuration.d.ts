export interface Configuration {
    doTrackLogs: boolean;
    doTrackGlobalErrors: boolean;
    doTrackPageViews: boolean;
}
export interface ConfigurationBuilder {
    useDefault(): this;
    trackLogs(): this;
    trackGlobalErrors(): this;
    trackPageViews(): this;
}
export declare class ConfigurationBuilderImpl implements ConfigurationBuilder {
    private doTrackLogs;
    private doTrackGlobalErrors;
    private doTrackPageViews;
    useDefault(): this;
    trackLogs(): this;
    trackGlobalErrors(): this;
    trackPageViews(): this;
    create(): Configuration;
}
