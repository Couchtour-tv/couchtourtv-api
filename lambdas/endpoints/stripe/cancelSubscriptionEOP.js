import Responses from "../../common/API_Responses"
import { StripeSecretKey } from "../../common/constants"
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async (event) => {
  console.log("updateSubscription-event:: cancel end of period ::", event)
  try {
    const body = await JSON.parse(event.body)
    const { subscriptionId, cancel_at_period_end } = body
    const updatedSubscription = await stripe.subscriptions.update(
      subscriptionId,
      { cancel_at_period_end }
    )
    console.log(
      "Update Subscription - cancel end of period | Succeeded |:",
      updatedSubscription
    )
    return Responses._200(updatedSubscription)
  } catch (error) {
    console.log("Update Subscription - cancel end of period | Error |", error)
    return Responses._500({
      message: "Update Subscription failed",
      success: false,
    })
  }
}
