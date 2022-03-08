// const AWS = require('aws-sdk');

import Responses from "../common/API_Responses"
// import DynamoDb from '../../libs/dynamodb-lib';
import {
  AppSyncUrlOriginal,
  GraphqlKeyOutputOriginal,
} from "../common/constants"
const axios = require("axios")
import gql from "graphql-tag"
const graphql = require("graphql")
const { print } = graphql

const queryUserByCustomerId = gql`
  query MyQuery($stripeCustomerId: String!) {
    getUserByStripeCustomerId(stripeCustomerId: $stripeCustomerId) {
      items {
        id
      }
    }
  }
`

// const updateUserSubIdandSubStatus = gql`
//   mutation MyMutation($id: ID!, $subscriptionId: String!, $subscriptionStatus: String!) {
//     updateUser(id: $id, subscriptionId: $subscriptionId, subscriptionStatus: $subscriptionStatus) {
//       id
//     }
//   }
// `

// const updateUserSubIdandSubStatus = gql`
//   mutation MyMutation(
//     $id: ID!
//     $stripeSubscriptionId: String!
//     $stripeSubscriptionStatus: String!
//   ) {
//     updateUser(
//       input: {
//         id: $id
//         stripeSubscriptionId: $stripeSubscriptionId
//         stripeSubscriptionStatus: $stripeSubscriptionStatus
//       }
//     ) {
//       id
//       stripeSubscriptionId
//       stripeSubscriptionStatus
//     }
//   }
// `

const updateUserSubscriptionSubAndStatus = async (
  stripeCustomerId,
  stripeSubscriptionId,
  stripeSubscriptionStatus
) => {
  try {
    const userObject = await axios({
      url: AppSyncUrlOriginal,
      method: "post",
      headers: {
        "x-api-key": GraphqlKeyOutputOriginal,
      },
      data: {
        query: print(queryUserByCustomerId),
        variables: {
          stripeCustomerId,
        },
      },
    })

    console.log("\n\n--UserObject: ", userObject)
    console.log(
      "\n\n--UserObject: data ",
      userObject.data.data.getUserByStripeCustomerId
    )
    console.log(
      "\n\n--UserObject: userID ",
      userObject.data.data.getUserByStripeCustomerId.items[0].id
    )
    console.log("\n\n--stripeCustomerId: ", stripeCustomerId)
    console.log("\n\n--stripeSubscriptionId: ", stripeSubscriptionId)
    console.log("\n\n--stripeSubscriptionStatus: ", stripeSubscriptionStatus)

    // const { data: data2 } = await axios({
    //   url: AppSyncUrlOriginal,
    //   method: "post",
    //   headers: {
    //     "x-api-key": GraphqlKeyOutputOriginal,
    //   },
    //   data: {
    //     query: print(updateUserSubIdandSubStatus),
    //     variables: {
    //       id: user.id,
    //       stripeSubscriptionId,
    //       stripeSubscriptionStatus,
    //     },
    //   },
    // })
    // console.log("\n\n--data2: ", data2)
    // return data2
  } catch (error) {
    console.log("error posting to appsync: ", error)
    return Responses._500({
      success: false,
    })
  }
}

//next steps:
// create gql mutations for user to update stripe subscription id and stripe subscription status
// stripeSubscriptionId: String
// stripeSubscriptionStatus: String

//retrieve userID from stripeCustomerId:
// write function that retrieves userID from stripeCustomerID and uses userID to update user
// table with stripeSubscriptionId and stripeSubscriptionStatus
// could be universal function we reuse that takes in the stripeCustomerId

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body)
    console.log("stripeHandleSubscriptions", payload)
    // console.log("stripePaymentIntentSuccess :: event", event)

    const dataObject = payload.data.object

    const stripeCustomerId = dataObject.customer
    const stripeSubscriptionId = dataObject.id
    const stripeSubscriptionStatus = dataObject.status

    // let stripeCustomerId
    // let stripeSubscriptionId
    // let stripeSubscriptionStatus

    await updateUserSubscriptionSubAndStatus(
      stripeCustomerId,
      stripeSubscriptionId,
      stripeSubscriptionStatus
    )

    switch (payload.type) {
      case "customer.subscription.created":
        //   const subscription = payload.data.object;
        console.log("data object subscription.created", dataObject)
        // stripeCustomerId = dataObject.customer
        // stripeSubscriptionId = dataObject.id
        // stripeSubscriptionStatus = dataObject.status
        // await updateUserSubscriptionSubAndStatus(
        //   stripeCustomerId,
        //   stripeSubscriptionId,
        //   stripeSubscriptionStatus
        // )
        // Then define and call a function to handle the event customer.subscription.created
        break
      case "customer.subscription.deleted":
        //   const subscription = payload.data.object;
        console.log("data object subscription.deleted", dataObject)
        // stripeCustomerId = dataObject.customer
        // stripeSubscriptionId = dataObject.id
        // stripeSubscriptionStatus = dataObject.status
        // await updateUserSubscriptionSubAndStatus(
        //   stripeCustomerId,
        //   stripeSubscriptionId,
        //   stripeSubscriptionStatus
        // )
        // Then define and call a function to handle the event customer.subscription.deleted
        break
      case "customer.subscription.trial_will_end":
        //   const subscription = payload.data.object;
        console.log("data object subscription.trial_will_end", dataObject)
        // stripeCustomerId = dataObject.customer
        // stripeSubscriptionId = dataObject.id
        // stripeSubscriptionStatus = dataObject.status
        // await updateUserSubscriptionSubAndStatus(
        //   stripeCustomerId,
        //   stripeSubscriptionId,
        //   stripeSubscriptionStatus
        // )
        // Then define and call a function to handle the event customer.subscription.trial_will_end
        break
      case "customer.subscription.updated":
        //   const subscription = payload.data.object;
        console.log("data object subscription.updated", dataObject)
        // stripeCustomerId = dataObject.customer
        // stripeSubscriptionId = dataObject.id
        // stripeSubscriptionStatus = dataObject.status
        // await updateUserSubscriptionSubAndStatus(
        //   stripeCustomerId,
        //   stripeSubscriptionId,
        //   stripeSubscriptionStatus
        // )
        // Then define and call a function to handle the event customer.subscription.updated
        break
      // case "invoice.payment_failed":
      //   //   const invoice = payload.data.object;
      //   console.log("data object invoice.payment_failed", dataObject)
      //   // stripeSubscriptionId = dataObject.subscription
      //   // stripeSubscriptionStatus = "incomplete"
      //   // Then define and call a function to handle the event invoice.payment_failed
      //   break
      // case "invoice.payment_succeeded":
      //   //   const invoice = payload.data.object;
      //   console.log("data object invoice.payment_succeeded", dataObject)
      //   // stripeSubscriptionId = dataObject.subscription
      //   // stripeSubscriptionStatus = "active"
      //   // Then define and call a function to handle the event invoice.payment_succeeded
      //   break
      // // ... handle other event types
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
