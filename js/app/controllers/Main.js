/**
 * User: javarouka
 * Date: 13. 7. 2
 * Time: 오후 5:26
 */
tipJS.controller({
  name : "chromeEx.Main",
  beforeInvoke: function(params) {
  },
  invoke: function(params) {
    var self = this;
    var d = $.ajax({
      url: "http://search.daum.net/search?w=tot&q=%EC%98%A4%EB%8A%98%EB%82%A0%EC%94%A8"
    });
    var n = $.ajax({
      url: "http://search.naver.com/search.naver?query=%EC%98%A4%EB%8A%98%EB%82%A0%EC%94%A8"
    });

    d.done(function(data) {
      var weatherArea = $(data).find("#weatherColl");
      console.log("???");
      self.renderTemplate({
        url: "js/app/tpl/timeline.html",
        renderTo: "content-wrapper",
        data: {
          title: "Daum",
          content: weatherArea
        }
      })
    });

    //    n.done(function(data) {
    //      var weatherArea = $(data).find("#content .content_search");
    //      $("body").append(weatherArea);
    //    });
    /*
     this.renderTemplate({

     });
     */
  }
});
