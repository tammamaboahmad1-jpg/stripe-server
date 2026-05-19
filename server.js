const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const app = express();

app.use(cors());
app.use(express.json());

const stripe = Stripe("sk_test_51RYoI7Rw44i4QeFjYj4X4u1LxYv7X7v6M6c5M0QjQh3wM5L7Qn6Xx2B7xQx0WmR");

app.post("/create-checkout-session", async (req, res) => {

  try {

    const session = await stripe.checkout.sessions.create({

      payment_method_types: ["card"],

      mode: "subscription",

      line_items: [
        {
          price_data: {
            currency: "usd",

            product_data: {
              name: "AI Trading Premium"
            },

            unit_amount: 2000,

            recurring: {
              interval: "month"
            }
          },

          quantity: 1
        }
      ],

      success_url: "https://google.com",
      cancel_url: "https://google.com"

    });

    res.json({
      url: session.url
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});

app.listen(3000, () => {
  console.log("Server running");
});
