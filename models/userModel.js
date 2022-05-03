import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      default: "user",
    },
    root: {
      type: String,
      default: true,
    },
  },
  {
    timeseries: true,
  }
);

let User = mongoose.models.user || mongoose.model('user',userSchema);

export default User;