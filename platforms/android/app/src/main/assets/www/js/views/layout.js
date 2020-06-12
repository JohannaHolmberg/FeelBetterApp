"use strict";

import m from 'mithril';

let layout = {
    view: function(vnode) {
        //console.log(m.route.get());
        return [
            m("div#hamburgerMeny.sidenav", [
                m("div.sidenav-head", [
                    // for header
                    m("img.header-avatar", {
                        src: "../../img/avatar-female.png", width: '24', height: '24', // change to header foto,"""""""""""""""""""""""
                    }),
                    m("p.sidenav-header-boldtext", "Johanna Attefalk"),
                    m("p.sidenav-header-captiontext", "JohannaAttefalk@gmail.com")
                ]),
                m("div.sidenav-goback", [
                    // for body
                    m("div.sidenav-goback-leftdiv", [
                        // 2 texts
                        m("p.sidenav-boldtext", "Ska jag gå ut idag?"),
                        m("p.sidenav-captiontext", "Gå tillbaka till all statistik")
                    ]),

                    m("div.sidenav-goback-rightdiv", [
                        // arrow
                        m("img.navarrow", {
                            src: "../../img/rightArrow.png", width: '24', height: '24',
                            onclick: function() {
                                document.getElementById("hamburgerMeny").style.width = "0px";

                            }
                        })
                    ])

                ]),
                m("div.sidenav-body", [
                    // for body
                    m("div.sidenav-body-linkrow", [
                        // one link row in side nav body
                        m("div.sidenav-body-icon", [
                            // icon on left
                            m("img.sidnav-body-icon-img", {
                                src: "../../img/home.png", width: '24', height: '24'
                            })
                        ]),
                        m("div.sidenav-body-icontext-div", [
                            // link text on right
                            m("p.sidenav-body-icontext", "Hem")
                        ])
                    ])
                ])
            ]),
            m("div.google-header-bottom",
                m("div.inner-google-header", [
                    m("img", {
                        src: "../../img/baseline_menu_white_18dp.png", width: '24', height: '24',
                        onclick: function() {
                            document.getElementById("hamburgerMeny").style.width = "80%";
                        }
                }),
                    m("h6", {
                        class: "google-header-bottom-h6"
                    }, "Bör jag gå ut idag?")

                ]),

            ),
            m("main.container", vnode.children)

        ];
    }
};





export { layout };
