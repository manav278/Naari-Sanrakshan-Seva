import authdata from "../model/authdata.js";
import user from "../model/user.js";
import express from "express";
const router = express.Router();
let currentUserId;

function getUserId() {
  return currentUserId;
}
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  let u;
  try {
    u = await authdata.findOne({ Email: email });
    if (!u) {
      res.status(200).json({ message: "User doesn't exists" });
    } else {
      let id = await user.find({ Email: email });
      currentUserId = id[0].User_ID;
      res.status(200).json({ message: "Login successful" });
    }
  } catch (e) {
    console.log(e);
    res.status(200).json({ message: "Error from fetching database" });
  }
});

export default router;
export { getUserId };
