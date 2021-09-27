const mongoose = require("mongoose");

const deliveryBoySchema = new mongoose.Schema(
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

const DeliveryBoy = mongoose.model("DeliveryBoy", deliveryBoySchema);
module.exports = DeliveryBoy;
