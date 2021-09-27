const mongoose = require("mongoose");

const collectorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      unique: true,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },

    contact: {
      type: String,
    },
  },
  { timestamps: true }
);

const SampleCollector = mongoose.model("SampleCollector", collectorSchema);
module.exports = SampleCollector;
