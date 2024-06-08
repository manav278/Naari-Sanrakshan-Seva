import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Case_ID: {
    type: Number,
    require: true,
    unique: true,
  },
  Complainants_ID: {
    type: Number,
    require: true,
    unique: true,
  },
  Complaint_Description: {
    type: String,
    require: true,
  },
  Respondent_Name: {
    type: String,
    require: true,
  },
  Respondent_Contact_Number: {
    type: String,
    require: true,
  },
  Respondent_Email: {
    type: String,
    require: true,
    unique: true,
  },
  Respondent_Address: {
    type: String,
    require: true,
  },
  Evidence: {
    type: String,
    require: true,
  },
  Evidence_Description: {
    type: String,
    require: true,
  },
  Witness_Name: {
    type: String,
    require: true,
  },
  Witness_Contact_Number: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("users", userSchema);
export default userModel;
