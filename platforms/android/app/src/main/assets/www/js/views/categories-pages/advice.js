import m from "mithril";

import { quoteApi } from "../../models/quotesApi.js";

var advice = {
    oninit: function() {
        quoteApi.getQuoteData1();
    },
    view: function() {
      console.log("Advice underpage works");
      return m("main.container", [
                m("div.subcategory-page-container", [
                    m("div.subcategory-page-header-div", [
                        m("div.subcategory-page-header-text", "ADVICE"),
                    ]),
                    m("div.subcategory-page-features-div", [
                        m("img.subcategory-page-img-back-arrow", {
                            src: "../../img/arrow_back.png", width: '34', height: '34',
                            href: "#!/category",
                            oncreate: m.route.link
                        })
                    ]),
                    m("div.subcategory-page-quote-div", [
                        m("p.subcategory-page-quote-paragraf", " \" " + quoteApi.quoteAdvice.advice + " \" ")
                    ])
                  ])
            ]);// end return
      }
};

export { advice };
