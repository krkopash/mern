import express from "express";
import { protect } from "../middlewares/auth";
import { transferCredits } from "../services/wallet";

const router = express.Router();

router.post("/transfer", protect, async (req: any, res) => {
  try {
    const { toUserId, amount } = req.body;

    const result = await transferCredits( req.user.id, toUserId,amount,"CREDIT");

    res.json(result);
  } catch (error: any) {
    res.json({ message: error.message });
  }
});

export default router;
