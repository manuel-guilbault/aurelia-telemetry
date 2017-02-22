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

export class ConfigurationBuilderImpl implements ConfigurationBuilder {

  private doTrackLogs = false;
  private doTrackGlobalErrors = false;
  private doTrackPageViews = false;

  useDefault() {
    return this
      .trackLogs()
      .trackGlobalErrors()
      .trackPageViews();
  }

  trackLogs() {
    this.doTrackLogs = true;
    return this;
  }

  trackGlobalErrors() {
    this.doTrackGlobalErrors = true;
    return this;
  }

  trackPageViews() {
    this.doTrackPageViews = true;
    return this;
  }

  create(): Configuration {
    return {
      doTrackLogs: this.doTrackLogs, 
      doTrackGlobalErrors: this.doTrackGlobalErrors, 
      doTrackPageViews: this.doTrackPageViews
    };
  }
}
