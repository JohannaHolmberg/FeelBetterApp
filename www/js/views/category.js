import m from "mithril";

// import { date } from "../models/date.js";

var category = {

view: function() {
  console.log("category works");

  return m("main.container", [
            m("div.category-page-container", [
                m("div.category-page-header-text", "Categories"),

                m("div.category-page-box", [
                    m("a.category-page-box-link-text", {
                        href: "#!/category/advice",
                        oncreate: m.route.link
                    }, "Advice")
                ]),
                m("div.category-page-box", [
                    m("a.category-page-box-link-text", {
                        href: "#!/category/programmers",
                        oncreate: m.route.link
                    }, "Programming")
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
