const Disease = require("../../modules/diseaseModel");

// Load input validations
const validateRegisterInput = require("../../validations/diseaseValidation");

module.exports = (req, res, next) => {
  // Check Validation
  const { error, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }

  const { name, logo } = req.body;

  const diseas = new Disease({
    name: name,
    logo: logo,
  });
  diseas
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
