const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    diseaseObjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Disease",
    },

    testName: {
      type: String,
      require: true,
    },

    price: {
      type: String,
      require: true,
    },

    preTestInfo: {
      type: String,
    },

    reportDelivery: {
      type: String,
    },
  },
  { timestamps: true }
);

const TestList = mongoose.model("TestList", testSchema);
module.exports = TestList;
