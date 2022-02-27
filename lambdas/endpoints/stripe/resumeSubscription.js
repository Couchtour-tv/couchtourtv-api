import Responses from "../../common/API_Responses"
import { StripeSecretKey } from "../../common/constants"
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async (event) => {
  console.log("updateSubscription-event:: RESUME ::", event)
  try {
    const body = await JSON.parse(event.body)
    const { subscriptionId } = body
    const updatedSubscription = await stripe.subscriptions.update(
      subscriptionId,
      {
        cancel_at_period_end: false,
        pause_collection: {
          resumes_at: new Date(),
        },
      }
    )
    console.log("Update Subscription | Succeeded |:", updatedSubscription)
    return Responses._200(updatedSubscription)
  } catch (error) {
    console.log("Update Subscription | Error |", error)
    return Responses._500({
      message: "Update Subscription failed",
      success: false,
    })
  }
}
