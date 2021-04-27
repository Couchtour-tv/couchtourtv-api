const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import DynamoDb from '../../libs/dynamodb-lib';
import { CreditCardTableName, StripeSecretKey } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';
import stripePackage from "stripe";


exports.handler = async event => {

    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
    const { connectionId } = event.requestContext;

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log( '\n************** [createUserSubscriptions.js] [23] payload Recevied:', postData );

        replyMessage.action = null;
        replyMessage.message = {};

        // -- handle db interaction
        try {
            const stripeInterface = stripePackage(StripeSecretKey);
            const subscriptionParams = await {
                customer: postData.stripeCustomerId,
                items: [ {price: postData.priceId } ]
            };
            const attachedPaymentMethod = await stripeInterface.paymentMethods.attach(
                postData.paymentMethodId,
                { customer: postData.customerId }
            );
            const updatedCustomer = await stripeInterface.customer.update(
                postData.customerId,
                { invoice_settings: { default_payment_method: postData.paymentMethodId }}
            );
            const createdSubscription = await stripeInterface.subscriptions.create( subscriptionParams );

            console.log( '\n************** attachedPaymentMethod :: ');
            console.log( attachedPaymentMethod );
            console.log( '\n************** updatedCustomer ::' );
            console.log( updatedCustomer );
            console.log( '\n************** createdSubscription ::' );
            console.log( createdSubscription );

            replyMessage.action = 'create-user-subscription-resp-success';
            replyMessage.message = createdSubscription;
            replyMessage.message.displayMessage = 'SUCCESS: created user subscription';

        } catch (e) {

            replyMessage.action = 'create-user-subscription-resp-error';
            replyMessage.message.displayMessage = 'ERROR: created user subscription';

            console.log( '\n************** [createUserSubscriptions.js][71]: ERROR - Creating User Subscription::' )
            console.log('\n', e.stack)
        }

        // -- handle socket return
        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n', path.basename(__filename), '[84]: Socket Send to connectcionId: ')

        } catch (e) {

            console.log( '\n************** [createUserSubscriptions.js] [88] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)
            return { statusCode: 500, body: e.stack };
        }

    // -- error handling body parse
    } catch (e) {

        console.log( '\n************** [createUserSubscriptions.js] [96] : Error in Parsing Payload :' )
        console.log('\n', e.stack)
        return { statusCode: 500, body: e.stack };

    }
    return Responses._200({ success: true, message: 'create-user-subscription' });
};