'use strict';

(function () {
  var ESCAPE_BUTTON = 'Escape';
  var KEYCODE_TAB = 9;
  var NAME_TAB = 'Tab';
  var isEscEvent = function (evt, action) {
    if (evt.key === ESCAPE_BUTTON) {
      evt.preventDefault();
      action(evt);
    }
  };

  var isTabEvent = function (evt) {
    return (evt.key === NAME_TAB || evt.keyCode === KEYCODE_TAB);
  };

  window.utils = {
    isEscEvent: isEscEvent,
    isTabEvent: isTabEvent
  };
})();
