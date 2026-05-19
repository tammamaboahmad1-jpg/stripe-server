const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const stripe = Stripe("YOUR_STRIPE_SECRET");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {

      const session = await stripe.checkout.sessions.create({

            payment_method_types: ["card"],

                mode: "subscription",

                    line_items: [{

                              price_data: {

                                        currency: "usd",

                                                product_data: {
                                                              name: "AI Trading Premium"
                                                },

                                                        unit_amount: 1000,

                                                                recurring: {
                                                                              interval: "month"
                                                                }

                              },

                                    quantity: 1

                    }],

                        success_url: "https://your-site.com/success",

                            cancel_url: "https://your-site.com/cancel"

      });

        res.json({
                url: session.url
        });

});

app.listen(3000, () => console.log("Server running"));
        })
                                                                }
                                                }
                              }
                    }]
      })
})
