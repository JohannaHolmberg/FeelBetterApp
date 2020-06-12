import m from "mithril";

// import { date } from "../models/date.js";

var category = {

view: function() {
  console.log("category works");

  return m("main.container", [
            m("div.category-page-container", [
                m("div.category-page-header-text", "Categories"),
                m("div.category-page-box", [
                    m("p", "Box 1")
                ]),
                m("div.category-page-box", [
                    m("p", "Box 2")
                ]),
                m("div.category-page-box", [
                    m("p", "Box 3")
                ]),
                m("div.category-page-box", [
                    m("p", "Box 4")
                ])
              ])
        ]); // end return
  }
};

export { category };
