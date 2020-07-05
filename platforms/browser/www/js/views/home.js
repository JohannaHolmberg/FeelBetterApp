import m from "mithril";

import { quoteApi } from "../models/quotesApi.js";

var home = {
    oninit: function() {
        quoteApi.getQuoteDataforHome(); // random quote for home page
        //quoteApi.getQuoteDataforInspiration();blocked for some reason???

        quoteApi.getQuoteDataforProgrammers();
    },
    view: function() {

        var allQuote = [];
        var randomQuote = Math.floor(Math.random() * 30) + 1;
        quoteApi.quoteDataforHome.map(function(quote) {
            allQuote.push(quote.quoteText)
        });



        return m("div.home-page-container", [
                m("div.home-page-headertext-div", [
                  m("p.home-page-headertext-text", "FeelBetter")
                ]),
                m("div.home-page-quote-div", [
                    m("p.home-page-quote-paragraf", " \" " + allQuote[randomQuote] + " \" ")
                ])
        ]); // end main.container
      }
};

export { home };
