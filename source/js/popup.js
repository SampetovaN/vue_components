'use strict';

(function () {
  var TAG_CLOSED = 'popup--closed';
  var BUTTON_POPUP_TAG = 'main-nav__button';
  var buttonPopup = document.querySelector('.' + BUTTON_POPUP_TAG);
  var content = document.querySelector('.content');
  var popup = document.querySelector('.popup');
  var closeButton = document.querySelector('.popup__close');
  var popupSubmitButton = document.querySelector('.popup__button');
  if (buttonPopup && popup && content && closeButton && popupSubmitButton) {
    popup.addEventListener('keydown', function (evt) {
      window.focusTrap.set(evt, popupSubmitButton, closeButton);
    });
    var onEscKeyDown = function (evt) {
      window.utils.isEscEvent(evt, onCloseButton);
    };
    var isPopupButtonClickEvent = function (evt) {
      evt.preventDefault();
      if (!evt.target.classList.contains(BUTTON_POPUP_TAG)) {
        onCloseButton();
      }
    };

    var onClickPopupButton = function (evt) {
      evt.preventDefault();
      popup.classList.remove(TAG_CLOSED);
      window.scrollBlock.set();
      window.blockFocus.set();
      var inputName = popup.querySelector('#name');
      inputName.focus();
      document.addEventListener('keydown', onEscKeyDown);
      closeButton.addEventListener('click', onCloseButton);
      content.addEventListener('click', isPopupButtonClickEvent);
      buttonPopup.removeEventListener('click', onClickPopupButton);
    };
    var onCloseButton = function () {
      popup.classList.add(TAG_CLOSED);
      window.blockFocus.unset();
      window.scrollBlock.unset();
      buttonPopup.addEventListener('click', onClickPopupButton);
      content.removeEventListener('click', isPopupButtonClickEvent);
      closeButton.removeEventListener('click', onCloseButton);
    };
    buttonPopup.addEventListener('click', onClickPopupButton);
  }

})();
