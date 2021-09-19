import Responses from '../../common/API_Responses';
import { StripeSecretKey  } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey);

exports.handler = async event => {
  console.log('retrieveProduct-event ::', event);
  try {
    const body = JSON.parse(event.body);
    const { productId } = body;
    const product = await stripe.products.retrieve(productId);
    console.log("Retrieve Product Price Object | Succeeded |:", product);
    return Responses._200(product);
  } catch (error) {
    console.log('Retrieve Product Price Object | Error |', error);
    return Responses._500({
      message: "Retrieve Product Price Object failed",
      success: false
    });
  }
};