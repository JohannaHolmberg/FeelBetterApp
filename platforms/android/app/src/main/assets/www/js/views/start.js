import m from "mithril";

// import { date } from "../models/date.js";

var start = {

view: function() {
  console.log("Start works");

  return m("div.start-page-container", [
            m("div.start-page-headerlogo-div", [
                m("img.start-page-headerlogo-img", {
                    src: "../../img/startLogo.png", width: '24', height: '24'
                })
            ]),

            m("div.start-page-headertext-div", [
              m("p.start-page-headertext-text", "FeelBetter")
            ]),

            m("div.start-page-quote-div", [
                m("p.start-page-quote-paragraf", " \" Hapiness is not something made. It comes from your own actions\"")
            ]),

            m("div.start-page-nextpage-buttondiv", [
                m("button.start-page-nextpage-button", [
                    m("a.start-page-nextpage-button-text", {
                        href: '#!/home',
                        oncreate: m.route.link
                    }, "MAKE ME FEEL BETTER")
                ])
            ])
        ]); // end return
  }
};



export { start };
