/**
 * User: javarouka
 * Date: 13. 7. 5
 * Time: 오전 12:27
 */
require([ "tipJS", "underscore", "jquery" ], function() {
  tipJS.config({
    applicationPath: {
      ImagesOnCurrenrPage : '/js/app'
    }
  });
  tipJS.loadApp("ImagesOnCurrenrPage");
  tipJS.action('ImagesOnCurrenrPage.Main');
});