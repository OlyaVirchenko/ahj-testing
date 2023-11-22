"use strict";

var _validator = _interopRequireDefault(require("../validator"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
test.each([["valid number card", "5555555555554444", true], ["valid number card", "4539283476916568", true], ["valid number card", "6762403225743237", true], ["valid number card with letter", "4111111111111111asa", true], ["invalid number card", "411111111", false], ["invalid number card", "12357847523695414", false]])("it should be %s", (_, input, expected) => {
  expect((0, _validator.default)(input)).toBe(expected);
});