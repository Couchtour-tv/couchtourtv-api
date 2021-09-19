import Responses from '../../common/API_Responses';
import { StripeSecretKey } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey)

exports.handler = async event => {
  console.log('updatePaymentMethod-event ::', event);
  try {
    const body = await JSON.parse(event.body);
    let { exp_month, exp_year, payment_method } = body;
    const paymentMethod = await stripe.paymentMethods.update(
      payment_method,
      {
        metadata: {
          order_id: "6735"
        },
        exp_month,
        exp_year,
      }
    );
    console.log("Update Payment Method | Succeeded |:", paymentMethod);
    return Responses._200(paymentMethod);
  } catch (error) {
    console.log('Update Payment Method | Error |', error);
    return Responses._500({
      message: "Update Payment Method failed",
      success: false
    });
  }
};