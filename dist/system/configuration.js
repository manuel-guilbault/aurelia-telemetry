System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ConfigurationBuilderImpl;
    return {
        setters: [],
        execute: function () {
            ConfigurationBuilderImpl = (function () {
                function ConfigurationBuilderImpl() {
                    this.doTrackLogs = false;
                    this.doTrackGlobalErrors = false;
                    this.doTrackPageViews = false;
                }
                ConfigurationBuilderImpl.prototype.useDefault = function () {
                    return this
                        .trackLogs()
                        .trackGlobalErrors()
                        .trackPageViews();
                };
                ConfigurationBuilderImpl.prototype.trackLogs = function () {
                    this.doTrackLogs = true;
                    return this;
                };
                ConfigurationBuilderImpl.prototype.trackGlobalErrors = function () {
                    this.doTrackGlobalErrors = true;
                    return this;
                };
                ConfigurationBuilderImpl.prototype.trackPageViews = function () {
                    this.doTrackPageViews = true;
                    return this;
                };
                ConfigurationBuilderImpl.prototype.create = function () {
                    return {
                        doTrackLogs: this.doTrackLogs,
                        doTrackGlobalErrors: this.doTrackGlobalErrors,
                        doTrackPageViews: this.doTrackPageViews
                    };
                };
                return ConfigurationBuilderImpl;
            }());
            exports_1("ConfigurationBuilderImpl", ConfigurationBuilderImpl);
        }
    };
});
