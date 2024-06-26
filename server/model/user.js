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
  Address: {
    type: String,
    require: true,
  },
  City: {
    type: String,
    require: true,
  },
  State: {
    type: String,
    require: true,
  },
  Country: {
    type: String,
    require: true,
  },
  Case_IDS: {
    type: [Number],
  },
});

const userModel = mongoose.model("users", userSchema);
export default userModel;
