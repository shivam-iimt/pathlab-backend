const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
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

const AdminDB = mongoose.model("AdminDB", adminSchema);
module.exports = AdminDB;
