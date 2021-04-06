const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
// import Dynamo from '../common/Dynamo';
import DynamoDb from '../../libs/dynamodb-lib';

exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log('\n************** [getUserId.js] [20] payload Recevied:', postData );

        try {

            const userObj= await DynamoDb.query({
                TableName: CreditCardTableName,
                Item: {
                    emailAddress: postData.email,
                    cogId: postData.cogId
                }
            });

            replyMessage.message = userObj.Items[0];
            replyMessage.action = 'retrieved-user-success';
            replyMessage.message.displayMessage = 'user retrieved';

        } catch (e) {

            replyMessage.message = {};
            replyMessage.message.displayMessage = 'user NOT retrieved';
            replyMessage.action = 'retrieved-user-error';

            console.log('\n************** [getUserId.js] [50] : ERROR  DB Update' )
            console.log('\n', e.stack)

        }

        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n', path.basename(__filename), '[55]: Socket Send to connectcionId: ', connectionId )

        } catch (e) {

            console.log('\n', path.basename(__filename), '[59] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)
            return { statusCode: 500, body: e.stack };

        }

    } catch (e) {

        console.log('\n', path.basename(__filename), '[67] : Error in Parsing Payload :' )
        console.log('\n', e.stack)
        return { statusCode: 500, body: e.stack };

    }

    return Responses._200({ success: true, message: 'retrieved-user-id' });
};