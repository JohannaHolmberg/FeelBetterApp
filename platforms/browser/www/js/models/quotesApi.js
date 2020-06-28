// get geoJSON file
import m from "mithril";

var quoteApi = {
    quoteAdvice: [],
    quoteDataforHome: [],
    QuoteDataforInspiration: [],
    QuoteDataforProgrammers: [],

    getQuoteData1: function () {
        m.request({
            url: "https://api.adviceslip.com/advice",
            method: "GET"
        }).then(function(result) {
            //console.log(result.slip);
            quoteApi.quoteAdvice = result.slip;
        });
    },

    getQuoteDataforHome: function () { // works
        m.request({
            url: "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=30",
            method: "GET"
        }).then(function(result) {
            //console.log(result);
            quoteApi.quoteDataforHome = result.quotes;
        });
    },
    getQuoteDataforInspiration: function () { // works
        m.request({
            url: "http://api.forismatic.com/api/1.0/",
            method: "GET"
        }).then(function(result) {
            console.log(result);
            quoteApi.QuoteDataforInspiration = result;
        });
    },
    getQuoteDataforProgrammers: function () { // works
        m.request({
            url: "https://programming-quotes-api.herokuapp.com/quotes/random/lang/en",
            method: "GET"
        }).then(function(result) {
            //console.log(result);
            quoteApi.QuoteDataforProgrammers = result;
        });
    }
};

export { quoteApi };
