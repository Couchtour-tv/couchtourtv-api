import Responses from '../../common/API_Responses';
import { StripeSecretKey, StripeCurrency } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey);

exports.handler = async event => {
  console.log('createPrice-event ::', event);
  try {
    const body = await JSON.parse(event.body);
    const { unit_amount, product } = body;
    const price = await stripe.prices.create({
      unit_amount,
      currency: StripeCurrency,
      product
    });
    console.log("Create Price Object | Succeeded |:", price);
    return Responses._200(price);
  } catch (error) {
    console.log('Create Price Object | Error |', error);
    return Responses._500({
      message: "Create Price Object failed",
      success: false
    });
  }
};