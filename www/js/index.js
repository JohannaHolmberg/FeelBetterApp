"use strict";
import m from "mithril";

// Pages import, organised in alfapetical order
import { category } from "./views/category.js";
import { home } from "./views/home.js";
import { layout } from "./views/layout.js";
import { start } from "./views/start.js";
import { theme } from "./views/themes.js";

// categories sub pages, organised in alfapetical order
import { advice } from "./views/categories-pages/advice.js";
import { happiness } from "./views/categories-pages/happiness.js";
import { love } from "./views/categories-pages/love.js";
import { motivational } from "./views/categories-pages/motivational.js";
import { programmers } from "./views/categories-pages/programmers.js";
import { wisdom } from "./views/categories-pages/wisdom.js";


var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        console.log("Device is ready");
        initAd();
        showBannerFunc();

        m.route(document.body, "/", {
            "/": {
                render: function() {
                    return m(start);
                }
            },
            "/home": {
                render: function() {
                    return m(layout, m(home));
                }
            },
            "/category": {
                render: function() {
                    return m(layout, m(category));
                }
            },
            // Sub pages to category
            "/category/advice": {
                render: function() {
                    return m(layout, m(advice));
                }
            },
            "/category/programmers": {
                render: function() {
                    return m(layout, m(programmers));
                }
            },
            "/category/love": {
                render: function() {
                    return m(layout, m(love));
                }
            },
            "/category/motivational": {
                render: function() {
                    return m(layout, m(motivational));
                }
            },
            "/category/happiness": {
                render: function() {
                    return m(layout, m(happiness));
                }
            },
            "/category/wisdom": {
                render: function() {
                    return m(layout, m(wisdom));
                }
            },
            "/themes": {
                render: function() {
                    return m(layout, m(theme));
                }
            }
        });

    }, // end onDeviceReady()
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};





        //initialize the goodies
function initAd(){
        if ( window.plugins && window.plugins.AdMob ) {
            var ad_units = {
                ios : {
                    banner: 'ca-app-pub-1926886918318703/5580279605'		//PUT ADMOB ADCODE HERE
                    // interstitial: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx'	//PUT ADMOB ADCODE HERE
                },
                android : {
                    banner: 'ca-app-pub-1926886918318703/5580279605'	//PUT ADMOB ADCODE HERE
                    // interstitial: 'ca-app-pub-xxxxxxxxxxx/xxxxxxxxxxx'	//PUT ADMOB ADCODE HERE
                }
            };
            var admobid = ( /(android)/i.test(navigator.userAgent) ) ? ad_units.android : ad_units.ios;

            window.plugins.AdMob.setOptions( {
                publisherId: admobid.banner,
                interstitialAdId: admobid.interstitial,
                adSize: window.plugins.AdMob.AD_SIZE.SMART_BANNER,	//use SMART_BANNER, BANNER, LARGE_BANNER, IAB_MRECT, IAB_BANNER, IAB_LEADERBOARD
                bannerAtTop: false, // set to true, to put banner at top
                overlap: true, // banner will overlap webview
                offsetTopBar: false, // set to true to avoid ios7 status bar overlap
                isTesting: false, // receiving test ad
                autoShow: true // auto show interstitial ad when loaded
            });

            registerAdEvents();
        } else {
            //alert( 'admob plugin not ready' );
        }
}
//functions to allow you to know when ads are shown, etc.
function registerAdEvents() {
        document.addEventListener('onReceiveAd', function(){});
        document.addEventListener('onFailedToReceiveAd', function(data){});
        document.addEventListener('onPresentAd', function(){});
        document.addEventListener('onDismissAd', function(){ });
        document.addEventListener('onLeaveToAd', function(){ });
        document.addEventListener('onReceiveInterstitialAd', function(){ });
        document.addEventListener('onPresentInterstitialAd', function(){ });
        document.addEventListener('onDismissInterstitialAd', function(){ });
    }



//display the banner
function showBannerFunc(){
    window.plugins.AdMob.createBannerView();
}
//display the interstitial
function showInterstitialFunc(){
    window.plugins.AdMob.createInterstitialView();	//get the interstitials ready to be shown and show when it's loaded.
    window.plugins.AdMob.requestInterstitialAd();
}





app.initialize();
