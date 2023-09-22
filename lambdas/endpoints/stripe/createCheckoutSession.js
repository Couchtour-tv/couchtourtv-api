import Responses from "../../common/API_Responses"
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

const vipPrice = 10000
const gaPrice = 4000

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

exports.handler = async (event) => {
  console.log("Create Checkout Session ::", event)

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

  const vipRemaining = ticketTracker.vip
  const gaRemaining = ticketTracker.ga

  const nov17vipRemaining = ticketTracker.nov_17_vip
  const nov18vipRemaining = ticketTracker.nov_18_vip
  const nov19vipRemaining = ticketTracker.nov_19_vip
  const nov20vipRemaining = ticketTracker.nov_20_vip

  const nov17gaRemaining = ticketTracker.nov_17_ga
  const nov18gaRemaining = ticketTracker.nov_18_ga
  const nov19gaRemaining = ticketTracker.nov_19_ga
  const nov20gaRemaining = ticketTracker.nov_20_ga

  let vipMax = 8
  let gaMax = 8

  let nov17gaMax = 8
  let nov18gaMax = 8
  let nov19gaMax = 8
  let nov20gaMax = 8

  let nov17vipMax = 8
  let nov18vipMax = 8
  let nov19vipMax = 8
  let nov20vipMax = 8

  if (nov17gaRemaining <= 8) {
    nov17gaMax = nov17gaRemaining
  }
  if (nov18gaRemaining <= 8) {
    nov18gaMax = nov18gaRemaining
  }
  if (nov19gaRemaining <= 8) {
    nov19gaMax = nov19gaRemaining
  }
  if (nov20gaRemaining <= 8) {
    nov20gaMax = nov20gaRemaining
  }

  if (nov17vipRemaining <= 8) {
    nov17vipMax = nov17vipRemaining
  }
  if (nov18vipRemaining <= 8) {
    nov18vipMax = nov18vipRemaining
  }
  if (nov19vipRemaining <= 8) {
    nov19vipMax = nov19vipRemaining
  }
  if (nov20vipRemaining <= 8) {
    nov20vipMax = nov20vipRemaining
  }

  if (vipRemaining <= 8) {
    vipMax = vipRemaining
  }
  if (gaRemaining <= 8) {
    gaMax = gaRemaining
  }

  try {
    const lineItems = []

    if (nov17gaRemaining > 0) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: VERY_MOON_NOV_17_GA_NAME,
            description: "The Very Moon Musical General Admission Experience",
          },
          unit_amount: gaPrice,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 0,
          maximum: nov17gaMax,
        },
      })
    }
    if (nov17vipRemaining > 0) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: VERY_MOON_NOV_17_VIP_NAME,
            description: "The Very Moon Musical VIP Experience",
          },
          unit_amount: vipPrice,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 0,
          maximum: nov17vipMax,
        },
      })
    }

    if (nov18gaRemaining > 0) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: VERY_MOON_NOV_18_GA_NAME,
            description: "The Very Moon Musical General Admission Experience",
          },
          unit_amount: gaPrice,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 0,
          maximum: nov18gaMax,
        },
      })
    }
    if (nov18vipRemaining > 0) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: VERY_MOON_NOV_18_VIP_NAME,
            description: "The Very Moon Musical VIP Experience",
          },
          unit_amount: vipPrice,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 0,
          maximum: nov18vipMax,
        },
      })
    }

    if (nov19gaRemaining > 0) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: VERY_MOON_NOV_19_GA_NAME,
            description: "The Very Moon Musical General Admission Experience",
          },
          unit_amount: gaPrice,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 0,
          maximum: nov19gaMax,
        },
      })
    }
    if (nov19vipRemaining > 0) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: VERY_MOON_NOV_19_VIP_NAME,
            description: "The Very Moon Musical VIP Experience",
          },
          unit_amount: vipPrice,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 0,
          maximum: nov19vipMax,
        },
      })
    }

    if (nov20gaRemaining > 0) {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: VERY_MOON_NOV_20_GA_NAME,
            description: "The Very Moon Musical General Admission Experience",
          },
          unit_amount: gaPrice,
        },
        adjustable_quantity: {
          enabled: true,
          minimum: 0,
          maximum: nov20gaMax,
        },
      })
    }
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
