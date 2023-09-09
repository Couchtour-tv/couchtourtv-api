// const AWS = require('aws-sdk');

import Responses from "../common/API_Responses"

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body)
    console.log("Stripe Handle Checkout Session Payload", payload)

    // const dataObject = payload.data.object

    switch (payload.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = payload.data.object
        console.log(
          "Checkout Session Completed Webhook",
          checkoutSessionCompleted
        )
        console.log(
          "Checkout Session Completed Webhook Stringified",
          JSON.stringify(checkoutSessionCompleted)
        )
        console.log(
          "Checkout Session Completed Webhook | Line Items Data |:",
          checkoutSessionCompleted.line_items.data
        )
        console.log(
          "Checkout Session Completed Webhook | Line Items Data Stringified |:",
          JSON.stringify(checkoutSessionCompleted.line_items.data)
        )
        // Then define and call a function to handle the event checkout.session.completed
        break
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`)
    }

    return Responses._200({ success: true })
  } catch (error) {
    console.log("\n", error.stack)
    return Responses._400({ success: false })
  }
}
