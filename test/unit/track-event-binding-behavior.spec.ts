import { ComponentTester, StageComponent } from 'aurelia-testing';
import { Aurelia } from 'aurelia-framework';
import { bootstrap } from 'aurelia-bootstrapper';
import { TelemetryClient } from '../../src/telemetry-client';

class PromiseMock<T> {

  promise: Promise<T>;
  resolve: (result?: T) => void;
  reject: (reason?: any) => void;

  constructor() {
    this.promise = new Promise<T>((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

describe('track-event-binding-behavior', () => {

  let
    telemetryClientSpy: TelemetryClient,
    viewModel: {
      doSomething: jasmine.Spy;
      name: string;
      properties: { [name: string]: any };
    },
    component: ComponentTester,
    button: HTMLButtonElement;

  beforeEach(() => {
    telemetryClientSpy = jasmine.createSpyObj('TelemetryClient', ['trackEvent']);
    viewModel = {
      doSomething: jasmine.createSpy('doSomething'),
      name: 'do-something', 
      properties: { say: 'what' },
    };
    component = StageComponent
      .withResources('dist/test/src/track-event-binding-behavior')
      .inView('<button click.delegate="doSomething() & trackEvent:name:properties">Test</button>')
      .boundTo(viewModel);
    component.bootstrap((aurelia: Aurelia) => {
      aurelia.use
        .standardConfiguration()
        .instance(TelemetryClient, telemetryClientSpy);
    });
  });

  function create() {
    return component.create(bootstrap as any).then(() => {
      button = component.element as HTMLButtonElement;
    });
  }

  function triggerBinding() {
    button.click();
  }

  function expectTrackEventToHaveBeenCalled() {
    expect(telemetryClientSpy.trackEvent).toHaveBeenCalledWith(viewModel.name, viewModel.properties)
  }

  afterEach(() => {
    component.dispose();
  });


  it('should execute bound expression when binding triggered', done => {
    create()
      .then(() => triggerBinding())
      .then(() => expect(viewModel.doSomething).toHaveBeenCalled())
      .then(done)
    ;
  });

  it('should trackEvent when binding triggered', done => {
    create()
      .then(() => triggerBinding())
      .then(() => expectTrackEventToHaveBeenCalled())
      .then(done)
    ;
  });

  it('should trackEvent only once async expression resolves when binding triggered', done => {
    const promiseMock = new PromiseMock<any>();
    viewModel.doSomething.and.returnValue(promiseMock.promise);

    create()
      .then(() => triggerBinding())
      .then(() => expect(telemetryClientSpy.trackEvent).not.toHaveBeenCalled())
      .then(() => promiseMock.resolve())
      .then(() => expectTrackEventToHaveBeenCalled())
      .then(done)
    ;
  });

  it('should not trackEvent when async expression is rejected when binding triggered', done => {
    const promiseMock = new PromiseMock<any>();
    viewModel.doSomething.and.returnValue(promiseMock.promise);

    create()
      .then(() => triggerBinding())
      .then(() => promiseMock.reject())
      .then(() => expect(telemetryClientSpy.trackEvent).not.toHaveBeenCalled())
      .then(done)
    ;
  });

});
