const TestList = require("../../modules/testListModel");

// Load input validations
const validateRegisterInput = require("../../validations/testValidation");

module.exports = (req, res, next) => {
  // Check Validation
  const { error, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }

  const { diseaseObjectId, testName, price, preTestInfo, reportDelivery } =
    req.body;

  const test = new TestList({
    diseaseObjectId: diseaseObjectId,
    testName: testName,
    price: price,
    preTestInfo: preTestInfo,
    reportDelivery: reportDelivery,
  });
  test
    .save()
    .then((data) => {
      res.status(201).json({
        msg: "Data added successfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating data",
      });
    });
};
