import m from "mithril";

import { quoteApi } from "../../models/quotesApi.js";

var advice = {
    oninit: function() {
        quoteApi.getQuoteData1();
    },
    view: function() {
      console.log("Advice underpage works");
      return m("main.container", [
                m("div.home-page-container", [
                    m("h3", "Advice"),
                    m("div.home-page-quote-div", [
                        m("p.home-page-quote-paragraf", " \" " + quoteApi.quoteAdvice.advice + " \" ")
                    ])
                  ])
            ]);// end return
      }
};

export { advice };
