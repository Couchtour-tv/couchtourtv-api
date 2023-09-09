import Responses from "../../common/API_Responses"
import { StripeSecretKey } from "../../common/constants"
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async (event) => {
  console.log("Create Checkout Session ::", event)
  try {
    // const body = await JSON.parse(event.body)
    // const { priceId } = body

    const session = await stripe.checkout.sessions.create({
      expand: ["line_items"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: "VIP",
              description: "The Very Moon Musical VIP Experience",
            },
            unit_amount: 51,
            // tax_behavior: "exclusive",
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 0,
            maximum: 8,
          },
        },
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: "General Admission",
              description: "The Very Moon Musical General Admission Experience",
            },
            unit_amount: 52,
            // tax_behavior: "exclusive",
          },
          adjustable_quantity: {
            enabled: true,
            minimum: 0,
            maximum: 8,
          },
        },
      ],
      // automatic_tax: {
      //   enabled: true,
      // },
      mode: "payment",
      metadata: {
        vip: 30,
        ga: 150,
      },
      success_url: "https://beta.couchtour.tv?success=true",
      cancel_url: "https://beta.couchtour.tv?canceled=true",
    })

    console.log("Create Checkout Session | Succeeded |:", session)
    console.log("Create Checkout Session | Date |:", Date.now())
    console.log(
      "Create Checkout Session | Line Items Data |:",
      session.line_items.data
    )
    console.log(
      "Create Checkout Session | Line Items Data Stringified |:",
      JSON.stringify(session.line_items.data)
    )
    // res.redirect(303, session.url)
    // return Responses._200(session)
    const response = {
      statusCode: 302, // 302 Found (temporary redirect)
      headers: {
        Location: session.url, // Set the Location header to the URL of the session
      },
    }

    return response
  } catch (error) {
    console.log("Create Checkout Session | Error |", error)
    return Responses._500({
      message: "Create Checkout Session failed",
      success: false,
    })
  }
}
