import Responses from "../../common/API_Responses"
import {
  StripeSecretKey,
  VERY_MOON_MUSICAL_ID,
  VERY_MOON_NOV_20_VIP_NAME,
} from "../../common/constants"
const stripe = require("stripe")(StripeSecretKey)

import {
  AppSyncUrlOriginal,
  GraphqlKeyOutputOriginal,
} from "../../common/constants"
const axios = require("axios")
import gql from "graphql-tag"
const graphql = require("graphql")
const { print } = graphql

const vipPrice = 52
// const vipPrice = 10000

const queryTicketTrackerById = gql`
  query MyQuery {
    getTicketTracker(id: "very_moon_musical_id") {
      id
      nov_20_vip
    }
  }
`

exports.handler = async (event) => {
  console.log("Create Checkout Session Very Moon Nov 20 VIP ::", event)

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
  console.log(
    "file: createCheckoutSession.js:42 ~ exports.handler= ~ ticketTrackerObject:",
    ticketTrackerObject
  )

  console.log("Ticket Tracker Object Data", ticketTrackerObject.data)

  console.log(
    "Ticket Tracker Object Data stringified",
    JSON.stringify(ticketTrackerObject.data)
  )

  const ticketTracker = ticketTrackerObject.data.data.getTicketTracker

  const nov20vipRemaining = ticketTracker.nov_20_vip

  let nov20vipMax = 8

  if (nov20vipRemaining <= 8) {
    nov20vipMax = nov20vipRemaining
  }

  try {
    const lineItems = []

    if (nov20vipRemaining > 0) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: VERY_MOON_NOV_20_VIP_NAME,
            description: "The Very Moon Musical VIP Experience",
          },
          unit_amount: vipPrice,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 0,
          maximum: nov20vipMax,
        },
      })
    }

    const session = await stripe.checkout.sessions.create({
      expand: ["line_items"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://beta.couchtour.tv?success=true",
      cancel_url: "https://beta.couchtour.tv?canceled=true",
    })

    console.log("Create Checkout Session | Succeeded |:", session)
    console.log("Create Checkout Session | Date |:", Date.now())
    console.log(
      "Create Checkout Session | Line Items Data |:",
      session.line_items.data
    )
    console.log(
      "Create Checkout Session | Line Items Data Stringified |:",
      JSON.stringify(session.line_items.data)
    )
    // res.redirect(303, session.url)
    // return Responses._200(session)
    const response = {
      statusCode: 302, // 302 Found (temporary redirect)
      headers: {
        Location: session.url, // Set the Location header to the URL of the session
      },
    }

    return response
  } catch (error) {
    console.log("Create Checkout Session | Error |", error)
    return Responses._500({
      message: "Create Checkout Session failed",
      success: false,
    })
  }
}
