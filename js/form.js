const writeToUs = document.querySelector(".button-contacts-block");
const popup = document.querySelector(".popup");
const formClose = popup.querySelector(".modal-close");
const popupForm = popup.querySelector(".contacts-popup-form");
const formLogin = popup.querySelector(".login-user");
const emailUser = popup.querySelector(".email-user");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

writeToUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");

  if (storage) {
    formLogin.value = storage;
    emailUser.focus();
  } else {
    formLogin.focus();
  }
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

popupForm.addEventListener("submit", function (evt) {
  if (!formLogin.value || !emailUser.value) {
    evt.preventDefault();
    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", loginLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});
