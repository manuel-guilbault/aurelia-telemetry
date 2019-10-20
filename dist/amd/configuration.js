define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConfigurationBuilderImpl = /** @class */ (function () {
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
    exports.ConfigurationBuilderImpl = ConfigurationBuilderImpl;
});
