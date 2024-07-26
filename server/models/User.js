import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      require: true,
    },
    user_email: {
      type: String,
      require: true,
    },
    user_password: {
      type: String,
      require: true,
      validate: {
        validator: function (v) {
          return v.length >= 6;
        },
        message: (props) => `Password must be at least 6 characters long.`,
      },
    },
    user_address: {
      type: [{ String }],
      require: true,
    },
    user_phone: {
      type: Number,
      require: true,
    },
    user_profile: {
      type: String,
      default: "/ASSETS/admin/assets/profile.png",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
