import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  Case_ID: {
    type: Number,
    require: true,
    unique: true,
  },
  Complainant_ID: {
    type: Number,
    require: true,
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
  },
  Respondent_Address: {
    type: String,
    require: true,
  },
  Evidence: {
    type: Buffer,
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

// Define middleware to auto-increment Case_ID
caseSchema.pre("save", async function (next) {
  try {
    if (!this.Case_ID) {
      const lastCase = await this.constructor.findOne(
        {},
        {},
        { sort: { Case_ID: -1 } }
      );
      if (lastCase) {
        this.Case_ID = lastCase.Case_ID + 1;
      } else {
        this.Case_ID = 1;
      }
    }
    await this.model("users").findOneAndUpdate(
      { User_ID: this.Complainant_ID }, // Assuming user_id is the reference to UserSchema
      { $push: { Case_IDS: this.Case_ID } }, // Assuming cases is the array field in UserSchema
      { new: true }
    );
    next();
  } catch (error) {
    next(error);
  }
});

const caseModel = mongoose.model("case", caseSchema);
export default caseModel;
