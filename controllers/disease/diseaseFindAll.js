const Disease = require("../../modules/diseaseModel");

module.exports = (req, res) => {
  Disease.find().sort("-createdAt")
    .then((data) => {
      res.status(200).send({
        message: "List of all Available data",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
