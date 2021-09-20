import Responses from '../../common/API_Responses';
import { StripeSecretKey, StripeIntentDescirption, StripeCurrency } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async event => {
  console.log('createPaymentIntent-event ::', event);
  try {
    const body = await JSON.parse(event.body);
    let { amount, customer } = body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: StripeCurrency,
      description: StripeIntentDescirption,
      customer
    })
    console.log("Payment Intent Succeed:", paymentIntent)
    return Responses._200(paymentIntent);
  } catch (error) {
    console.log('error', error);
    return Responses._500({
      message: "Payment Intent failed",
      success: false
    });
  }
};