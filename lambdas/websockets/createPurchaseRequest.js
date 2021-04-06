const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import { PurchasesTableName, StripeSecretKey, TransactionsTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';
import { CreatePurchase } from "../models/Purchase";
import stripePackage from "stripe";
// import Dynamo from '../common/Dynamo';
import DynamoDb from '../../libs/dynamodb-lib';


exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
    const cogId = event.requestContext.identity.cognitoIdentityId;

    // code block:: json parse
    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        let totalValueInCents = 0;
        let allItemsIds = [];
        replyMessage.sender = connectionId;
        replyMessage.message = {};

        console.log('\n************** [createPurchaseRequests.js] [29] payload Recevied:', postData );
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
        let paymentIntentobj = {};
        let transactionId = uuidv4();

        // code block:: stripe purchase request
        try {

            // TODO -- Confirm that the Payment Method Belongs to the User
            const validItems = await priceValueConfirm( postData.items )
            if ( validItems ) {

                await getTotalValueInCents( postData.items );
                await createArrayItemIds( postData.items );

                // DOCS :: stripe.charges.create || https://stripe.com/docs/api/charges/create
                const stripeInterface = stripePackage(StripeSecretKey);
                const paymentIntentobj = await stripeInterface.paymentIntents.create({
                    amount: totalValueInCents,
                    currency: 'usd',
                    payment_method_types: ['card'],
                });
                console.log( '\n************** [createPurchaseRequests.js] [64] here is stripe reply', reply );

                replyMessage.action = 'purchase-request-resp-success';
                replyMessage.message.displayMessage = 'purchase request success';
                replyMessage.derp = paymentIntent;

                if (reply && (reply.status === 'succeeded')) {

                    await DynamoDb.put({
                        TableName: TransactionsTableName,
                        Item: {
                            ID:                 transactionId,
                            emailAddress:       postData.email,
                            cardId:             postData.cardId,
                            status:             'INITIATED',
                            paymentIntent:      paymentIntentobj
                        }
                    });







                    replyMessage.action = 'purchase-request-resp-success';
                    replyMessage.message.displayMessage = 'purchase request success';

                // handled error fo
                } else {

                    console.log('\n**** Credit Transaction Fail');
                    console.log('\n****', path.basename(__filename), '[82] purchase reply', purchaseResp);

                }

            } else {

                replyMessage.action = 'purchase-request-resp-error';
                replyMessage.message.displayMessage = 'purchase request failed';

            }

            console.log('\n', path.basename(__filename), '[44] : Success DB Write' )

        // error catch: making purchase request
        } catch (e) {

            replyMessage.action = 'purchase-request-resp-error';
            replyMessage.message.displayMessage = 'purchase request failed';

            console.log('\n', path.basename(__filename), '[96] : Error in Processing' );
            console.log('\n', e.stack);
            console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n');

        }

        // code block:: socket response
        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n', path.basename(__filename), '[65]: Socket Send to connectcionId: ')

        // error catch: responding with socket call
        } catch (e) {

            console.log('\n', path.basename(__filename), '[69] : Error Return Socket Message to Client:' );
            console.log('\n', e.stack);
            console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n');

            return { statusCode: 500, body: e.stack };

        }

    // error catch: json payload parsing
    } catch (e) {

        console.log('\n', path.basename(__filename), '[78] : Error in Parsing Payload :' );
        console.log('\n', e.stack);
        console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n');

        return { statusCode: 500, body: e.stack };

    }

    return Responses._200({ success: true, message: 'user-signup' });

};

