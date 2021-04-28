const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import {
    PurchasesTableName, StripeSecretKey, TransactionsTableName,
    UserTableName, AcquisitionsTableName
} from '../common/constants';
import { v4 as uuidv4 } from 'uuid';
import { CreatePurchase } from "../models/Purchase";
import stripePackage from "stripe";
import DynamoDb from '../../libs/dynamodb-lib';

/*
    NOTE:
        - only gets executed when front end renders a successful transaction

    Sample Payload
        const successPayload = JSON.stringify({
          action: "stripe-process-success-transaction-update",
          message: {
            stripeConfirmationPayload: confirmCardPayment,
            userId: userId,
            cogId: localCogId,
            email: userEmail,
            cardId: chosenCard.cardId,
            transactionId: transactionID,
            intentId: intentId,
            statusResp: "SUCCESS", //stripe status
            acquiredId: acquiredId
          },
        })
*/


exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
    const cogId = event.requestContext.identity.cognitoIdentityId;

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;
        replyMessage.message = {};

        console.log('\n************** [stripeProcessSuccessUpdateTransaction.js] [31] payload Recevied:', postData );
        try {
            const transactionUpdateObj = {
                TableName: TransactionsTableName,
                Key: {
                    "ID":           postData.transactionId,
                    "emailAddress": postData.email,
                    "cardId":       postData.cardId
                },
                UpdateExpression: `set status = :x AND updatedAt = :y AND updatedJson = :z`,
                ExpressionAttributeValues: {
                    ":x":   'SUCCESS',
                    ":y":   Date.now(),
                    ":z":   postData.stripeConfirmationPayload
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
                ExpressionAttributeValues: { ":x":   'SUCCESS' }
            };
            await DynamoDb.update(transactionUpdateObj);
            await DynamoDb.update(acquisitionUpdateObj);

            replyMessage.action = 'stripe-process-success-transaction-update-resp-success';
            replyMessage.message.displayMessage = 'purchase and transaction records updated';
            replyMessage.message.transactionId = transactionId;
            replyMessage.message.acquiredId = acquiredId;

        // error catch: making purchase request
        } catch (e) {

            replyMessage.action = 'stripe-process-success-transaction-update-resp-error';
            replyMessage.message.displayMessage = 'purchase and transaction records NOT updated';
            replyMessage.message.transactionId = transactionId;
            replyMessage.message.acquiredId = acquiredId;

            console.log('\n************** [stripeProcessSuccessUpdateTransaction.js] [96] : Error in Processing' );
            console.log('\n', e.stack);
        }

        // code block:: socket response
        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n************** [stripeProcessSuccessUpdateTransaction.js] [133]: Socket Send to connectcionId: ')

        // error catch: responding with socket call
        } catch (e) {

            console.log('\n************** [stripeProcessSuccessUpdateTransaction.js] [138] : Error Return Socket Message to Client:' );
            console.log('\n', e.stack);
            return { statusCode: 500, body: e.stack };

        }

    // error catch: json payload parsing
    } catch (e) {

        console.log('\n************** [stripeProcessSuccessUpdateTransaction.js] [78] : Error in Parsing Payload :' );
        console.log('\n', e.stack);
        return { statusCode: 500, body: e.stack };

    }
    return Responses._200({ success: true, message: 'stripe-process-success-transaction-update' });
};