const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegisterInput(data) {
  let error = {};

  data.testName = !isEmpty(data.testName) ? data.testName : "";
  data.price = !isEmpty(data.price) ? data.price : "";

  if (Validator.isEmpty(data.testName)) {
    error.testName = "Test name field is required";
  }

  if (Validator.isEmpty(data.testName)) {
    error.price = "Price field is required";
  }

  return {
    error,
    isValid: isEmpty(error),
  };
};
