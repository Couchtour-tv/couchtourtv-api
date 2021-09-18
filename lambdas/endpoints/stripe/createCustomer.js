import Responses from '../../common/API_Responses';
import { StripeSecretKey, StripeCustomerDescirption } from '../../common/constants';

const stripe = require("stripe")(StripeSecretKey)

exports.handler = async event => {
    console.log('createPaymentIntent-event ::', event);
    try {
      const body = JSON.parse(event.body);
      let { email } = body;
      const customer = await stripe.customers.create({
        description: StripeCustomerDescirption,
        email
      });
      console.log("Customer", customer)
      return Responses._200(customer);
    } catch (error) {
      console.log('error', error);
      return Responses._500({
        message: "Payment failed",
        success: false
      });
    }
};