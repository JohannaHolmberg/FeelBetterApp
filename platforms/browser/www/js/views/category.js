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
                    href: "#!/category/love",
                    oncreate: m.route.link
                }, "Love"),
                m("img.category-page-box-img", {
                    src: "../../img/chongo.png", width: '144', height: '124',
                    href: "#!/category/love",
                    oncreate: m.route.link
                })
            ]),
            m("div.category-page-box", [
                m("a.category-page-box-link-text", {
                    href: "#!/category/happiness",
                    oncreate: m.route.link
                }, "Happiness"),
                m("img.category-page-box-img", {
                    src: "../../img/hijab.png", width: '144', height: '124',
                    href: "#!/category/happiness",
                    oncreate: m.route.link
                })
            ]),
            m("div.category-page-box", [
                m("a.category-page-box-link-text", {
                    href: "#!/category/motivational",
                    oncreate: m.route.link
                }, "Motivational"),
                m("img.category-page-box-img", {
                    src: "../../img/long.png", width: '144', height: '124',
                    href: "#!/category/motivational",
                    oncreate: m.route.link
                })
            ]),
            m("div.category-page-box", [
                m("a.category-page-box-link-text", {
                    href: "#!/category/wisdom",
                    oncreate: m.route.link
                }, "Wisdom"),
                m("img.category-page-box-img", {
                    src: "../../img/pony.png", width: '144', height: '124',
                    href: "#!/category/wisdom",
                    oncreate: m.route.link
                })
            ]),
            m("div.category-page-box", [
                m("a.category-page-box-link-text", {
                    href: "#!/category/programmers",
                    oncreate: m.route.link
                }, "Programming"),
                m("img.category-page-box-img", {
                    src: "../../img/top.png", width: '144', height: '124',
                    href: "#!/category/programmers",
                    oncreate: m.route.link
                })
            ])
        ]); // end return
  }
};

export { category };
