const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import DynamoDb from '../../libs/dynamodb-lib';
import { StripeSecretKey } from '../common/constants';
import stripePackage from "stripe";
import { v4 as uuidv4 } from 'uuid';


exports.handler = async event => {

    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
    const { connectionId } = event.requestContext;

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log( '\n************** [getProductSubscriptions.js] [23] payload Recevied:', postData );

        replyMessage.action = null;
        replyMessage.message = {};

        // -- handle db interaction
        try {

            const stripeInterface = stripePackage(StripeSecretKey);
            const products = await stripeInterface.products.list({});

            console.log( '\n************** [getProductSubscriptions.js] [59] : Success DB Write' )
            replyMessage.action = 'get-product-subscriptions-success-resp';
            replyMessage.message = products;
            replyMessage.message.displayMessage = 'SUCCESS: retrieved subscription options from stripe products';

        } catch (e) {

            replyMessage.action = 'get-user-subscriptions-resp-error';
            replyMessage.message.displayMessage = 'ERROR: retrieved subscription options from stripe products';

            console.log( '\n************** [createUserSubscriptions.js][71]: ERROR - Products Fetch::' )
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

            console.log( '\n************** [getProductSubscriptions.js] [88] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)
            return { statusCode: 500, body: e.stack };
        }

    // -- error handling body parse
    } catch (e) {

        console.log( '\n************** [getProductSubscriptions.js] [96] : Error in Parsing Payload :' )
        console.log('\n', e.stack)
        return { statusCode: 500, body: e.stack };

    }
    return Responses._200({ success: true, message: 'get-product-subscriptions' });
};