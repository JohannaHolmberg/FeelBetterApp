import m from "mithril";

// import { date } from "../models/date.js";

var category = {

view: function() {
    console.log("category works");

    return m("div.category-page-container", [
            m("div.category-page-header-div", [
                m("div.category-page-header-text", "CATEGORIES"),
            ]),
            m("div.category-page-box", [
                m("a.category-page-box-link-text", {
                    href: "#!/category/advice",
                    oncreate: m.route.link
                }, "Advice"),
                m("img.category-page-box-img", {
                    src: "../../img/wavy.png", width: '144', height: '124',
                    href: "#!/category/advice",
                    oncreate: m.route.link
                })
            ]),
            m("div.category-page-box", [
                m("a.category-page-box-link-text", {
                    href: "#!/category/programmers",
                    oncreate: m.route.link
                }, "Programming"),
                m("img.category-page-box-img", {
                    src: "../../img/chongo.png", width: '144', height: '124',
                    href: "#!/category/programmers",
                    oncreate: m.route.link
                })
            ]),

            m("div.category-page-box", [
                m("a.category-page-box-link-text", "Coming soon")
            ]),

            m("div.category-page-box", [
                m("a.category-page-box-link-text", "Coming soon")
            ]),
            m("div.category-page-box", [
                m("a.category-page-box-link-text", "Coming soon")
            ]),
            m("div.category-page-box", [
                m("a.category-page-box-link-text", "Coming soon")
            ])
        ]); // end return
  }
};

export { category };
