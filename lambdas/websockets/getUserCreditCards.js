const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
// import Dynamo from '../common/Dynamo';
import DynamoDb from '../../libs/dynamodb-lib';
import { CreditCardTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';


exports.handler = async event => {

    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
    const { connectionId } = event.requestContext;
    // const cogId = event.requestContext.identity.cognitoIdentityId;

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log( '\n************** [getUserCreditCards.js] [23] payload Recevied:', postData );

        replyMessage.action = null;
        replyMessage.message = {};

        // -- handle db interaction
        try {

            const queryResp = await DynamoDb.query({
                TableName: CreditCardTableName,
                IndexName: 'emailAddressIndex',
                Key: { emailAddress: postData.email }
            });

            replyMessage.creditCards = queryResp.Items;
            replyMessage.action = 'wallet-get-user-credit-cards-resp-success';
            replyMessage.message.displayMessage = 'retrieved user credit cards';

            console.log( '\n************** [getUserCreditCards.js] [44] : Success DB Get' )

        } catch (e) {

            replyMessage.action = 'wallet-get-user-credit-cards-resp-error';
            replyMessage.message.displayMessage = 'retrieved user credit cards';

            console.log( '\n************** [getUserCreditCards.js] [52] : ERROR  DB Fetch' )
            console.log('\n', e.stack)
        }

        // -- handle socket return
        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log( '\n************** [getUserCreditCards.js] [61]: Socket Send to connectcionId: ')

        } catch (e) {

            console.log( '\n************** [getUserCreditCards.js] [65] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)
            return { statusCode: 500, body: e.stack };

        }

    // -- error handling body parse
    } catch (e) {

        console.log( '\n************** [getUserCreditCards.js] [78] : Error in Parsing Payload :' )
        console.log('\n', e.stack)
        return { statusCode: 500, body: e.stack };

    }
    return Responses._200({ success: true, message: 'get-user-credit-cards' });
};