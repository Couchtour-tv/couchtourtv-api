import Responses from "../../common/API_Responses"
import { StripeSecretKey } from "../../common/constants"
const stripe = require("stripe")(StripeSecretKey)

import {
  AppSyncUrlOriginal,
  GraphqlKeyOutputOriginal,
} from "../../common/constants"
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

  const ticketTracker = ticketTrackerObject.data.data.getTicketTracker.items[0]

  const vipRemaining = ticketTracker.vip - numberOfVipSold
  const gaRemaining = ticketTracker.ga - numberOfGaSold

  let vipMax = 8
  let gaMax = 8

  if (vipRemaining <= 8) {
    vipMax = vipRemaining
  }
  if (gaRemaining <= 8) {
    gaMax = gaRemaining
  }

  try {
    // const body = await JSON.parse(event.body)
    // const { priceId } = body

    const session = await stripe.checkout.sessions.create({
      expand: ["line_items"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: "VIP",
              description:
                vipRemaining > 0
                  ? "The Very Moon Musical VIP Experience"
                  : "VIP Sold Out",
            },
            unit_amount: 51,
            // tax_behavior: "exclusive",
          },
          adjustable_quantity: {
            enabled: vipRemaining > 0,
            minimum: 0,
            maximum: vipMax,
          },
        },
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            product_data: {
              name: "General Admission",
              description:
                gaRemaining > 0
                  ? "The Very Moon Musical General Admission Experience"
                  : "GA Sold Out",
            },
            unit_amount: 52,
            // tax_behavior: "exclusive",
          },
          adjustable_quantity: {
            enabled: gaRemaining > 0,
            minimum: 0,
            maximum: gaMax,
          },
        },
      ],
      // automatic_tax: {
      //   enabled: true,
      // },
      mode: "payment",
      // metadata: {
      //   vip: 30,
      //   ga: 150,
      // },
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
