// const AWS = require('aws-sdk');

import Responses from "../common/API_Responses"
import { StripeSecretKey, VERY_MOON_MUSICAL_ID } from "../common/constants"
const stripe = require("stripe")(StripeSecretKey)

import {
  AppSyncUrlOriginal,
  GraphqlKeyOutputOriginal,
} from "../common/constants"
const axios = require("axios")
import gql from "graphql-tag"
const graphql = require("graphql")
const { print } = graphql

const queryTicketTrackerById = gql`
  query MyQuery($id: ID!) {
    getTicketTracker(id: $id) {
      items {
        id
        ga
        vip
      }
    }
  }
`

const updateTicketTrackerById = gql`
  mutation MyMutation($id: ID!, $ga: Int!, $vip: Int!) {
    updateTicketTracker(input: { id: $id, ga: $ga, vip: $vip }) {
      id
      ga
      vip
    }
  }
`

async function removeFromInventory(numberOfVipSold, numberOfGaSold) {
  // get inventory
  const ticketTrackerObject = await axios({
    url: AppSyncUrlOriginal,
    method: "post",
    headers: {
      "x-api-key": GraphqlKeyOutputOriginal,
    },
    data: {
      query: print(queryTicketTrackerById),
      variables: {
        id: VERY_MOON_MUSICAL_ID,
      },
    },
  })

  const ticketTracker = ticketTrackerObject.data.data.getTicketTracker.items[0]

  const vipRemaining = ticketTracker.vip - numberOfVipSold
  const gaRemaining = ticketTracker.ga - numberOfGaSold
  // update inventory

  await axios({
    url: AppSyncUrlOriginal,
    method: "post",
    headers: {
      "x-api-key": GraphqlKeyOutputOriginal,
    },
    data: {
      query: print(updateTicketTrackerById),
      variables: {
        id: VERY_MOON_MUSICAL_ID,
        ga: gaRemaining,
        vip: vipRemaining,
      },
    },
  })
}

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body)
    console.log("Stripe Handle Checkout Session Payload", payload)

    // const dataObject = payload.data.object

    switch (payload.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = payload.data.object
        const checkoutSessionId = checkoutSessionCompleted.id
        console.log(
          "Checkout Session Completed Webhook",
          checkoutSessionCompleted
        )
        console.log(
          "Checkout Session Completed Webhook Stringified",
          JSON.stringify(checkoutSessionCompleted)
        )

        const session = await stripe.checkout.sessions.retrieve(
          checkoutSessionId,
          {
            expand: ["line_items"],
          }
        )

        console.log("Checkout Session Retrieved", session)
        console.log(
          "Checkout Session Retrieved Stringified",
          JSON.stringify(session)
        )

        const lineItems = session.line_items.data

        console.log(
          "Checkout Session Retrieved | Line Items Data |:",
          lineItems
        )
        console.log(
          "Checkout Session Retrieved | Line Items Data Stringified |:",
          JSON.stringify(lineItems)
        )

        const vipItem = lineItems.find((item) => item.description === "VIP")
        const gaItem = lineItems.find(
          (item) => item.description === "General Admission"
        )

        const numberOfVipSold = vipItem ? vipItem.quantity : 0
        const numberOfGaSold = gaItem ? gaItem.quantity : 0

        await removeFromInventory(numberOfVipSold, numberOfGaSold)

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
