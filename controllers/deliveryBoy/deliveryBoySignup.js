const DeliveryBoy = require("../../modules/deliveryboyModel");
var bcrypt = require("bcryptjs");

// Load input validations
const validateRegisterInput = require("../../validations/signupValidation");

module.exports = (req, res, next) => {
  // Check Validation
  const { error, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(error);
  }

  const { name, email, password, contact } = req.body;
  bcrypt.hash(password, 10, function (err, hash) {
    if (err) {
      return res.json({
        msg: "Somthing Wrong, Try Later !",
        err: err,
      });
    } else {
      var delivery = new DeliveryBoy({
        name: name,
        email: email,
        password: hash,
        contact: contact,
      });
      delivery
        .save()
        .then((result) => {
          res.status(201).json({
            msg: "Data Added successfully",
            result: result,
          });
        })
        .catch((err) => {
          res.status(500).send({
            mesaage: err.message || "some error occured while creating data",
          });
        });
    }
  });
};
