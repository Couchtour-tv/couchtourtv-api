import Responses from "../../common/API_Responses"
import { StripeSecretKey } from "../../common/constants"
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async (event) => {
  console.log("createSubscription-event ::", event)
  try {
    const body = await JSON.parse(event.body)
    const { priceId, customer } = body
    const subscription = await stripe.subscriptions.create({
      customer,
      items: [
        {
          price: priceId,
        },
      ],
      payment_behavior: "default_incomplete",
      expand: ["latest_invoice.payment_intent"],
      trial_period_days: 14,
    })
    console.log("Create Subscription | Succeeded |:", subscription)
    return Responses._200(subscription)
  } catch (error) {
    console.log("Create Subscription | Error |", error)
    return Responses._500({
      message: "Create Subscription failed",
      success: false,
    })
  }
}
