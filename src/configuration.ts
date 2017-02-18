export interface Configuration {
  trackLogs?: boolean;
  trackGlobalErrors?: boolean;
  trackPageViews?: boolean;
}

export const defaultConfiguration: Configuration = {
  trackLogs: true,
  trackGlobalErrors: true,
  trackPageViews: true,
};
