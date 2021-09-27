const Vendor = require("../../modules/vendorModel");

// Load input validations
const validateRegisterInput = require("../../validations/updateValidation");

module.exports = (req, res, next) => {
  // Check Validation
  const { error, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }

  Vendor.findByIdAndUpdate(req.params.id, req.body, {
    upsert: true,
    new: true,
  })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "error whie finding data" });
      } else {
        res.status(200).json({
          msg: "Data Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "error in updating information" });
    });
};
