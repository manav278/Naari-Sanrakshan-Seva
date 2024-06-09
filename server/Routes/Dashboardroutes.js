import caseModel from "../model/case.js";
import user from "../model/user.js";
import express from "express";
const router = express.Router();

router.get("/dashboard", async (req, res) => {
  const email = req.query.email;
  try {
    const u = await user.findOne({ Email: email });
    if (u) {
      res.json(u);
    } else {
      res.status(200).json({ message: "User not found" });
    }
  } catch (error) {
    console.log("Error fetching user data:", error);
    res.status(200).json({ message: "Internal server error" }); // Return 500 for internal server error
  }
});

router.get("/dashboardcases", async (req, res) => {
  try {
    const email = req.query.email;
    const u = await user.findOne({ Email: email });
    const Complainant_ID = u.User_ID;
    const cases = await caseModel.find({ Complainant_ID });
    res.status(200).json(cases);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/evidence/:id", async (req, res) => {
  try {
    const caseId = req.params.id;
    const caseData = await caseModel.findById(caseId);
    if (!caseData) {
      return res.status(404).json({ message: "Case not found" });
    }
    const evidenceData = caseData.Evidence;
    // Assuming the evidenceData is stored as a Buffer, you can send it as a response
    res.setHeader("Content-Disposition", `attachment; filename=${caseId}.pdf`);
    res.setHeader("Content-Type", "application/octet-stream");
    res.send(evidenceData);
  } catch (error) {
    console.error("Error fetching evidence:", error);
    res.status(500).json({ message: "Error fetching evidence" });
  }
});

export default router;
