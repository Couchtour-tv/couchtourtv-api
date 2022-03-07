// const AWS = require('aws-sdk');

import Responses from "../common/API_Responses"
// import DynamoDb from '../../libs/dynamodb-lib';

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body)
    const parsedEvent = JSON.parse(event)
    console.log("stripePaymentIntentSuccess :: payload", payload)
    console.log("stripePaymentIntentSuccess :: raw event", event)
    console.log("stripePaymentIntentSuccess :: parsed event", parsedEvent)

    // switch (event.type) {
    //   case "payment_intent.succeeded":
    //     const paymentIntent = event.data.object
    //     console.log("paymentIntent", paymentIntent)
    //     // Then define and call a function to handle the event payment_intent.succeeded
    //     break
    //   // ... handle other event types
    //   default:
    //     console.log(`Unhandled event type ${event.type}`)
    // }

    // const stripeSuccessCheckoutWrite = {
    //     TableName: StripeSuccessfulCheckoutTableName,
    //     Item: {
    //         ID: uuidv4(),
    //         checkoutId: payload.id,
    //         stripeCustomerId: payload.customer,
    //         receivedAt: Date.now(),
    //         payload: payload
    //     }
    // };
    // await DynamoDb.put(stripeSuccessCheckoutWrite);
    return Responses._200({ success: true })
  } catch (error) {
    console.log("\n", error.stack)
    return Responses._400({ success: false })
  }
}
