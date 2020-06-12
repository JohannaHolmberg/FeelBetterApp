import m from "mithril";

// import { date } from "../models/date.js";

var start = {

view: function() {
  console.log("Start works");

  return m("div.start-page-container", [
                m("div.start-page-quote-div", [
                    m("p.start-page-quote-paragraf", " \" Hapiness is not something made. It comes from your own actions\"")
                ]),

                m("div.start-page-nextpage-buttondiv", [
                    m("button.start-page-nextpage-button", [
                        m("a", {
                            href: '#!/home',
                            oncreate: m.route.link
                        }, "Make me feel better")
                    ])
                ])
            ]); // end return
  }
};



export { start };
