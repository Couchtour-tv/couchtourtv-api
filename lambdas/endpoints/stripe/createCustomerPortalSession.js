import Responses from "../../common/API_Responses"
import { StripeSecretKey } from "../../common/constants"
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async (event) => {
  console.log("Create Customer Portal Session ::", event)
  try {
    const body = await JSON.parse(event.body)
    const { customer } = body
    const session = await stripe.billingPortal.sessions.create({
      customer,
      // return_url: 'https://example.com/account',
    })

    const response = {
      statusCode: 301,
      headers: {
        Location: session.url,
      },
    }

    console.log("Create Customer Portal Session | Succeeded |:", session)
    return response
  } catch (error) {
    console.log("Create Customer Portal Session | Error |", error)
    return Responses._500({
      message: "Create Customer Portal Session failed",
      success: false,
    })
  }
}
