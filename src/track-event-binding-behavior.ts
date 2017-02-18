import {TelemetryClient} from './telemetry-client';

export class TrackEventBindingBehavior {
  public static inject = [TelemetryClient];

  constructor(private telemetryClient: TelemetryClient) {}

  bind(binding: any, scope: any, name: string, properties?: any) {
    if (!binding.callSource) return;

    binding.standardCallSource = binding.callSource;
    binding.callSource = (e: Event) => {
      Promise.resolve(binding.standardCallSource(e))
        .then(() => this.telemetryClient.trackEvent(name, properties));
    };
  }

  unbind(binding: any, scope: any) {
    if (!binding.standardCallSource) return;

    binding.callSource = binding.standardCallSource;
    binding.standardCallSource = null;
  }
}
