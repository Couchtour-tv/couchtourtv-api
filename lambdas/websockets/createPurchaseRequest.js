const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import { PurchasesTableName, StripeSecretKey, TransactionsTableName, UserTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';
import { CreatePurchase } from "../models/Purchase";
import stripePackage from "stripe";
import DynamoDb from '../../libs/dynamodb-lib';
/*
    DOCS ::
        stripe.charges.create :: https://stripe.com/docs/api/charges/create
*/
exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
    const cogId = event.requestContext.identity.cognitoIdentityId;

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        let totalValueInCents = 0;
        let allItemsIds = [];
        replyMessage.sender = connectionId;
        replyMessage.message = {};

        console.log('\n************** [createPurchaseRequests.js] [31] payload Recevied:', postData );
        async function priceValueConfirm( items ) {
            return true
        }
        async function getTotalValueInCents( items ) {
            items.forEach( function( item ) {
                totalValueInCents += item.price_cents
            });
        };
        async function createArrayItemIds( items ) {
            items.forEach( function(item) {
                allItemsIds.push( item.item_id )
            });
        };
        let paymentIntentobjResp = {};
        let transactionId = uuidv4();
        let idempotentKey = uuidv4();

        try {

            const validItems = await priceValueConfirm( postData.items );
            if ( validItems ) {

                await getTotalValueInCents( postData.items );
                await createArrayItemIds( postData.items );

                const userObj= await DynamoDb.query({
                    TableName: UserTableName,
                    KeyConditionExpression: 'emailAddress = :v1',
                    ExpressionAttributeValues: { ':v1': postData.email}
                });
                const user = userObj.Items[0];

                const stripeInterface = stripePackage(StripeSecretKey);

                const paymentIntentStripePayload = await {
                    amount: totalValueInCents,
                    currency: 'usd',
                    payment_method_types: ['card'],
                    customer: user.stripeCustomerId,
                    idempotency_key: idempotentKey,
                };

                console.log('\n\n\n\n++++++++++++++++++++++++++++++++++++++');
                console.log('paymentIntentStripePayload :: ');
                console.log(paymentIntentStripePayload);
                console.log('++++++++++++++++++++++++++++++++++++++')

                const paymentIntentobjResp = await stripeInterface.paymentIntents.create( paymentIntentStripePayload );
                console.log('\n--------------- Payment Intent Success');
                console.log( '\n************** [createPurchaseRequests.js] [64] reply ::', paymentIntentobjResp);


                // await DynamoDb.put({
                //     TableName: TransactionsTableName,
                //     Item: {
                //         ID:                 transactionId,
                //         emailAddress:       postData.email,
                //         cardId:             postData.cardId,
                //         status:             'INITIATED',
                //         paymentIntent:      paymentIntentobjResp
                //     }
                // });

                replyMessage.action = 'create-purchase-intent-resp-success';
                replyMessage.message.displayMessage = 'create purchase intent success';
                replyMessage.message.paymentIntentobjResp = paymentIntentobjResp;
                replyMessage.message.transactionId = transactionId;
                replyMessage.message.idempotentKey = idempotentKey;
                replyMessage.message.purchaseItems = postData.items;

            } else {

                console.log('\n--------------- Payment Intent Fail');
                replyMessage.action = 'create-purchase-intent-resp-error';
                replyMessage.message.displayMessage = 'create purchase intent error';
                replyMessage.message.intentObj = {};
                replyMessage.message.purchaseItems = postData.items;

            }

        // error catch: making purchase request
        } catch (e) {

            replyMessage.action = 'purchase-request-resp-error';
            replyMessage.message.displayMessage = 'purchase request failed';

            console.log('\n************** [createPurchaseRequests.js] [96] : Error in Processing' );
            console.log('\n', e.stack);
        }

        // code block:: socket response
        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n************** [createPurchaseRequests.js] [133]: Socket Send to connectcionId: ')

        // error catch: responding with socket call
        } catch (e) {

            console.log('\n************** [createPurchaseRequests.js] [138] : Error Return Socket Message to Client:' );
            console.log('\n', e.stack);
            return { statusCode: 500, body: e.stack };

        }

    // error catch: json payload parsing
    } catch (e) {

        console.log('\n', path.basename(__filename), '[78] : Error in Parsing Payload :' );
        console.log('\n', e.stack);
        return { statusCode: 500, body: e.stack };

    }
    return Responses._200({ success: true, message: 'user-signup' });
};