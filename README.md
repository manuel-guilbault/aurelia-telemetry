# aurelia-telemetry
Gather telemetry data in an Aurelia application.

## Configuration

```typescript
export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-telemetry', {
      trackLogs: true,
      trackGlobalErrors: true,
      trackPageViews: true,
    });

  aurelia.start().then(() => aurelia.setRoot());
}
```

The plugin's `configure` function expects an object with the following properties:

* **trackLogs**: enable or disable [automatic logs tracking](#automatic-logs-tracking). Default: `true`.
* **trackGlobalErrors**: enable or disable [automatic global errors tracking](#automatic-global-errors-tracking). Default: `true`.
* **trackPageViews**: enable or disable [automatic page views tracking](#automatic-page-views-tracking). Default: `true`.

## Configuring a client implementation

The `aurelia-telemetry` plugin offers some features to gather telemetry data. However,
it doesn't implement any client for specific telemetry technologies itself.

As such, when using `aurelia-telemetry` in an Aurelia application, you must also either
use an implementation plugin (see the [official list](#implementation-plugins)) or implement 
your own `TelemetryClient` (see how to do this [here](#custom-telemetry-client)).

## Custom telemetry client

A telemetry client must extend the `TelemetryClient` base class:

```typescript
import {
  TelemetryClient, 
  PageViewProperties, 
  EventProperties, 
  ErrorProperties, 
  LogProperties
} from 'aurelia-telemetry';

export class MyCustomTelemetryClient extends TelemetryClient {

  public trackPageView(properties: PageViewProperties): void {
    // Do your thing...
  }

  public trackEvent(name: string, properties?: EventProperties): void {
    // Do your thing...
  }

  public trackError(error: Error, properties?: ErrorProperties): void {
    // Do your thing...
  }

  public trackLog(message: string, properties?: LogProperties): void {
    // Do your thing...
  }
}
```

Next, you need to register it during startup:

```typescript
import {TelemetryClient} from 'aurelia-telemetry';
import {MyCustomTelemetryClient} from './my-custom-telemetry-client';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-telemetry');

  aurelia.container.registerSingleton(TelemetryClient, MyCustomTelemetryClient);

  aurelia.start().then(() => aurelia.setRoot());
}
```

## Implementation plugins

* [Application Insights](https://github.com/manuel-guilbault/aurelia-telemetry-application-insights)
* Google Analytics (TODO)
* Piwik (TODO)
* ...

## Features

### Automatic logs tracking

When enabled, all data logged using Aurelia's `LogManager` is sent to the `TelemetryClient`'s 
`trackLog` method.

### Automatic global errors tracking

When enabled, all unhandled errors are sent to the `TelemetryClient`'s `trackError` method.

### Automatic page views tracking

When enabled, each time Aurelia's `Router` successfully navigates to a route, the
`TelemetryClient`'s `trackPageView` method is called. Additionally, each time the `Router`
fails to navigate to a route, the `TelemetryClient`'s `trackError` method is called with
the navigation error.

### Event tracking

Using `aurelia-telemetry`'s `trackEvent` binding behavior, you can easily make an event
handler of any DOM element send a custom event tracking:

```html
<button click.delegate="doSomething() & trackEvent:'my-custom-event':{ someProperty: 'a value' }">Action</button>
```

Here, every time the button is clicked, `TelemetryClient`'s `trackEvent` method will be called
and passed `'my-custom-event'` as the event name and `{ someProperty: 'a value' }` as additional
properties.

The event will be sent to the `TelemetryClient` *after* the `doSomething()` method is
called. Additionally, if `doSomething()` returns a `Promise`, the call to `trackEvent` will
be performed only when the `Promise` is resolved. Thanks to this, you can make sure that
events tracked when a remote operation is performed won't be tracked if the remote call
fails.

The `trackEvent` binding behavior expects the event name as its first parameter, along with
an optional object containing additional properties as its second parameter.
