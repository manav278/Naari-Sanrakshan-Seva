import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  User_ID: {
    type: Number,
    require: true,
    unique: true,
  },
  First_Name: {
    type: String,
    require: true,
  },
  Last_Name: {
    type: String,
    require: true,
  },
  Mobile_Number: {
    type: String,
    require: true,
  },
  Email: {
    type: String,
    require: true,
    unique: true,
  },
});

const userModel = mongoose.model("users", userSchema);
export default userModel;
