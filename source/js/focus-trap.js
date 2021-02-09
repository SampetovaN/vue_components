'use strict';

(function () {
  var setFocus = function (evt, item) {
    item.focus();
    evt.preventDefault();
  };
  var setFocusTrap = function (evt, lastFocusableItem, firstFocusableItem) {
    if (window.utils.isTabEvent(evt)) {
      if (evt.shiftKey) {
        if (document.activeElement === firstFocusableItem) {
          setFocus(evt, lastFocusableItem);
        }
      } else {
        if (document.activeElement === lastFocusableItem) {
          setFocus(evt, firstFocusableItem);
        }
      }
    }
  };
  window.focusTrap = {
    set: setFocusTrap,
  };
})();
