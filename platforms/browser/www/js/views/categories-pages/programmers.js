import m from "mithril";

import { quoteApi } from "../../models/quotesApi.js";

var programmers = {
    oninit: function() {
        quoteApi.getQuoteDataforProgrammers();
    },
    view: function() {
      console.log("Programmers underpage works");

      return m("main.container", [
                m("div.home-page-container", [
                    m("div.home-page-quote-div", [
                        m("p.home-page-quote-paragraf", " \" " + quoteApi.QuoteDataforProgrammers.en + " \" ")
                    ])
                  ])
            ]); // end return
      }
};

export { programmers };
