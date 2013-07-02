require.config({
 	baseUrl: chrome.extension.getURL("/js"),
 	paths : {
		jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min",
    underscore: "extlib/underscore",
    tipjs: "extlib/tipJS-MVC-1.43"
	}
});

require([ "tipjs", "underscore", "jquery" ], function() {

//  console.log("load tipJS " + tipJS);
//  console.log("load underscore " + _);
//  console.log("load jquery " + $);

});