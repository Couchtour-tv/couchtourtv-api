import Responses from '../../common/API_Responses';
import { StripeSecretKey  } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey);

exports.handler = async event => {
  console.log('retrieveProduct-event ::', event);
  try {
    const products = await stripe.products.list({ limit: 10 });
    console.log("List Products | Succeeded |:", products);
    return Responses._200(products);
  } catch (error) {
    console.log('List Products | Error |', error);
    return Responses._500({
      message: "List Products failed",
      success: false
    });
  }
};