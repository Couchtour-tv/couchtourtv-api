import Responses from '../../common/API_Responses';
import { StripeApiMap } from '../../common/constants';

exports.handler = async event => {
  console.log('apiMap-event ::', event);
  try {
    return Responses._200(StripeApiMap);
  } catch (error) {
    console.log('apiMap error:', error);
    return Responses._500({
      success: false
    });
  }
};