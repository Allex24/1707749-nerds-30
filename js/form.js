const writeToUs = document.querySelector(".button-contacts-block");
const popup = document.querySelector(".popup");
const formClose = popup.querySelector(".modal-close");

writeToUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
});

formClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
});


const loginLink = document.querySelector(".login-link");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");

loginLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
});
