import Responses from '../../common/API_Responses';
import { StripeSecretKey  } from '../../common/constants';
const stripe = require("stripe")(StripeSecretKey);

exports.handler = async event => {
  console.log('updateProduct-event ::', event);
  try {
    const body = await JSON.parse(event.body);
    const { name, images, metadata, description, id } = body;
    const product = await stripe.products.update(
      name, images, metadata, description, id
    );
    console.log("Update Product | Succeeded |:", product);
    return Responses._200(product);
  } catch (error) {
    console.log('Update Product | Error |', error);
    return Responses._500({
      message: "Update Product failed",
      success: false
    });
  }
};