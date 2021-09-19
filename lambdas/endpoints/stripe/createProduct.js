import Responses from '../../common/API_Responses';
import { StripeSecretKey } from '../../common/constants';
// const stripe = require("stripe")(StripeSecretKey);
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async event => {
  console.log('createProduct-event ::', event);
  try {
    // const body = JSON.parse(event.body);
    // const { name, images, metadata, description } = body;
    const body = await JSON.parse(event.body);
    console.log('-Parsed Body: ', body);
    console.log('-secret Key as obj: ', StripeSecretKey);
    console.log('-secret Key as process: ', process.env.STRIPE_SECRET_KEY);
    console.log('-stripe Obj: ', stripe);
    const { name, images, metadata, description } = body;
    const product = await stripe.products.create({
      name, images, metadata, description
    });
    console.log("Create Product Price Object | Succeeded |:", product);
    return Responses._200(product);
  } catch (error) {
    console.log('Create Product Price Object | Error |', error);
    return Responses._400({
      message: "Create Product Price Object failed",
      success: false
    });
  }
};