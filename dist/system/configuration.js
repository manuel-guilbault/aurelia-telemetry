System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var defaultConfiguration;
    return {
        setters: [],
        execute: function () {
            exports_1("defaultConfiguration", defaultConfiguration = {
                trackLogs: true,
                trackGlobalErrors: true,
                trackPageViews: true,
            });
        }
    };
});
