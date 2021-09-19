import Responses from '../../common/API_Responses';
import { StripeSecretKey  } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey);

exports.handler = async event => {
  console.log('updateSubscription-event ::', event);
  try {
    const body = JSON.parse(event.body);
    const { subscriptionId, newPriceId } = body;
    const subscription = await stripe.subscriptions.retrieve( subscriptionId );
    const updatedSubscription = await stripe.subscriptions.update(
      subscriptionId,
      {
        cancel_at_period_end: false,
        items: [
          {
            id: subscription.items.data[0].id,
            price: newPriceId,
          },
        ],
      }
    );
    console.log("Update Subscription | Succeeded |:", updatedSubscription);
    return Responses._200(updatedSubscription);
  } catch (error) {
    console.log('Update Subscription | Error |', error);
    return Responses._500({
      message: "Update Subscription failed",
      success: false
    });
  }
};