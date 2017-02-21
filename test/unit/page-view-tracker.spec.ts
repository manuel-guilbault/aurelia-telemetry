import { EventAggregator } from 'aurelia-event-aggregator';
import { TelemetryClient } from '../../src/telemetry-client';
import { PageViewTracker } from '../../src/page-view-tracker';

describe('LogAppender', () => {

  let
    eventAggregator: EventAggregator,
    telemetryClientSpy: TelemetryClient,
    sut: PageViewTracker;

  beforeEach(() => {
    eventAggregator = new EventAggregator();
    telemetryClientSpy = jasmine.createSpyObj('TelemetryClient', ['trackPageView', 'trackError']);
    sut = new PageViewTracker(eventAggregator, telemetryClientSpy);
  });

  function navigateTo(fragment: string) {
    eventAggregator.publish('router:navigation:success', {
      instruction: { fragment }
    });
  }

  function failNavigation(output: any) {
    eventAggregator.publish('router:navigation:error', {
      result: { output }
    });
  }


  it('should not track anything when navigate before activated', () => {
    const path = '/some/route';

    navigateTo(path);

    expect(telemetryClientSpy.trackPageView).not.toHaveBeenCalledWith();
    expect(telemetryClientSpy.trackError).not.toHaveBeenCalledWith();
  });

  it('should not track anything when navigation fail before activated', () => {
    const error = { message: 'invalid route' };
    
    failNavigation(error);

    expect(telemetryClientSpy.trackPageView).not.toHaveBeenCalledWith();
    expect(telemetryClientSpy.trackError).not.toHaveBeenCalledWith();
  });

  it('should trackPageView when navigate after activated', () => {
    const path = '/some/route';
    sut.activate();

    navigateTo(path);

    expect(telemetryClientSpy.trackPageView).toHaveBeenCalledWith(path);
  });

  it('should trackError when navigation fail after activated', () => {
    const error = { message: 'invalid route' };
    sut.activate();
    
    failNavigation(error);

    expect(telemetryClientSpy.trackError).toHaveBeenCalledWith(error);
  });

  it('should not track anything when navigate after deactivated', () => {
    const path = '/some/route';
    sut.activate();
    sut.deactivate();

    navigateTo(path);

    expect(telemetryClientSpy.trackPageView).not.toHaveBeenCalledWith();
    expect(telemetryClientSpy.trackError).not.toHaveBeenCalledWith();
  });

  it('should not track anything when navigation fail after deactivated', () => {
    const error = { message: 'invalid route' };
    sut.activate();
    sut.deactivate();
    
    failNavigation(error);

    expect(telemetryClientSpy.trackPageView).not.toHaveBeenCalledWith();
    expect(telemetryClientSpy.trackError).not.toHaveBeenCalledWith();
  });

});
