/**
 * User: javarouka
 * Date: 13. 7. 2
 * Time: 오후 5:26
 */
tipJS.controller({
  name : "ImagesOnCurrenrPage.Main",

  invoke: function() {

    var self = this;

    var imageModel = self.loadModel("Images", true);
    var renderer = self.loadView("Renderer");

    imageModel.load();
    renderer.render(imageModel);

    self.bindEvent(renderer);
  },

  // @TODO: 이미지 상세정보 보여주기
  onImageClick: function(e) {
    console.log(e.target);
  },

  bindEvent: function(view) {
    var self = this;
    view.getImgElements().on("click", function(e) {
      self.onImageClick.call(e.target, e);
    });
  }

});
