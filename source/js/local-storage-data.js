'use strict';

(function () {
  var FORM_POPUP = '.popup__form';
  var FORM_CONSULT = '.consult__form';
  var isStorageSupp = true;
  var storageNamePopup = '';
  var storagePhonePopup = '';
  var storageMessagePopup = '';
  var storageNameConsult = '';
  var storagePhoneConsult = '';
  var storagePhoneMessage = '';
  var inputNamePopup = document.querySelector('#name');
  var inputPhonePopup = document.querySelector('#phone');
  var inputMessagePopup = document.querySelector('#question');
  var inputNameConsult = document.querySelector('#user-name');
  var inputPhoneConsult = document.querySelector('#user-phone');
  var inputMessageConsult = document.querySelector('#question-consult');
  try {
    storageNamePopup = localStorage.getItem('user-name');
    storagePhonePopup = localStorage.getItem('user-phone');
    storageMessagePopup = localStorage.getItem('question');
    storageNameConsult = localStorage.getItem('name');
    storagePhoneConsult = localStorage.getItem('phone');
    storagePhoneMessage = localStorage.getItem('question-consult');

  } catch (err) {
    isStorageSupp = false;
  }

  var getItemStorage = function () {
    if (isStorageSupp) {
      if (inputNamePopup && storageNamePopup) {
        inputNamePopup.value = storageNamePopup;
      }
      if (inputPhonePopup && storagePhonePopup) {
        inputPhonePopup.value = storagePhonePopup;
      }
      if (inputMessagePopup && storageMessagePopup) {
        inputMessagePopup.value = storageMessagePopup;
      }
      if (inputNameConsult && storageNameConsult) {
        inputNameConsult.value = storageNameConsult;
      }
      if (inputPhoneConsult && storagePhoneConsult) {
        inputPhoneConsult.value = storagePhoneConsult;
      }
      if (inputMessageConsult && storagePhoneMessage) {
        inputMessageConsult.value = storagePhoneMessage;
      }
    }
  };
  var setLocalStorage = function (evt) {
    if (evt.target.closest(FORM_POPUP)) {
      localStorage.setItem('user-name', inputNamePopup.value);
      localStorage.setItem('user-phone', inputPhonePopup.value);
      if (inputMessagePopup.value) {
        localStorage.setItem('question', inputMessagePopup.value);
      } else {
        localStorage.removeItem('question');
      }
    }
    if (evt.target.closest(FORM_CONSULT)) {
      localStorage.setItem('name', inputNameConsult.value);
      localStorage.setItem('phone', inputPhoneConsult.value);
      if (inputMessageConsult.value) {
        localStorage.setItem('question-consult', inputMessageConsult.value);
      } else {
        localStorage.removeItem('question-consult');
      }
    }
  };
  getItemStorage();
  window.localStorageData = {
    set: setLocalStorage
  };
})();
