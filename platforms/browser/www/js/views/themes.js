import m from "mithril";

// import { date } from "../models/date.js";

var theme = {
    view: function() {
      console.log("theme works");

      return m("main.container", [
                m("div.theme-page-container", [
                    m("div.theme-page-header-text", "Themes"),
                    m("div.theme-page-box", [
                        m("p", "Box 1")
                    ]),
                    m("div.theme-page-box", [
                        m("p", "Box 2")
                    ]),
                    m("div.theme-page-box", [
                        m("p", "Box 3")
                    ]),
                    m("div.theme-page-box", [
                        m("p", "Box 4")
                    ])
                  ])
            ]); // end return
      }
    };

export { theme };
