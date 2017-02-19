import {EventAggregator, Subscription} from 'aurelia-event-aggregator';

import {TelemetryClient} from './telemetry-client';

export class PageViewTracker {
  public static inject = [EventAggregator, TelemetryClient];

  private eventSubscriptions: Subscription[] = [];

  constructor(private eventAggregator: EventAggregator, private telemetryClient: TelemetryClient) {}

  activate() {
    this.eventSubscriptions = [
      this.eventAggregator.subscribe('router:navigation:success', this.onNavigationSuccess),
      this.eventAggregator.subscribe('router:navigation:error', this.onNavigationError),
    ];
  }

  deactivate() {
    this.eventSubscriptions.forEach(s => s.dispose());
    this.eventSubscriptions = [];
  }

  private onNavigationSuccess = (e: any) => {
    this.telemetryClient.trackPageView(e.instruction.fragment);
  };

  private onNavigationError = (e: any) => {
    this.telemetryClient.trackError(e.result.output);
  };
}
