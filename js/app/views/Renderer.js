/**
 * User: javarouka
 * Date: 13. 7. 2
 * Time: 오후 5:31
 */
tipJS.view({

  name:"ImagesOnCurrenrPage.Renderer",
  $: {
    "contentWrapper": "#content-wrapper"
  },

  _createjqElements: function() {
    var eleSet = this.$,
      k;
    for(k in eleSet) {
      if(!eleSet.hasOwnProperty(k)) continue;
      eleSet[k] = $(eleSet[k]);
    }
  },

  __init: function() {
    this._createjqElements();
  },

  render : function(imageModel) {
    var self = this;
    var _templateConfig = {
      url:"/js/app/tpl/images.tpl",
      renderTo: "image-list",
      data: imageModel.list()
    };
    self.renderTemplate(_templateConfig);
    self.$.images = $("img");
  },

  getImgElements: function() {
    return self.$.images = $("img");
  }

});