cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-admobpro.AdMob",
      "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
      "pluginId": "cordova-plugin-admobpro",
      "clobbers": [
        "window.AdMob"
      ]
    },
    {
      "id": "cordova-plugin-admob-simple.AdMob",
      "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
      "pluginId": "cordova-plugin-admob-simple",
      "clobbers": [
        "window.plugins.AdMob"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro": "2.49.0",
    "cordova-admob-sdklibs": "2.1.6",
    "cordova-plugin-admob-simple": "3.3.8"
  };
});