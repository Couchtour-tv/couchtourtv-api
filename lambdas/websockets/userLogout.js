const AWS = require('aws-sdk');

import { OptionsAPIGateway, OptionsDynamoDB, SocketTableName } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
// import dynamoDb from "../../libs/dynamodb-lib";

import { UserTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';

/*
    SAMPLE PAYLOAD:
        {"action": "user-logout", "message": {}}

    TO-DO
        - decide on the data to be UPDATED for the user
*/

exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    let postData = JSON.parse(event.body).message;
    postData.ID = uuidv4();
    postData.userId = uuidv4();
    postData.deviceId = uuidv4();

    Dynamo.write(postData, UserTableName );

    const replyMessage = {
        action: 'userLogout',
        sender: connectionId,
        message: 'user logged out'
    };

    const socket_send = await socket.postToConnection({
        ConnectionId: connectionId,
        Data: JSON.stringify(replyMessage)
    }).promise();

    try {
        console.log('\nUSERLOGOUT-40 - Promise.all now ');
        await Promise.resolve( socket_send );
    } catch (e) {
        console.log('\nUSERLOGOUT-43 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'user-logout' });
};
