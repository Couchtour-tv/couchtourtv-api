// const AWS = require('aws-sdk');

import Responses from "../common/API_Responses"
import {
  StripeSecretKey,
  VERY_MOON_MUSICAL_ID,
  VERY_MOON_NOV_17_GA_NAME,
  VERY_MOON_NOV_17_VIP_NAME,
  VERY_MOON_NOV_18_GA_NAME,
  VERY_MOON_NOV_18_VIP_NAME,
  VERY_MOON_NOV_19_GA_NAME,
  VERY_MOON_NOV_19_VIP_NAME,
  VERY_MOON_NOV_20_GA_NAME,
  VERY_MOON_NOV_20_VIP_NAME,
} from "../common/constants"
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
  query MyQuery {
    getTicketTracker(id: "very_moon_musical_id") {
      id
      nov_17_ga
      nov_18_ga
      nov_19_ga
      nov_20_ga
      nov_17_vip
      nov_18_vip
      nov_19_vip
      nov_20_vip
    }
  }
`

const updateTicketTrackerById = gql`
  mutation UpdateTicketTracker(
    $id: ID!
    $nov_17_ga: Int!
    $nov_18_ga: Int!
    $nov_19_ga: Int!
    $nov_20_ga: Int!
    $nov_17_vip: Int!
    $nov_18_vip: Int!
    $nov_19_vip: Int!
    $nov_20_vip: Int!
  ) {
    updateTicketTracker(
      input: {
        id: $id
        nov_17_ga: $nov_17_ga
        nov_18_ga: $nov_18_ga
        nov_19_ga: $nov_19_ga
        nov_20_ga: $nov_20_ga
        nov_17_vip: $nov_17_vip
        nov_18_vip: $nov_18_vip
        nov_19_vip: $nov_19_vip
        nov_20_vip: $nov_20_vip
      }
    ) {
      id
      nov_17_ga
      nov_18_ga
      nov_19_ga
      nov_20_ga
      nov_17_vip
      nov_18_vip
      nov_19_vip
      nov_20_vip
    }
  }
`

async function removeFromInventory({
  numberOfNov17VipSold,
  numberOfNov17GaSold,
  numberOfNov18VipSold,
  numberOfNov18GaSold,
  numberOfNov19VipSold,
  numberOfNov19GaSold,
  numberOfNov20VipSold,
  numberOfNov20GaSold,
}) {
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

  console.log("Ticket Tracker Object", ticketTrackerObject)
  console.log("Ticket Tracker Object Data", ticketTrackerObject.data)

  const ticketTracker = ticketTrackerObject.data.data.getTicketTracker

  console.log("Ticket Tracker", ticketTracker)

  const nov17vipRemaining = ticketTracker.nov_17_vip - numberOfNov17VipSold
  const nov18vipRemaining = ticketTracker.nov_18_vip - numberOfNov18VipSold
  const nov19vipRemaining = ticketTracker.nov_19_vip - numberOfNov19VipSold
  const nov20vipRemaining = ticketTracker.nov_20_vip - numberOfNov20VipSold

  const nov17gaRemaining = ticketTracker.nov_17_ga - numberOfNov17GaSold
  const nov18gaRemaining = ticketTracker.nov_18_ga - numberOfNov18GaSold
  const nov19gaRemaining = ticketTracker.nov_19_ga - numberOfNov19GaSold
  const nov20gaRemaining = ticketTracker.nov_20_ga - numberOfNov20GaSold

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
        nov_17_ga: nov17gaRemaining,
        nov_18_ga: nov18gaRemaining,
        nov_19_ga: nov19gaRemaining,
        nov_20_ga: nov20gaRemaining,
        nov_17_vip: nov17vipRemaining,
        nov_18_vip: nov18vipRemaining,
        nov_19_vip: nov19vipRemaining,
        nov_20_vip: nov20vipRemaining,
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

        const nov17vipItem = lineItems.find(
          (item) => item.description === VERY_MOON_NOV_17_VIP_NAME
        )
        const nov17gaItem = lineItems.find(
          (item) => item.description === VERY_MOON_NOV_17_GA_NAME
        )
        const nov18vipItem = lineItems.find(
          (item) => item.description === VERY_MOON_NOV_18_VIP_NAME
        )
        const nov18gaItem = lineItems.find(
          (item) => item.description === VERY_MOON_NOV_18_GA_NAME
        )
        const nov19vipItem = lineItems.find(
          (item) => item.description === VERY_MOON_NOV_19_VIP_NAME
        )
        const nov19gaItem = lineItems.find(
          (item) => item.description === VERY_MOON_NOV_19_GA_NAME
        )
        const nov20vipItem = lineItems.find(
          (item) => item.description === VERY_MOON_NOV_20_VIP_NAME
        )
        const nov20gaItem = lineItems.find(
          (item) => item.description === VERY_MOON_NOV_20_GA_NAME
        )

        const numberOfNov17VipSold = nov17vipItem ? nov17vipItem.quantity : 0
        const numberOfNov17GaSold = nov17gaItem ? nov17gaItem.quantity : 0
        const numberOfNov18VipSold = nov18vipItem ? nov18vipItem.quantity : 0
        const numberOfNov18GaSold = nov18gaItem ? nov18gaItem.quantity : 0
        const numberOfNov19VipSold = nov19vipItem ? nov19vipItem.quantity : 0
        const numberOfNov19GaSold = nov19gaItem ? nov19gaItem.quantity : 0
        const numberOfNov20VipSold = nov20vipItem ? nov20vipItem.quantity : 0
        const numberOfNov20GaSold = nov20gaItem ? nov20gaItem.quantity : 0

        await removeFromInventory({
          numberOfNov17VipSold,
          numberOfNov17GaSold,
          numberOfNov18VipSold,
          numberOfNov18GaSold,
          numberOfNov19VipSold,
          numberOfNov19GaSold,
          numberOfNov20VipSold,
          numberOfNov20GaSold,
        })

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
