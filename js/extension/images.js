/**
 * User: javarouka
 * Date: 13. 7. 4
 * Time: 오후 10:26
 */
window.addEventListener("load", function() {
  var photos = [];
  Array.prototype.slice.call(document.images).forEach(function(image) {
    if (image.naturalWidth > 1) {
      photos.push({
        width: image.naturalWidth,
        height: image.naturalHeight,
        src: image.src
      });
    }
  });
  chrome.extension.sendMessage({"imgSources" : photos }, function(res) {
    console.log("send ok to background " + res);
  });
}, true);


