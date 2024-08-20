import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: true,
    },
    email_id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
  },
  { timestamps: true }
);
const userModel = mongoose.model("User", userSchema);

export default userModel;
