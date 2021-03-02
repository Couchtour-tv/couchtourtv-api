const AWS = require('aws-sdk');

import { OptionsAPIGateway, OptionsDynamoDB, SocketTableName } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
// import dynamoDb from "../../libs/dynamodb-lib";

import { UserTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';

/*
    SAMPLE PAYLOAD:
        { "action": "user-logout", "Id": id, "email": email }

    TO-DO
        - decide on the data to be UPDATED for the user 
*/

exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    const replyMessage = { sender: connectionId };

    try {

        let postData = JSON.parse(event.body).message;
        const update = Dynamo.update( postData.Id, UserTableName, 'user.loggedIn', false );

        replyMessage.action = 'userLogout';
        replyMessage.message = 'user logged out'

        const socket_send = await socket.postToConnection({ 
            ConnectionId: connectionId, 
            Data: JSON.stringify(replyMessage) 
        }).promise();
        
        console.log('\nUSERLOGOUT-39 - Promise.all now ');
        await Promise.resolve( socket_send );
    
    } catch (e) {
        
        console.log('\nUSERLOGOUT-44 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'user-logout' });
};
