import authdata from "../model/authdata.js";
import user from "../model/user.js";
import express from "express";
const router = express.Router();
import { getUserId } from "./Loginroutes.js";

router.get("/dashboard", async (req, res) => {
  const userID = getUserId();
  console.log("1");
  try {
    const u = await user.findOne({ User_ID: userID });
    console.log(u);
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

export default router;
