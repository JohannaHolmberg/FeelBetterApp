"use strict";
import m from "mithril";

// Pages import, organised in alfapetical order
import { category } from "./views/category.js";
import { home } from "./views/home.js";
import { layout } from "./views/layout.js";
import { start } from "./views/start.js";
import { theme } from "./views/themes.js";

// categories sub pages, organised in alfapetical order
import { advice } from "./views/categories-pages/advice.js";
import { programmers } from "./views/categories-pages/programmers.js";


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
            // Sub pages to category
            "/category/advice": {
                render: function() {
                    return m(layout, m(advice));
                }
            },
            "/category/programmers": {
                render: function() {
                    return m(layout, m(programmers));
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
