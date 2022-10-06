import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

export default mongoose.model("User", UserSchema);
