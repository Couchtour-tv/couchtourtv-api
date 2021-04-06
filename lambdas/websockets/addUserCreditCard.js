const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import DynamoDb from '../../libs/dynamodb-lib';
import { CreditCardTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';


exports.handler = async event => {

    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
    const { connectionId } = event.requestContext;
    // const cogId  = event.requestContext.identity.cognitoIdentityId;

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log( '\n************** [addUserCreditCard.js] [23] payload Recevied:', postData );

        replyMessage.action = null;
        replyMessage.message = {};

        // -- handle db interaction
        try {

            let checksObj = postData.stripeCardPayment.card.checks;
            let writeObj = {
                ID:                 uuidv4(),
                emailAddress:       postData.email,
                paymentMethodId:    postData.paymentMethodId,
                userId:             postData.userId,
                expMonth:           postData.stripeCardPayment.card.exp_month,
                expYear:            postData.stripeCardPayment.card.exp_year,
                brand:              postData.stripeCardPayment.card.brand,
                savedAt:            Date.now(),
                lastFour:     postData.stripeCardPayment.card.last4,
                paymentMethodObj:   postData.stripeCardPayment
            };

            // if ( checksObj.cvc_check === 'pass' && checksObj.address_line1_check != null && checksObj.address_postal_code_check != null) {
            if ( checksObj.cvc_check === 'pass') {

                writeObj.active = true;
                writeObj.valid = true;

            } else {

                writeObj.active = false;
                writeObj.valid = false;

            }

            await DynamoDb.put({ TableName: CreditCardTableName, Item: writeObj });
            console.log( '\n************** [addUserCreditCard.js] [59] : Success DB Write' )

            replyMessage.action = 'wallet-add-credit-card-success-resp';
            replyMessage.message.displayMessage = 'credit card added to wallet';
            replyMessage.message.userId = postData.userId;
            replyMessage.message.paymentMethodId = postData.paymentMethodId;

        } catch (e) {

            replyMessage.action = 'wallet-add-credit-card-error-resp';
            replyMessage.message.displayMessage = 'credit card NOT added to wallet';

            console.log( '\n************** [addUserCreditCard.js] [71] : ERROR  DB Write' )
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

            console.log( '\n************** [addUserCreditCard.js] [88] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)
            return { statusCode: 500, body: e.stack };
        }

    // -- error handling body parse
    } catch (e) {

        console.log( '\n************** [addUserCreditCard.js] [96] : Error in Parsing Payload :' )
        console.log('\n', e.stack)
        return { statusCode: 500, body: e.stack };

    }
    return Responses._200({ success: true, message: 'user-add-credit-card' });
};