require('dotenv').config();
const express = require("express");
const stripe = require("stripe")(
  process.env.SECRET_KEY
);
const app = express();
const port = process.env.PORT || 3000;

app.post("/payment-sheet", async (req, res) => {
  try {
    const customer = await stripe.customers.create();

    const ephemeralKey = await stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: "2024-04-10" }
    );
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1999,
      currency: "usd",
      customer: customer.id,
      automatic_payment_methods: { enabled: true },
    });

    res.status(200).send({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
    });
  } catch (error) {
    res.status(500).send({ error: "Failed to create payment sheet" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
