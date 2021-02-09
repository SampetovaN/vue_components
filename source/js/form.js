'use strict';

(function () {
  var PHONE_INPUT_TAG = 'form__input--phone input';
  var INVALID_PHONE_MESSAGE = 'Пожалуйста, введите номер телефона в формате 8-xxx-xxx-xx-xx';
  var Inputmask = require('inputmask').default;
  var inputmaskApply = new Inputmask({mask: '+7(999)9999999', showMaskOnFocus: true, greedy: true});


  var checkInputPhone = function (inputPhone) {
    if (inputPhone.validity.patternMismatch) {
      inputPhone.setCustomValidity(INVALID_PHONE_MESSAGE);
    } else {
      inputPhone.setCustomValidity('');
    }
  };
  var forms = document.querySelectorAll('.form');
  if (forms) {
    [].slice.call(forms).forEach(function (form) {
      var inputPhone = form.querySelector('.' + PHONE_INPUT_TAG);
      inputmaskApply.mask(inputPhone);
      if (inputPhone) {
        inputPhone.addEventListener('input', function (evt) {
          checkInputPhone(evt.target);
        });
      }
      form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        window.localStorageData.set(evt);
        form.reset();
      });
    });
  }
})();
