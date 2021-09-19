import Responses from '../../common/API_Responses';
import { StripeSecretKey, StripeCurrency, StripeReoccuringPaymentInterval } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey);

exports.handler = async event => {
  console.log('createRepoccuringPrice-event ::', event);
  try {
    const body = JSON.parse(event.body);
    const { unit_amount, product } = body;
    const price = await stripe.prices.create({
      unit_amount,
      currency: StripeCurrency,
      product,
      recurring: { interval: StripeReoccuringPaymentInterval },
    })
    console.log("Create Reoccuring Price Object | Succeeded |:", price);
    return Responses._200(price);
  } catch (error) {
    console.log('Create Reoccuring Price Object | Error |', error);
    return Responses._500({
      message: "Create Reoccuring Price Object failed",
      success: false
    });
  }
};