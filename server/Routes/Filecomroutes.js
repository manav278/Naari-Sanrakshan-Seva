import user from "../model/user.js";
import caseModel from "../model/case.js";
import express from "express";
import multer from "multer";
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload", upload.single("Evidence"), async (req, res) => {
  const email = req.query.email;
  const u = await user.findOne({ Email: email });
  const Complainant_ID = u.User_ID;
  const {
    Complaint_Description,
    Respondent_Name,
    Respondent_Contact_Number,
    Respondent_Email,
    Respondent_Address,
    Evidence_Description,
    Witness_Name,
    Witness_Contact_Number,
  } = req.body;

  const file = req.file;

  const newCase = new caseModel({
    Complainant_ID,
    Complaint_Description,
    Respondent_Name,
    Respondent_Contact_Number,
    Respondent_Email,
    Respondent_Address,
    Evidence: file.buffer,
    Evidence_Description,
    Witness_Name,
    Witness_Contact_Number,
  });
  await newCase.save();
  res.status(200).json({ message: "Case details saved successfully" });

  // console.log("Uploaded file:", file);
});
export default router;
