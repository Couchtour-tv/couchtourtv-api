const AWS = require("aws-sdk")

import { OptionsAPIGateway } from "../common/constants"
import Responses from "../common/API_Responses"
import { StripeSecretKey, TransactionsTableName, UserTableName, AcquisitionsTableName } from "../common/constants"
import { v4 as uuidv4 } from "uuid"
import stripePackage from "stripe"
import DynamoDb from "../../libs/dynamodb-lib"

/*
    DOCS ::
        stripe.charges.create
            https://stripe.com/docs/api/charges/create

    Sample Payload
        const createIntentPayload = JSON.stringify({
            action: "create-purchase-intent",
            message: {
                userId:             userId,
                cogId:              localCogId,
                email:              userEmail,
                cardId:             chosenCard.cardId,
                paymentMethodId:    chosenCard.paymentMethodObj?.id,
                items:              [purchaseIntentItems],
                ticId:              ticId,
                ticDate:            ticDate,
                bandName:           bandName,
                eventName:          eventName,
                priceInCents:       priceInCents
            }
        });

        purchaseIntentItems: [
              { item_id: "42424545hj5jkh5kjh5k55l29er", price_cents: 200 },
              { item_id: "24534lkjlkjljklkj324lkj4lkj", price_cents: 200 },
              { item_id: "kjhsfkjppqa4324234kjhkjwh6j8", price_cents: 200 },
            ]
*/


// function priceValueConfirm(items) {
//     return true
// }

function getTotalValueInCents(totalValueInCents, items) {
    items.forEach(function (item) {
        totalValueInCents += item.price_cents
    });
}
function createArrayItemIds(allItemsIds, items) {
    items.forEach(function (item) {
        allItemsIds.push(item.item_id)
    });
}

exports.handler = async (event) => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {
        let postData = JSON.parse(event.body).message
        let replyMessage = {}
        let totalValueInCents = 0
        let allItemsIds = []
        replyMessage.sender = connectionId
        replyMessage.message = {}

        console.log( "\n************** [createPurchaseRequests.js] [31] payload Recevied:", postData );


        let transactionId = uuidv4();
        let idempotentKey = uuidv4();
        let acquiredId = uuidv4();

        try {
            const validItems = true

            if (validItems) {
                getTotalValueInCents(totalValueInCents, postData.items);
                createArrayItemIds(allItemsIds, postData.items);

                const userObj = await DynamoDb.query({
                    TableName: UserTableName,
                    KeyConditionExpression: "emailAddress = :v1",
                    ExpressionAttributeValues: { ":v1": postData.email }
                });
                const user = userObj.Items[0];

                const stripeInterface = await stripePackage(StripeSecretKey);
                const paymentIntentStripePayload = {
                    amount: totalValueInCents,
                    currency: "usd",
                    payment_method_types: ["card"],
                    customer: user.stripeCustomerId,
                    metadata: {
                        customer_email:     postData.email,
                        customer_id:        postData.userId,
                        price:              postData.priceInCents,
                        ticket_id:          postData.ticId,
                        ticket_date:        postData.ticDate,
                        band_name:          postData.bandName,
                        event_name:         postData.eventName,
                        all_items:          postData.items
                    }
                };
                const paymentIntentobjResp = await stripeInterface.paymentIntents.create( paymentIntentStripePayload, { idempotencyKey: idempotentKey } );
                console.log("\n--------------- Payment Intent Success");
                console.log( "\n************** [createPurchaseRequests.js] [64] reply ::", paymentIntentobjResp );
                const transactionWriteObj = {
                    TableName: TransactionsTableName,
                    Item: {
                        ID: transactionId,
                        emailAddress: postData.email,
                        creditCardId: postData.cardId,
                        prevTransactionId: null,
                        transIdempotentKey: idempotentKey,
                        acquiredId: acquiredId,
                        status: "INITIATED",
                        type: "non-subscription",
                        requestJson: paymentIntentobjResp,
                        created_at: Date.now(),
                        responseJson: null,
                        updatedAt: Date.now(),
                        updatedJson: {},
                    }
                };
                const acquiredWriteObj = {
                    TableName: AcquisitionsTableName,
                    Item: {
                        ID: acquiredId,
                        transactionId: transactionId,
                        userId: postData.userId,
                        status: "INITIATED",
                        type: "non-subscription",
                        items: postData.items,
                    }
                };

                await DynamoDb.put(transactionWriteObj);
                await DynamoDb.put(acquiredWriteObj);

                replyMessage.action = "create-purchase-intent-resp-success";
                replyMessage.message.displayMessage = "create purchase intent success";
                replyMessage.message.paymentIntentobjResp = paymentIntentobjResp;
                replyMessage.message.transactionId = transactionId;
                replyMessage.message.idempotentKey = idempotentKey;
                replyMessage.message.purchaseItems = postData.items;
                replyMessage.message.acquiredId = acquiredId;

            } else {

                console.log("\n--------------- Payment Intent Fail");
                replyMessage.action = "create-purchase-intent-resp-error";
                replyMessage.message.displayMessage = "create purchase intent error";
                replyMessage.message.intentObj = {};
                replyMessage.message.purchaseItems = postData.items;

            }

        // error catch: making purchase request
        } catch (e) {

            replyMessage.action = "purchase-request-resp-error"
            replyMessage.message.displayMessage = "purchase request failed"

            console.log( "\n************** [createPurchaseRequests.js] [158] : Error in Processing" )
            console.log("\n", e.stack)
        }

        // code block:: socket response
        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise()

            await Promise.resolve(socket_send)
            console.log( "\n************** [createPurchaseRequests.js] [174]: Socket Send to connectcionId: " )

        // error catch: responding with socket call
        } catch (e) {

            console.log( "\n************** [createPurchaseRequests.js] [178] : Error Return Socket Message to Client:" )
            console.log("\n", e.stack)
            return { statusCode: 500, body: e.stack }
        }

    // error catch: json payload parsing
    } catch (e) {

        console.log( "\n************** [createPurchaseRequests.js] [185] : Error in Parsing Payload :" )
        console.log("\n", e.stack)
        return { statusCode: 500, body: e.stack }

    }

    return Responses._200({ success: true, message: "user-signup" })

}
