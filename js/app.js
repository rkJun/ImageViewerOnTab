require.config({
 	baseUrl: chrome.extension.getURL("/js"),
 	paths : {
		jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min",
    underscore: "extlib/underscore",
    tipjs: "extlib/tipJS-MVC-1.43",
    app: "app"
	}
});
require([ "tipjs", "underscore", "jquery" ], function() {
  tipJS.config({
    applicationPath: {
      chromeEx : '/js/app'
    }
  });
  tipJS.loadApp("chromeEx");
  tipJS.action('chromeEx.Main');
});