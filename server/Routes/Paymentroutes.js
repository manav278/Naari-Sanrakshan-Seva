import express from "express";
const router = express.Router();
import stripe from "stripe";
import donateModel from "../model/donate.js";
const stripeInstance = stripe(
  "sk_test_51POG6zDgIr1KvcHtI8QtqPATTDdyPqSrKo47mZIkPy6SZqtAZ4Dlu02WTB86qd2UDv4XunNkTxAABigDwLc92wtm00zaZC7WAh"
);

router.post("/create-checkout-session", async (req, res) => {
  try {
    const formData = req.body;
    if (!formData.amount || isNaN(formData.amount)) {
      throw new Error("Invalid amount received.");
    }
    // console.log(formData);

    const lineItems = [
      {
        price_data: {
          currency: "inr",
          product_data: {
            name: "NGO Donation",
          },
          unit_amount: formData.amount * 100,
        },
        quantity: 1,
      },
    ];

    const session = await stripeInstance.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/sucess",
      cancel_url: "http://localhost:3000/cancel",
    });
    await donateModel.create(formData);
    res.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error.message);
    res.status(500).json({ error: error.message });
  }
});

export default router;
