import Responses from '../../common/API_Responses';
import { StripeSecretKey } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async event => {
  console.log('detachPaymentMethod-event ::', event);
  try {
    const body = await JSON.parse(event.body);
    let { payment_method } = body;
    const paymentMethod = await stripe.paymentMethods.detach(payment_method);
    console.log("DEAttach Payment Method | Succeeded |:", paymentMethod)
    return Responses._200(paymentMethod);
  } catch (error) {
    console.log('DEAttach Payment Method | Error |', error);
    return Responses._500({
      message: "DEAttach Payment Method failed",
      success: false
    });
  }
};