function throttle(callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}
var codeEls = document.querySelectorAll("code");
codeEls.forEach((code) => {
  code.addEventListener(
    "wheel",
    throttle(function (event) {
      if (event.deltaY) {
        event.preventDefault();
        let currentWindowY = window.pageYOffset;
        let currentWindowX = window.pageXOffset;
        window.scroll(currentWindowX, currentWindowY + event.deltaY);
        return;
      }
    }, 100)
  );
});
