"use strict";
import m from "mithril";

// Pages import, organised in alfapetical order
import { category } from "./views/category.js";
import { home } from "./views/home.js";
import { layout } from "./views/layout.js";
import { start } from "./views/start.js";
import { theme } from "./views/themes.js";



var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        console.log("Device is ready");
        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(start);
                }
            },
            "/home": {
                render: function() {
                    return m(layout, m(home));
                }
            },
            "/category": {
                render: function() {
                    return m(layout, m(category));
                }
            },
            "/themes": {
                render: function() {
                    return m(layout, m(theme));
                }
            }
        });
    }
};

app.initialize();
