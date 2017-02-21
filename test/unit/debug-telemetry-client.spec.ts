import {logLevel} from 'aurelia-logging';
import { DebugTelemetryClient } from '../../src/debug-telemetry-client';

describe('DebugTelemetryClient', () => {

  let 
    consoleSpy: Console,
    sut: DebugTelemetryClient;

  beforeEach(() => {
    consoleSpy = jasmine.createSpyObj('console', ['log']);
    sut = new DebugTelemetryClient(consoleSpy);
  });

  function createError(message: string): Error {
    try {
      throw new Error(message);
    } catch (e) {
      return e;
    }
  }


  it('should log trackPageView', () => {
    const path = '/some/route';

    sut.trackPageView(path);

    expect(consoleSpy.log).toHaveBeenCalledWith(`Page view '${path}'`);
  });

  it('should log trackEvent', () => {
    const name = 'my-custom-event',
      properties = { say: 'what?' };
    
    sut.trackEvent(name, properties);

    expect(consoleSpy.log).toHaveBeenCalledWith(`Event '${name}'`, properties);
  });

  it('should log trackError', () => {
    const error = createError('whatever');
    
    sut.trackError(error);

    expect(consoleSpy.log).toHaveBeenCalledWith(`Error`, error);
  });

  it('should log trackLog', () => {
    const message = 'well, well, well...',
      expectedLevel = 'INFO',
      level = logLevel.info,
      args = [12, 'test'];

    sut.trackLog(message, level, ...args);

    expect(consoleSpy.log).toHaveBeenCalledWith(`Log [${expectedLevel}]: ${message}`, ...args);
  });
});
