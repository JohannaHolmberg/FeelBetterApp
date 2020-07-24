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
import { happiness } from "./views/categories-pages/happiness.js";
import { love } from "./views/categories-pages/love.js";
import { motivational } from "./views/categories-pages/motivational.js";
import { programmers } from "./views/categories-pages/programmers.js";
import { wisdom } from "./views/categories-pages/wisdom.js";


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
            "/category/love": {
                render: function() {
                    return m(layout, m(love));
                }
            },
            "/category/motivational": {
                render: function() {
                    return m(layout, m(motivational));
                }
            },
            "/category/happiness": {
                render: function() {
                    return m(layout, m(happiness));
                }
            },
            "/category/wisdom": {
                render: function() {
                    return m(layout, m(wisdom));
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
