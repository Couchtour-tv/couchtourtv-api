// const AWS = require('aws-sdk');

import Responses from "../common/API_Responses"
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

const updateUserSubIdandSubStatus = gql`
  mutation MyMutation(
    $id: ID!
    $stripeSubscriptionId: String!
    $stripeSubscriptionStatus: String!
    $stripeSubscriptionPaused: Boolean!
    $stripeSubscriptionCancelAtPeriodEnd: Boolean!
  ) {
    updateUser(
      input: {
        id: $id
        stripeSubscriptionId: $stripeSubscriptionId
        stripeSubscriptionStatus: $stripeSubscriptionStatus
        stripeSubscriptionPaused: $stripeSubscriptionPaused
        stripeSubscriptionCancelAtPeriodEnd: $stripeSubscriptionCancelAtPeriodEnd
      }
    ) {
      id
      stripeSubscriptionId
      stripeSubscriptionStatus
      stripeSubscriptionPaused
      stripeSubscriptionCancelAtPeriodEnd
    }
  }
`

const updateUserSubscriptionSubAndStatus = async (
  stripeCustomerId,
  stripeSubscriptionId,
  stripeSubscriptionStatus,
  stripeSubscriptionPaused,
  stripeSubscriptionCancelAtPeriodEnd
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

    const userID = userObject.data.data.getUserByStripeCustomerId.items[0].id

    console.log("\n\n--stripeSubscriptionId: ", stripeSubscriptionId)
    console.log("\n\n--stripeSubscriptionStatus: ", stripeSubscriptionStatus)
    console.log("\n\n--stripeSubscriptionPaused: ", stripeSubscriptionPaused)
    console.log(
      "\n\n--stripeSubscriptionCancelAtPeriodEnd: ",
      stripeSubscriptionCancelAtPeriodEnd
    )

    await axios({
      url: AppSyncUrlOriginal,
      method: "post",
      headers: {
        "x-api-key": GraphqlKeyOutputOriginal,
      },
      data: {
        query: print(updateUserSubIdandSubStatus),
        variables: {
          id: userID,
          stripeSubscriptionId,
          stripeSubscriptionStatus,
          stripeSubscriptionPaused,
          stripeSubscriptionCancelAtPeriodEnd,
        },
      },
    })
  } catch (error) {
    console.log("error posting to appsync: ", error)
    return Responses._500({
      success: false,
    })
  }
}

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body)
    console.log("stripeHandleSubscriptions", payload)

    const dataObject = payload.data.object

    let stripeCustomerId
    let stripeSubscriptionId
    let stripeSubscriptionStatus
    let stripeSubscriptionPaused
    let stripeSubscriptionCancelAtPeriodEnd

    switch (payload.type) {
      case "customer.subscription.created":
        // const subscription = payload.data.object;
        console.log("Customer Data Object :: subscription.created", dataObject)
        stripeCustomerId = dataObject.customer
        stripeSubscriptionId = dataObject.id
        stripeSubscriptionStatus = dataObject.status
        stripeSubscriptionPaused = !!dataObject.discount
        stripeSubscriptionCancelAtPeriodEnd = dataObject.cancel_at_period_end
        console.log("Is Subscription Paused?", !!dataObject.discount)

        await updateUserSubscriptionSubAndStatus(
          stripeCustomerId,
          stripeSubscriptionId,
          stripeSubscriptionStatus,
          stripeSubscriptionPaused,
          stripeSubscriptionCancelAtPeriodEnd
        )
        // Then define and call a function to handle the event customer.subscription.created
        break
      case "customer.subscription.deleted":
        // const subscription = payload.data.object;
        console.log("Customer Data Object :: subscription.deleted", dataObject)
        stripeCustomerId = dataObject.customer
        stripeSubscriptionId = ""
        stripeSubscriptionStatus = dataObject.status
        stripeSubscriptionPaused = !!dataObject.discount
        stripeSubscriptionCancelAtPeriodEnd = dataObject.cancel_at_period_end
        console.log("Is Subscription Paused?", !!dataObject.discount)

        await updateUserSubscriptionSubAndStatus(
          stripeCustomerId,
          stripeSubscriptionId,
          stripeSubscriptionStatus,
          stripeSubscriptionPaused,
          stripeSubscriptionCancelAtPeriodEnd
        )
        // Then define and call a function to handle the event customer.subscription.deleted
        break
      case "customer.subscription.trial_will_end":
        // const subscription = payload.data.object;
        console.log(
          "Customer Data Object :: subscription.trial_will_end",
          dataObject
        )
        stripeCustomerId = dataObject.customer
        stripeSubscriptionId = dataObject.id
        stripeSubscriptionStatus = dataObject.status
        stripeSubscriptionPaused = !!dataObject.discount
        stripeSubscriptionCancelAtPeriodEnd = dataObject.cancel_at_period_end
        console.log("Is Subscription Paused?", !!dataObject.discount)

        await updateUserSubscriptionSubAndStatus(
          stripeCustomerId,
          stripeSubscriptionId,
          stripeSubscriptionStatus,
          stripeSubscriptionPaused,
          stripeSubscriptionCancelAtPeriodEnd
        )
        // Then define and call a function to handle the event customer.subscription.trial_will_end
        break
      case "customer.subscription.updated":
        // const subscription = payload.data.object;
        console.log("Customer Data Object :: subscription.updated", dataObject)
        console.log(
          "Customer Data Object Discount Length :: subscription.updated",
          dataObject.discount
        )
        stripeCustomerId = dataObject.customer
        stripeSubscriptionId = dataObject.id
        stripeSubscriptionStatus = dataObject.status
        stripeSubscriptionPaused = !!dataObject.discount
        stripeSubscriptionCancelAtPeriodEnd = dataObject.cancel_at_period_end
        console.log("Is Subscription Paused?", !!dataObject.discount)

        await updateUserSubscriptionSubAndStatus(
          stripeCustomerId,
          stripeSubscriptionId,
          stripeSubscriptionStatus,
          stripeSubscriptionPaused,
          stripeSubscriptionCancelAtPeriodEnd
        )
        // Then define and call a function to handle the event customer.subscription.updated
        break
      default:
        console.log(`Unhandled event type ${payload.type}`)
    }

    return Responses._200({ success: true })
  } catch (error) {
    console.log("\n", error.stack)
    return Responses._400({ success: false })
  }
}
