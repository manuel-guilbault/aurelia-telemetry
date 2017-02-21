import { TelemetryClient } from '../../src/telemetry-client';
import { GlobalErrorTracker } from '../../src/global-error-tracker';

class WindowSpy {

  private eventListeners = new Map<string, EventListener[]>();

  private getEventListenersFor(event: string, createIfNone = true) {
    let eventListeners = this.eventListeners.get(event);
    if (!eventListeners) {
      this.eventListeners.set(event, eventListeners = []);
    }
    return eventListeners;
  }

  addEventListener(event: string, eventListener: EventListener) {
    this.getEventListenersFor(event).push(eventListener);
  }

  removeEventListener(event: string, eventListener: EventListener) {
    const eventListeners = this.getEventListenersFor(event, false);
    if (!eventListeners) { return; }

    const index = eventListeners.indexOf(eventListener);
    if (index < 0) { return; }

    eventListeners.splice(index, 1);

    if (eventListeners.length === 0) {
      this.eventListeners.delete(event);
    }
  }

  triggerEvent(name: string, event: Event) {
    const eventListeners = this.getEventListenersFor(name, false);
    if (!eventListeners) { return; }

    for (let eventListener of eventListeners) {
      eventListener(event);
    }
  }
}


describe('GlobalErrorTracker', () => {

  let
    telemetryClientSpy: TelemetryClient,
    windowSpy: WindowSpy,
    sut: GlobalErrorTracker;

  beforeEach(() => {
    telemetryClientSpy = jasmine.createSpyObj('TelemetryClient', ['trackError']);
    windowSpy = new WindowSpy();
    sut = new GlobalErrorTracker(telemetryClientSpy, windowSpy as any);
  });

  function createError(message: string): Error {
    try {
      throw new Error(message);
    } catch (e) {
      return e;
    }
  }

  function triggerError(error: Error) {
    windowSpy.triggerEvent('error', { error } as ErrorEvent);
  }


  it('should not trackError before activated', () => {
    const error = createError('whatever');

    triggerError(error);

    expect(telemetryClientSpy.trackError).not.toHaveBeenCalled();
  });

  it('should trackError when activated', () => {
    const error = createError('whatever');
    sut.activate();

    triggerError(error);

    expect(telemetryClientSpy.trackError).toHaveBeenCalledWith(error);
  });

  it('should not trackError after deactivated', () => {
    const error = createError('whatever');
    sut.activate();
    sut.deactivate();

    triggerError(error);

    expect(telemetryClientSpy.trackError).not.toHaveBeenCalled();
  });
});
