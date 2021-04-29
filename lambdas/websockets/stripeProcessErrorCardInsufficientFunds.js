const AWS = require('aws-sdk');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import DynamoDb from '../../libs/dynamodb-lib';
import { CreditCardTableName, TransactionsTableName, AcquisitionsTableName } from '../common/constants';

/*
    NOTE:
        - only gets executed when front end renders a successful transaction

    Sample Payload
        action: "stripe-process-error-insufficient-funds",
          message: {
            stripeConfirmationRespPayload: confirmCardPayment,
            userId: userId,
            cogId: localCogId,
            email: userEmail,
            cardId: chosenCard.cardId,
            transactionId: transactionID,
            NOT NECESSARY -- intentId: intentId,
            statusResp: "SUCCESS", //stripe status
            acquiredId: acquiredId,
            stripeConfirmPaymentMetaPayload: metaPayload
          },
        })
*/


exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;
        replyMessage.message = {};

        console.log('\n************** [stripeProcessErrorCardInsufficientFunds.js] [31] payload Recevied:', postData );
        try {
            const transactionUpdateObj = {
                TableName: TransactionsTableName,
                Key: {
                    "ID":           postData.transactionId,
                    "emailAddress": postData.email,
                    "cardId":       postData.cardId
                },
                UpdateExpression: `set status = :x AND updatedAt = :y AND requestJson = :z AND responseJson = :a`,
                ExpressionAttributeValues: {
                    ":x":   'ERROR',
                    ":y":   Date.now(),
                    ":z":   postData.stripeCardConfirmReqPayload,
                    ":a":   postData.stripeCardConfirmRespPayload
                }
            };
            const acquisitionUpdateObj = {
                TableName: AcquisitionsTableName,
                Key: {
                    "ID":            postData.acquiredId,
                    "transactionId": postData.transactionId,
                    "userId":        postData.userId
                },
                UpdateExpression: `set status = :x`,
                ExpressionAttributeValues: { ":x": 'ERROR' }
            };
            const creditCardUpdateObj = {
                TableName: CreditCardTableName,
                Key: {
                    "ID":               postData.cardId,
                    "paymentMethodId":  postData.paymentMethodId,
                    "emailAddress":     postData.email
                },
                UpdateExpression: `set status = :x`,
                ExpressionAttributeValues: { ":x": 'ERROR' }
            };
            await DynamoDb.update(transactionUpdateObj);
            await DynamoDb.update(acquisitionUpdateObj);
            await DynamoDb.update(creditCardUpdateObj);

            replyMessage.action = 'stripe-process-error-insufficient-funds-resp-success';
            replyMessage.message.displayMessage = 'purchase and transaction records updated';
            replyMessage.message.transactionId = postData.transactionId;
            replyMessage.message.acquiredId = postData.acquiredId;

        // error catch: making purchase request
        } catch (e) {

            replyMessage.action = 'stripe-process-error-insufficient-funds-resp-error';
            replyMessage.message.displayMessage = 'purchase and transaction records NOT updated';
            replyMessage.message.transactionId = postData.transactionId;
            replyMessage.message.acquiredId = postData.acquiredId;

            console.log('\n************** [stripeProcessErrorCardInsufficientFunds.js] [96] : Error in Processing' );
            console.log('\n', e.stack);
        }

        // code block:: socket response
        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n************** [stripeProcessErrorCardInsufficientFunds.js] [133]: Socket Send to connectcionId: ')

        // error catch: responding with socket call
        } catch (e) {

            console.log('\n************** [stripeProcessErrorCardInsufficientFunds.js] [138] : Error Return Socket Message to Client:' );
            console.log('\n', e.stack);
            return { statusCode: 500, body: e.stack };

        }

    // error catch: json payload parsing
    } catch (e) {

        console.log('\n************** [stripeProcessErrorCardInsufficientFunds.js] [78] : Error in Parsing Payload :' );
        console.log('\n', e.stack);
        return { statusCode: 500, body: e.stack };

    }
    return Responses._200({ success: true, message: 'stripe-process-error-insufficient-funds' });
};