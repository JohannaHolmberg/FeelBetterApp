import m from "mithril";

// import { date } from "../models/date.js";

var layout = {
    view: function(vnode) {
        console.log("home works");

        return [
            m("main.container", vnode.children),
            m("div.layout-bottom-menu", [

                m("div.layout-bottom-menu-inner", [

                    m("div.layout-bottom-menu-link-container", [
                        m("a.layout-bottom-menu-link", {
                            href: '#!/home',
                            oncreate: m.route.link
                        }, "HOME"),
                    ]),

                    m("div.layout-bottom-menu-link-container", [
                        m("a.layout-bottom-menu-link", {
                            href: '#!/category',
                            oncreate: m.route.link
                        }, "CATEGORY")
                    ]),
                    m("div.layout-bottom-menu-link-container", [
                        m("a.layout-bottom-menu-link", {
                            href: '#!/themes',
                            oncreate: m.route.link
                        }, "THEME")
                    ]),
                    m("div.layout-bottom-menu-link-container", [
                        m("a.layout-bottom-menu-link", {
                            href: '#!/reminder',
                            oncreate: m.route.link
                        }, "REMINDER")

                    ])                
                ])

            ])

        ];
    }
};



export { layout };
