"use strict";
import m from "mithril";

import { home } from "./views/home.js";
import { layout } from "./views/layout.js";

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        console.log("Device is ready");
        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(layout, m(home));
                }
            }
        });
    }
};
app.initialize();
