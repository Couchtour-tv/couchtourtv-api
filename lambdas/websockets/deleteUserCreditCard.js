const AWS = require('aws-sdk');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import DynamoDb from '../../libs/dynamodb-lib';
import { CreditCardTableName } from '../common/constants';

exports.handler = async event => {

    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
    const { connectionId } = event.requestContext;

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log( '\n************** [deleteUserCreditCard.js] [23] payload Recevied:', postData );

        replyMessage.action = null;
        replyMessage.message = {};

        // -- handle db interaction
        try {

            const updateStatusParams = {
                TableName: CreditCardTableName,
                Key: {
                    "paymentMethodId": postData.emailAddress,
                    "emailAddressogId": postData.cogId
                },
                UpdateExpression: `set status = :x`,
                ExpressionAttributeValues: {
                    ":x": 'cancelled'
                }
            };
            await DynamoDb.update( updateStatusParams );

            const updateActiveParams = {
                TableName: CreditCardTableName,
                Key: {
                    "paymentMethodId": postData.emailAddress,
                    "emailAddressogId": postData.cogId
                },
                UpdateExpression: `set active = :x`,
                ExpressionAttributeValues: {
                    ":x": false
                }
            };
            await DynamoDb.update( updateActiveParams );

            replyMessage.action = 'wallet-delete-credit-card-success-resp';
            replyMessage.message.displayMessage = 'SUCCESS in deactivated wallet';
            replyMessage.message.userId = postData.userId;
            replyMessage.message.paymentMethodId = postData.paymentMethodId;

        } catch (e) {

            replyMessage.action = 'wallet-delete-credit-card-error-resp';
            replyMessage.message.displayMessage = 'ERROR in deactivated wallet';

            console.log( '\n************** [deleteUserCreditCard.js] [71] : ERROR  DB Write' )
            console.log('\n', e.stack)
        }

        // -- handle socket return
        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log( '\n************** [deleteUserCreditCard.js] [84]: Socket Send to connectcionId: ')

        } catch (e) {

            console.log( '\n************** [deleteUserCreditCard.js] [88] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)
            return { statusCode: 500, body: e.stack };
        }

    // -- error handling body parse
    } catch (e) {

        console.log( '\n************** [deleteUserCreditCard.js] [96] : Error in Parsing Payload :' )
        console.log('\n', e.stack)
        return { statusCode: 500, body: e.stack };

    }
    return Responses._200({ success: true, message: 'wallet-delete-user-credit-card' });
};