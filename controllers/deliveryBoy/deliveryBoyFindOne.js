const DeliveryBoy = require("../../modules/deliveryboyModel");
module.exports = (req, res) => {
  if (req.params.id) {
    const id = req.params.id;
    DeliveryBoy.findById(id)
      .then((data) => {
        if (!data) {
          res.status(400).send({
            message: `Data may not present`,
          });
        } else {
          res.status(200).send({
            message: "Available data",
            data: data,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({ error: err.message });
      });
  }
};
