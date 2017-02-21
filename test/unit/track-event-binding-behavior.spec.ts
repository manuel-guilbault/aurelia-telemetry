import { ComponentTester, StageComponent } from 'aurelia-testing';
import { Aurelia } from 'aurelia-framework';
import { bootstrap } from 'aurelia-bootstrapper';
import { TelemetryClient } from '../../src/telemetry-client';

interface ViewModel {
  name: string;
  properties: { [name: string]: any };
  doSomething: () => void;
}

class PromiseMock<T> extends Promise<T> {

  resolve: (result?: T) => void;
  reject: (reason?: any) => void;

  constructor() {
    super((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
}

describe('LogAppender', () => {

  let
    telemetryClientSpy: TelemetryClient,
    viewModel: ViewModel,
    component: ComponentTester,
    button: HTMLButtonElement;

  beforeEach(() => {
    telemetryClientSpy = jasmine.createSpyObj('TelemetryClient', ['trackPageView', 'trackError']);
    viewModel = {
      name: 'do-something', 
      properties: { say: 'what' },
      doSomething: jasmine.createSpy('doSomething'),
    };
    component = StageComponent
      .withResources('src/track-event-binding-behavior')
      .inView('<button click.delegate="doSomething() & trackEvent:name:properties">Test</button>')
      .boundTo(viewModel);
    component.bootstrap((aurelia: Aurelia) => {
      aurelia.container.registerInstance(TelemetryClient, telemetryClientSpy);
    });
  });

  function stage() {
    return component.create(bootstrap as any).then(() => {
      console.log('bootstrapped!');
      button = component.element.querySelector('button') as HTMLButtonElement;
    });
  }

  function triggerBinding() {
    button.click();
  }

  function expectTrackEventCalled() {
    expect(telemetryClientSpy.trackEvent).toHaveBeenCalledWith(viewModel.name, viewModel.properties)
  }

  afterEach(() => {
    component.dispose();
  });


  it('should execute bound expression when binding triggered', done => {
    stage()
      .then(() => triggerBinding())
      .then(() => expect(viewModel.doSomething).toHaveBeenCalled())
      .then(done)
    ;
  });

  it('should trackEvent when binding triggered', done => {
    stage()
      .then(() => triggerBinding())
      .then(() => expectTrackEventCalled())
      .then(done)
    ;
  });

  it('should trackEvent only once async expression resolves when binding triggered', done => {
    const promise = new PromiseMock<any>();
    viewModel.doSomething = jasmine.createSpy('doSomething').and.returnValue(promise);

    stage()
      .then(() => triggerBinding())
      .then(() => expect(telemetryClientSpy.trackEvent).not.toHaveBeenCalled())
      .then(() => promise.resolve())
      .then(() => expectTrackEventCalled())
      .then(done)
    ;
  });

  it('should not trackEvent when async expression is rejected when binding triggered', done => {
    const promise = new PromiseMock<any>();
    viewModel.doSomething = jasmine.createSpy('doSomething').and.returnValue(promise);

    stage()
      .then(() => triggerBinding())
      .then(() => promise.reject())
      .then(() => expect(telemetryClientSpy.trackEvent).not.toHaveBeenCalled())
      .then(done)
    ;
  });

});
