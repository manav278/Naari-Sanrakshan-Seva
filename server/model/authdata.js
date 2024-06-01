import mongoose from "mongoose";
const authSchema = new mongoose.Schema({
  Email: {
    type: String,
    require: true,
    unique: true,
  },
  Password: {
    type: String,
    require: true,
  },
});

const authModel = mongoose.model("auths-data", authSchema);
export default authModel;
