import m from "mithril";

import { publicApiData } from "../models/apiRequests.js";
// import { date } from "../models/date.js";

var home = {
    oninit: function() {
        publicApiData.getCovidData();
        //publicApiData.getTodaysCovidData();
        publicApiData.getAirData();
    },

    view: function() {
        var d = new Date();
        var date = d.getDate();
        var month = d.getMonth();
        var mo = "";

        if (month == 1) {
            mo = "Januari";
        } else if (month == 2) {
            mo = "Februari";
        } else if (month == 3) {
            mo = "Mars";
        } else if (month == 4) {
            mo = "April";
        } else if (month == 5) {
            mo = "Maj";
        } else if (month == 6) {
            mo = "Juni";
        } else if (month == 7) {
            mo = "July";
        } else if (month == 8) {
            mo = "Agusti";
        } else if (month == 9) {
            mo = "September";
        } else if (month == 10) {
            mo = "Oktober";
        } else if (month == 11) {
            mo = "November";
        } else if (month == 12) {
            mo = "December";
        }

        var printDate = date.toString() + " " + mo;
        var allCovid = [];

        publicApiData.covidData.map(function (data) {
            allCovid.push(data.properties.Totalt_antal_fall);
        });

        console.log(publicApiData.airData[84].count);

        return m("main.container", [
            // date box under header, to show todays date and
            // arrows to go back and forth on days
            m("div.date-box", [
                m("div.date-box-text", printDate),
                m("img.header-arrow", { src: "../../img/rightArrow.png", width: '18', height: '18' }),
                m("img.header-arrow", { src: "../../img/leftArrow.png", width: '18', height: '18' })
            ]),

            // todays date statistics
            m("div.box", [
                m("p.box-header", "Idag"),
                m("p.box-undertext", "Antal positiva idag"),
                m("p.box-positiv-number", allCovid[0])
            ]),
            m("div.box", [
                m("p.box-header", "Luftkvalitet idag"),
                m("p.box-undertext", "Luftkvalitet i Sverige i µg/m³"),
                m("p.box-positiv-number", publicApiData.airData[84].count)
            ])
        ]);
    }
};

export { home };
