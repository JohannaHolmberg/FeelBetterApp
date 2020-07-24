import m from "mithril";

import { privateApi } from "../../models/privateApi.js";

var motivational = {
    view: function() {
      console.log("Motivational underpage works");

      var len = privateApi.motivationalQuotes.length;
      var randomQuote = Math.ceil(Math.random() * len);

      return m("main.container", [
                m("div.subcategory-page-container", [
                    m("div.subcategory-page-header-div", [
                        m("div.subcategory-page-header-text", "Motivational"),
                    ]),
                    m("div.subcategory-page-features-div", [
                        m("img.subcategory-page-img-back-arrow", {
                            src: "../../img/arrow_back.png", width: '34', height: '34',
                            href: "#!/category",
                            oncreate: m.route.link
                        })
                    ]),
                    m("div.home-page-quote-div", [
                        m("p.subcategory-page-quote-paragraf", " \" " + privateApi.motivationalQuotes[randomQuote] + " \" ")
                    ]),
                    m("div.subcategory-page-bottom-features", [
                        m("img.subcategory-page-img-back-arrow", {
                            src: "../../img/left_arrow.png", width: '34', height: '34',
                            href: "#!/motivational",
                            oncreate: m.route.link
                        }),
                        m("img.subcategory-page-img-front-arrow", {
                            src: "../../img/right_arrow.png", width: '34', height: '34',
                            href: "#!/motivational",
                            oncreate: m.route.link
                        })
                    ]),
                  ])
            ]);// end return
      }
};


export { motivational };
