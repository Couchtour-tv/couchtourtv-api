import Responses from '../../common/API_Responses';
import { StripeSecretKey } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async event => {
  console.log('attachPaymentMethod-event ::', event);
  try {
    const body = await JSON.parse(event.body);
    let { customer, payment_method } = body;
    const paymentMethod = await stripe.paymentMethods.attach(
      payment_method,   // payment method id ex. 'pm_1JPGywKsNNk3qPPUWzdJqFcp'
      { customer }      // customerid ex `cus_jl2l80ggljkj08JKJ7G`
    );
    console.log("Attach Payment Method | Succeeded |:", paymentMethod);
    return Responses._200(paymentMethod);
  } catch (error) {
    console.log('Attach Payment Method | Error |', error);
    return Responses._500({
      message: "Attach Payment Method failed",
      success: false
    });
  }
};