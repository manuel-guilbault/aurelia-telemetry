import { EventAggregator } from 'aurelia-event-aggregator';
import { TelemetryClient } from './telemetry-client';
export declare class PageViewTracker {
    private eventAggregator;
    private telemetryClient;
    static inject: (typeof TelemetryClient | typeof EventAggregator)[];
    private eventSubscriptions;
    constructor(eventAggregator: EventAggregator, telemetryClient: TelemetryClient);
    activate(): void;
    deactivate(): void;
    private onNavigationSuccess;
    private onNavigationError;
}
