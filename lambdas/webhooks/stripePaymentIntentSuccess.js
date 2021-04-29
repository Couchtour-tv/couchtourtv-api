// const AWS = require('aws-sdk');

import Responses from '../common/API_Responses';
// import DynamoDb from '../../libs/dynamodb-lib';

exports.handler = async event => {
    try {
        const payload = JSON.parse(event.body);
        console.log("stripePaymentIntentSuccess", payload)

        // const stripeSuccessCheckoutWrite = {
        //     TableName: StripeSuccessfulCheckoutTableName,
        //     Item: {
        //         ID: uuidv4(),
        //         checkoutId: payload.id,
        //         stripeCustomerId: payload.customer,
        //         receivedAt: Date.now(),
        //         payload: payload
        //     }
        // };
        // await DynamoDb.put(stripeSuccessCheckoutWrite);
        return Responses._200({ 'success': true });

    } catch (error) {

        console.log('\n', error.stack);
        return Responses._400({ 'success': false });
    }
};