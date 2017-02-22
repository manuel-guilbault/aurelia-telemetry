# aurelia-telemetry

Helps you gather telemetry data in an Aurelia application.

## Configuration

Unless told otherwise, the plugin doesn't do anything automatically. However, the configuration callback 
is passed a `ConfigurationBuilder` instance, which can be used to enable various automatic tracking features:

```typescript
import {ConfigurationBuilder} from 'aurelia-telemetry';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-telemetry', (c: ConfigurationBuilder) => {
      // Configure the plugin here
    });

  aurelia.start().then(() => aurelia.setRoot());
}
```

The `ConfigurationBuilder` interface has the following methods:

* `trackLogs()`: enables [automatic logs tracking](#automatic-logs-tracking).
* `trackGlobalErrors()`: enables [automatic global errors tracking](#automatic-global-errors-tracking).
* `trackPageViews()`: enables [automatic page views tracking](#automatic-page-views-tracking).
* `useDefault()`: enables all types of automatic tracking listed above.

All those methods return the `ConfigurationBuilder` instance, so their calls can be chained.

For example, to enable only global errors and page views:

```typescript
aurelia.use
  .plugin('aurelia-telemetry', (c: ConfigurationBuilder) => {
    c.trackGlobalErrors().trackPageViews();
  });
```

Or to enable all types of automatic tracking:

```typescript
aurelia.use
  .plugin('aurelia-telemetry', (c: ConfigurationBuilder) => {
    c.useDefault();
  });
```

## Configuring a client implementation

The `aurelia-telemetry` plugin doesn't implement any client for specific telemetry technologies.
As such, when using `aurelia-telemetry` in an Aurelia application, you must also either
use an adapter plugin (see the [existing implementations](#implementation-plugins)) over your favorite
telemetry provider, or implement your own `TelemetryClient`.

## Custom telemetry client

A telemetry client must extend the `TelemetryClient` base class:

```typescript
import {TelemetryClient} from 'aurelia-telemetry';

export class MyCustomTelemetryClient extends TelemetryClient {

  public trackPageView(path: string): void {
    // Do your thing...
  }

  public trackEvent(name: string, properties?: { [key: string]: any }): void {
    // Do your thing...
  }

  public trackError(error: Error | string): void {
    // Do your thing...
  }

  public trackLog(message: string, level: number, ...args: any[]): void {
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
    .plugin('aurelia-telemetry', (c: ConfigurationBuilder) => { c.useDefault(); })
    .singleton(TelemetryClient, MyCustomTelemetryClient);

  aurelia.start().then(() => aurelia.setRoot());
}
```

## Implementation plugins

* [Application Insights](https://github.com/manuel-guilbault/aurelia-telemetry-application-insights)
* [Google Analytics](https://github.com/manuel-guilbault/aurelia-telemetry-google-analytics)
* Piwik (TODO)
* Logstash (TODO)

## Features

### Automatic logs tracking

When enabled, all logs passing through Aurelia's `LogManager` are sent to the `TelemetryClient`'s 
`trackLog` method.

### Automatic global errors tracking

When enabled, all unhandled errors are sent to the `TelemetryClient`'s `trackError` method.

### Automatic page views tracking

When enabled, each time Aurelia's `Router` successfully navigates to a route, the
`TelemetryClient`'s `trackPageView` method is called. Additionally, each time the `Router`
fails to navigate to a route, the `TelemetryClient`'s `trackError` method is called with
the navigation error.

### Event tracking

Using `aurelia-telemetry`'s `trackEvent` binding behavior, you can easily make any `.delegate`,
`.trigger`, or `.call` bindings send custom event trackings:

```html
<button click.delegate="doSomething() & trackEvent:'my-custom-event'">Action</button>
```

Here, every time the button is clicked, `TelemetryClient`'s `trackEvent` method will be called
and passed `'my-custom-event'` as the event name.

The event will be sent to the `TelemetryClient` *after* the `doSomething()` method is
called. Additionally, if `doSomething()` returns a `Promise`, the call to `trackEvent` will
be performed only when the `Promise` is resolved. Thanks to this, you can make sure that
events depending on a remote operation will be tracked only once the remote call completes
successfully.

Optionally, an object containing additional properties can also be passed as the binding
behavior's second parameter:

```html
<button click.delegate="doSomething() & trackEvent:'my-custom-event':{ someProperty: 'a value' }">Action</button>
```

In such a case, the additional properties will also be passed to the underlying `TelemetryClient`'s `trackEvent` 
method. Those properties can then be used by the client implementation, or not. It depends on the implementation
you use.
