const mongoose = require("mongoose");

const diseaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    logo: {
      type: String,
    },
  },
  { timestamps: true }
);

const Disease = mongoose.model("Disease", diseaseSchema);
module.exports = Disease;
