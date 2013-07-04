/**
 * User: javarouka
 * Date: 13. 7. 4
 * Time: 오후 11:17
 */
var photos = [];
chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
    photos = request.imgSources;
    sendResponse("received " + photos.length + " size image");
  }
);