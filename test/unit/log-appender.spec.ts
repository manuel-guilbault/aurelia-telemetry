import { Logger, logLevel } from 'aurelia-logging';
import { TelemetryClient } from '../../src/telemetry-client';
import { LogAppender } from '../../src/log-appender';

describe('LogAppender', () => {

  let
    telemetryClientSpy: TelemetryClient,
    loggerSpy: Logger,
    sut: LogAppender;

  beforeEach(() => {
    telemetryClientSpy = jasmine.createSpyObj('TelemetryClient', ['trackLog']);
    loggerSpy = {} as any;
    sut = new LogAppender(telemetryClientSpy);
  });


  it('should trackLog for debug', () => {
    const message = 'whatever',
      args = [12, 'something'];

    sut.debug(loggerSpy, message, ...args);

    expect(telemetryClientSpy.trackLog).toHaveBeenCalledWith(message, logLevel.debug, ...args);
  });

  it('should trackLog for info', () => {
    const message = 'whatever',
      args = [12, 'something'];

    sut.info(loggerSpy, message, ...args);

    expect(telemetryClientSpy.trackLog).toHaveBeenCalledWith(message, logLevel.info, ...args);
  });

  it('should trackLog for warn', () => {
    const message = 'whatever',
      args = [12, 'something'];

    sut.warn(loggerSpy, message, ...args);

    expect(telemetryClientSpy.trackLog).toHaveBeenCalledWith(message, logLevel.warn, ...args);
  });

  it('should trackLog for error', () => {
    const message = 'whatever',
      args = [12, 'something'];

    sut.error(loggerSpy, message, ...args);

    expect(telemetryClientSpy.trackLog).toHaveBeenCalledWith(message, logLevel.error, ...args);
  });

});
