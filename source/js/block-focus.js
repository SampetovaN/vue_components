'use strict';

(function () {
  var NEGATIVE_TABINDEX = -1;
  var COMMON_TABINDEX = 0;
  var nonInteractiveItems = document.querySelectorAll('.header a, .header button, .main a, .main button, .footer a, .footer button');
  var unsetTabindex = function (node) {
    node.tabIndex = NEGATIVE_TABINDEX;
  };
  var setTabindex = function (node) {
    node.tabIndex = COMMON_TABINDEX;
  };
  var blockTab = function () {
    if (nonInteractiveItems) {
      [].slice.call(nonInteractiveItems).forEach(unsetTabindex);
    }
  };
  var unblockTab = function () {
    if (nonInteractiveItems) {
      [].slice.call(nonInteractiveItems).forEach(setTabindex);
    }
  };
  window.blockFocus = {
    set: blockTab,
    unset: unblockTab,
  };
})();
