var popups = document.querySelectorAll(".modal");

var feedbackButton = document.querySelector(".contacts-feedback-button");
var mapButton = document.querySelector(".contacts-map-button");
var buyButton = document.querySelectorAll(".button-buy");

var feedbackForm = document.querySelector(".modal-feedback-form");
var mapModal = document.querySelector(".modal-map");
var orderModal = document.querySelector(".modal-order");

/* polyfill for IE11 */
if ('NodeList' in window && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

popups.forEach(function (element) {
  var close = element.querySelector(".modal-close");

  close.addEventListener("click", function (event) {
    event.preventDefault();

    element.classList.remove("modal-show");
    element.classList.remove("modal-error");
  });
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();

    var modal = document.querySelector(".modal.modal-show");

    if (modal !== null) {
      modal.classList.remove("modal-show");
      modal.classList.remove("modal-error");
    }
  }
});

if (feedbackButton !== null && feedbackForm !== null) {
  var formFields = feedbackForm.querySelectorAll("[name]");

  var name = feedbackForm.querySelector("[name='name']");
  var email = feedbackForm.querySelector("[name='email']");
  var message = feedbackForm.querySelector("[name='message']");

  feedbackButton.addEventListener("click", function (event) {
    event.preventDefault();

    feedbackForm.classList.add("modal-show");
    name.focus();
  });

  formFields.forEach(function (element) {
    if (element.required === true) {
      element.required = false;
    }
  });

  feedbackForm.addEventListener("submit", function (event) {
    if (!name.value || !email.value || !message.value) {
      event.preventDefault();

      feedbackForm.classList.remove("modal-error");
      feedbackForm.offsetWidth = feedbackForm.offsetWidth;
      feedbackForm.classList.add("modal-error");
    }
  });
}

if (mapButton !== null && mapModal !== null) {
  mapButton.addEventListener("click", function (event) {
    event.preventDefault();

    mapModal.classList.add("modal-show");
  });
}

if (buyButton.length && orderModal !== null) {
  buyButton.forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();

      orderModal.classList.add("modal-show");
    });
  });
}
