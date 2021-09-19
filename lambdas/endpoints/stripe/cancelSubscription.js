import Responses from '../../common/API_Responses';
import { StripeSecretKey  } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey);

exports.handler = async event => {
  console.log('CancelSubscription-event ::', event);
  try {
    const body = JSON.parse(event.body);
    const { subscriptionId } = body;
    const deletedSubscription = await stripe.subscriptions.del( subscriptionId );
    console.log("Cancelled Subscription | Succeeded |:", deletedSubscription);
    return Responses._200(deletedSubscription);
  } catch (error) {
    console.log('Cancelled Subscription | Error |', error);
    return Responses._500({
      message: "Cancelled Subscription failed",
      success: false
    });
  }
};