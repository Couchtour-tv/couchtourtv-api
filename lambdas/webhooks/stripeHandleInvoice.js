// const AWS = require('aws-sdk');

import Responses from "../common/API_Responses"

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body)
    console.log("stripeHandleInvoice", payload)

    const dataObject = payload.data.object

    switch (payload.type) {
      case "invoice.payment_failed":
        //   const invoice = payload.data.object;
        console.log("data object invoice.payment_failed", dataObject)
        // Then define and call a function to handle the event invoice.payment_failed
        break
      case "invoice.payment_succeeded":
        //   const invoice = payload.data.object;
        console.log("data object invoice.payment_succeeded", dataObject)
        // Then define and call a function to handle the event invoice.payment_succeeded
        break
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${payload.type}`)
    }

    // switch (payload.type) {
    //     case 'invoice.payment_succeeded':
    //       if(dataObject['billing_reason'] == 'subscription_create') {
    //         // The subscription automatically activates after successful payment
    //         // Set the payment method used to pay the first invoice
    //         // as the default payment method for that subscription
    //         const subscription_id = dataObject['subscription']
    //         const payment_intent_id = dataObject['payment_intent']

    //         // Retrieve the payment intent used to pay the subscription
    //         const payment_intent = await stripe.paymentIntents.retrieve(payment_intent_id);

    //         const subscription = await stripe.subscriptions.update(
    //           subscription_id,
    //           {
    //             default_payment_method: payment_intent.payment_method,
    //           },
    //         );

    //         console.log("Default payment method set for subscription:" + payment_intent.payment_method);
    //       };

    //       break;
    //     case 'invoice.payment_failed':
    //       // If the payment fails or the customer does not have a valid payment method,
    //       //  an invoice.payment_failed event is sent, the subscription becomes past_due.
    //       // Use this webhook to notify your user that their payment has
    //       // failed and to retrieve new card details.
    //       break;
    //     case 'invoice.finalized':
    //       // If you want to manually send out invoices to your customers
    //       // or store them locally to reference to avoid hitting Stripe rate limits.
    //       break;
    //     case 'customer.subscription.deleted':
    //       if (event.request != null) {
    //         // handle a subscription cancelled by your request
    //         // from above.
    //       } else {
    //         // handle subscription cancelled automatically based
    //         // upon your subscription settings.
    //       }
    //       break;
    //     case 'customer.subscription.trial_will_end':
    //       // Send notification to your user that the trial will end
    //       break;
    //     default:
    //     // Unexpected event type
    //   }

    return Responses._200({ success: true })
  } catch (error) {
    console.log("\n", error.stack)
    return Responses._400({ success: false })
  }
}
