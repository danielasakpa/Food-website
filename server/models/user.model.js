const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required",
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
  hashedPassword: {
    type: String,
    required: "Password is required",
  },
});

UserSchema.methods = {
  authenticate: async function (plainText) {
    return bcrypt.compare(plainText, this.hashedPassword)
  },
};

module.exports = mongoose.model("User", UserSchema);
