require.config({
 	baseUrl: chrome.extension.getURL("/js"),
 	paths : {
		jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min",
    underscore: "extlib/underscore",
    tipjs: "extlib/tipJS-MVC-1.43"
	}
});

require([ "tipjs", "underscore", "jquery" ], function() {

  var d = $.ajax({
    url: "http://search.daum.net/search?w=tot&q=%EC%98%A4%EB%8A%98%EB%82%A0%EC%94%A8"
  });
  var n = $.ajax({
    url: "http://search.naver.com/search.naver?query=%EC%98%A4%EB%8A%98%EB%82%A0%EC%94%A8"
  });

  d.done(function(data) {
    var weatherArea = $(data).find("#weatherColl");
    $("body").append(weatherArea);
  });

  n.done(function(data) {
    var weatherArea = $(data).find("#content .content_search");
    $("body").append(weatherArea);
  });

});