import Responses from "../../common/API_Responses"
import { StripeSecretKey } from "../../common/constants"
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async (event) => {
  console.log("retrieveSubscription-event ::", event)
  try {
    const body = await JSON.parse(event.body)
    const { subscriptionId } = body
    const subscription = await stripe.subscriptions.retrieve(subscriptionId)
    console.log("Retrieve Subscription | Succeeded |:", subscription)
    return Responses._200(subscription)
  } catch (error) {
    console.log("Retrieve Subscription | Error |", error)
    return Responses._500({
      message: "Retrieve Subscription failed",
      success: false,
    })
  }
}
