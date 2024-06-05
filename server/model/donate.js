import mongoose from "mongoose";

const donateSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  amount: {
    type: Number,
    require: true,
  },
});

const donateModel = mongoose.model("donaters", donateSchema);
export default donateModel;
