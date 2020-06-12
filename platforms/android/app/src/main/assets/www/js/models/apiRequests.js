// try to get geoJSON file
import m from "mithril";

//import { tryUrl } from "url.js";

var publicApiData = {
    covidData: [],

    getCovidData: function () {
        m.request({
            url: "https://services5.arcgis.com/fsYDFeRKu1hELJJs/arcgis/rest/services/FOHM_Covid_19_FME_1/FeatureServer/1/query?f=geojson&where=1%3D1&outFields=*&orderByFields=Statistikdatum%20desc",
            method: "GET"
        }).then(function(result) {
            publicApiData.covidData = result.features;
        });
    },

    // todaysCovidData: [],
    //
    // getTodaysCovidData: function() {
    //     publicApiData.covidData.map(function (data) {
    //         console.log(data.properties.Totalt_antal_fall);
    //         console.log(data[0]);
    //         return data[0];
    //     });
    // },


    // Air quality for sweden
    airData: [],

    getSwedensData: function(country) {
        return publicApiData.airData.filter(function(data) {
            console.log(data); // works, I get all of the datas
            return data.name == country;
        })[0];
    },




    getAirData: function () {
        m.request({
            url: "https://api.openaq.org/v1/countries",
            method: "GET"
        }).then(function(result) {
            //console.log(result);
            publicApiData.airData = result.results;
        });
    }

};

export { publicApiData };
