'use strict';

(function () {
  var BODY_LOCK_CLASS = 'body-lock';
  var body = document.querySelector('body');
  if (body) {

    var getBodyScrollTop = function () {
      return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
    };

    var setScrollBlock = function () {
      body.dataset.scrollY = getBodyScrollTop();
      body.classList.add(BODY_LOCK_CLASS);
      body.style.top = '-' + body.dataset.scrollY + 'px';
    };

    var unsetScrollBlock = function () {
      body.classList.remove(BODY_LOCK_CLASS);
      window.scrollTo(0, body.dataset.scrollY);
    };
  }
  window.scrollBlock = {
    set: setScrollBlock,
    unset: unsetScrollBlock
  };

})();
