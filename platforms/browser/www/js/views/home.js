import m from "mithril";

// import { date } from "../models/date.js";

var home = {

view: function() {
  console.log("home works");

  return m("main.container", [
            m("div.home-page-container", [
                m("div.home-page-quote-div", [
                    m("p.home-page-quote-paragraf", " \" Drop by drop is the water pot filled \"")
                ])
              ])
        ]);// end return
  }
};

export { home };
