import m from "mithril";

// import { date } from "../models/date.js";

var layout = {
    view: function(vnode) {
        console.log("home works");

        return [
            m("main.container", vnode.children),
            m("div.layout-bottom-menu", [
                m("a.layout-bottom-menu-link", {
                    href: '#!/home',
                    oncreate: m.route.link
                }, "Home"),
                m("a.layout-bottom-menu-link", {
                    href: '#!/category',
                    oncreate: m.route.link
                }, "Category"),
                m("a.layout-bottom-menu-link", {
                    href: '#!/themes',
                    oncreate: m.route.link
                }, "Theme"),
                m("a.layout-bottom-menu-link", {
                    href: '#!/reminder',
                    oncreate: m.route.link
                }, "Reminder")
            ])

        ];
    }
};

export { layout };
