import Responses from "../../common/API_Responses"
import { StripeSecretKey } from "../../common/constants"

const stripe = require("stripe")(StripeSecretKey)

exports.handler = async (event) => {
  console.log("Update customer default payment method ::", event)
  try {
    const body = await JSON.parse(event.body)
    let { customerID, paymentMethodID } = body
    const customer = await stripe.customers.update(customerID, {
      invoice_settings: { default_payment_method: paymentMethodID },
    })
    console.log("Customer", customer)
    return Responses._200(customer)
  } catch (error) {
    console.log("error", error)
    return Responses._500({
      message: "Update customer default payment method failed",
      success: false,
    })
  }
}
