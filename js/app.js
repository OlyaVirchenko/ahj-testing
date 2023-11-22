"use strict";

var _validator = _interopRequireDefault(require("./validator"));
var _paySystem = _interopRequireDefault(require("./paySystem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
document.querySelector("#card-submit").addEventListener("click", event => {
  event.preventDefault();
  const num = document.querySelector("#numberCard-input").value;
  if ((0, _validator.default)(num)) {
    (0, _paySystem.default)(num);
  } else {
    alert("Invalid card number");
  }
});
document.querySelector("#input-reset").addEventListener(event => {
  event.preventDefault();
  document.form[0].reset();
  document.querySelectorAll(".card-item").forEach(el => {
    el.classList.remove("active");
  });
});