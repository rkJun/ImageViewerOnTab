/**
 * User: javarouka
 * Date: 13. 7. 2
 * Time: 오후 5:25
 */
tipJS.define({
  noCache: true,
  noCacheVersion: "0.10.0",
  noCacheParam: "tipJS",
  noCacheAuto: true,
  name: "chromeEx",
  controllers:[
    "Main.js"
  ],
  models:[
    "DaumWeather.js",
    "NaverWeather.js"
  ],
  views:[
    "Fill.js"
  ]
});
