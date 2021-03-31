const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import { PurchasesTableName, StripeSecretKey } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';
import { CreatePurchase } from "../models/Purchase";
import stripePackage from "stripe";


exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
    const cogId = event.requestContext.identity.cognitoIdentityId;

    // code block:: json parse
    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        let totalValue = 0;
        let allItemsIds = [];
        replyMessage.sender = connectionId;
        replyMessage.message = null;

        console.log('\n****', path.basename(__filename), '[29] payload Recevied:', postData );
        async function priceValueConfirm( items ) {
            return true
        }
        async function getTotalValue( items ) {
            items.forEach( function( item ) {
                totalValue += item.price_cents
            });
        };
        async function createArrayItemIds( items ) {
            items.forEach( function(item) {
                allItemsIds.push( item.item_id )
            });
        };

        // code block:: stripe purchase request
        try {

            // TODO -- Confirm that the Payment Method Belongs to the User
            const validItems = priceValueConfirm( postData.items )
            if ( validItems ) {
                await getTotalValue( postData.Items );
                await createArrayItemIds( postData.Items );
                // DOCS :: stripe.charges.create || https://stripe.com/docs/api/charges/create
                const stripeInterface = stripePackage(StripeSecretKey);
                const purchaseData = {
                    source: postData.stripePayment.id,
                    amount: totalValue,
                    currency: "usd",
                    metadata: {
                        requestId: requestItem.requestId,
                        userId: postData.userId,
                        email: postData.email,
                        cogId: postData.cogId,
                        itemIds: allItemsIds
                        // What other pieces of data do we want to include ?
                    }
                };
                const purchaseResp = await stripeInterface.charges.create(purchaseData);
                console.log('\n****', path.basename(__filename), '[68] here is stripe reply', reply );

                if (reply && (reply.status === 'succeeded')) {

                    console.log('\n**** Credit Transaction Success');
                    console.log('\n****', path.basename(__filename), '[73] purchase reply', purchaseResp);

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

            console.log('\n', path.basename(__filename), '[96] : Error in Processing' )
            console.log('\n', e.stack)

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

            console.log('\n', path.basename(__filename), '[69] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)

            return { statusCode: 500, body: e.stack };

        }

    // error catch: json payload parsing
    } catch (e) {

        console.log('\n', path.basename(__filename), '[78] : Error in Parsing Payload :' )
        console.log('\n', e.stack)

        return { statusCode: 500, body: e.stack };

    }

    return Responses._200({ success: true, message: 'user-signup' });

};

