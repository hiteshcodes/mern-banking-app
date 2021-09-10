const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 7,
    },
    currBalance: {
      type: Number,
      required: true,
      trim: true,
      minlength: 1,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
