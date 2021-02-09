'use strict';

(function () {
  var TAB_CLOSE_TAG = 'tab--closed';
  var TAB_OPEN_TAG = 'tab--opened';
  var NO_JS_TAG = 'main-info--nojs';
  var BUTTON_TAG = 'tab__button';
  var TAB_TAG = 'tab';
  var mainInfo = document.querySelector('.main-info');
  var tabs = document.querySelectorAll('.tab');
  if (mainInfo && tabs) {
    mainInfo.classList.remove(NO_JS_TAG);
    var closeAllTabs = function () {
      [].slice.call(tabs).forEach(function (tab) {
        tab.classList.remove(TAB_OPEN_TAG);
        tab.classList.add(TAB_CLOSE_TAG);
      });
    };
    var onClickTabButton = function (button) {

      var closestButton = button.closest('.' + TAB_TAG);
      if (closestButton.classList.contains(TAB_CLOSE_TAG)) {
        closeAllTabs();
        closestButton.classList.remove(TAB_CLOSE_TAG);
        closestButton.classList.add(TAB_OPEN_TAG);
      } else {

        closestButton.classList.remove(TAB_OPEN_TAG);
        closestButton.classList.add(TAB_CLOSE_TAG);
      }
    };

    closeAllTabs();
    [].slice.call(tabs).forEach(function (tab) {
      tab.addEventListener('click', function (evt) {
        if (evt.target.classList.contains(BUTTON_TAG)) {
          onClickTabButton(evt.target);
        }
      });
    });
  }
})();
