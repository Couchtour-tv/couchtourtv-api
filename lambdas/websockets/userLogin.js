const AWS = require('aws-sdk');

import { OptionsAPIGateway, OptionsDynamoDB, SocketTableName } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
// import dynamoDb from "../../libs/dynamodb-lib";

import { UserTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';

/*
    SAMPLE PAYLOAD:
        {"action": "user-login", "message": {}}
    
    TO-DO
        - decide on the data to be SAVED for the user
*/

exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    let postData = JSON.parse(event.body).message;
    postData.Id = postData.userId;
    postData.passwordId = postData.passwordId;

    Dynamo.write(postData, UserTableName );

    const replyMessage = { 
        action: 'userLogin', 
        sender: connectionId, 
        message: 'user logged in'
    };

    const socket_send = await socket.postToConnection({ 
        ConnectionId: connectionId, 
        Data: JSON.stringify(replyMessage) 
    }).promise();

    try {
        console.log('\nUSERLOGIN-40 - Promise.all now ');
        await Promise.resolve( socket_send );
    } catch (e) {
        console.log('\nUSERLOGIN-43 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'user-login' });
};
