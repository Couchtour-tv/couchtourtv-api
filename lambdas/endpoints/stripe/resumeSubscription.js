import Responses from "../../common/API_Responses"
import { StripeSecretKey } from "../../common/constants"
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async (event) => {
  console.log("updateSubscription-event:: REMOVE COUPON ::", event)
  try {
    const body = await JSON.parse(event.body)
    const { subscriptionId } = body
    const updatedSubscription = await stripe.subscriptions.update(
      subscriptionId,
      { coupon: "" }
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
