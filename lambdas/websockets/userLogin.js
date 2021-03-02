const AWS = require('aws-sdk');

import { OptionsAPIGateway, OptionsDynamoDB, SocketTableName } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
// import dynamoDb from "../../libs/dynamodb-lib";

import { UserTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';

/*
    SAMPLE PAYLOAD:
        {
            "action": "user-login", 
            "message": {
                "user": {
                    cogId
                    username
                    password
                    email
                    access token
                },
                "currentAuthenticatedUser": {}
            }
        }
    
    TO-DO
        - decide on the data to be SAVED for the user
*/

exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    const replyMessage = { sender: connectionId };

    try {

        let postData = JSON.parse(event.body).message;
        const returned_user = Dynamo.login( postData.user.email, UserTableName );

        const update = Dynamo.update( returned_user.id, UserTableName, 'user.loggedIn', true );

        replyMessage.action = 'user-login-success';
        replyMessage.message = 'user logged in';

        const socket_send = await socket.postToConnection({ 
            ConnectionId: connectionId, 
            Data: JSON.stringify(replyMessage) 
        }).promise();

        console.log('\nUSERLOGIN-53 - Promise.all now ');
        await Promise.resolve( socket_send );

    } catch (e) {
        
        console.log('\nUSERLOGIN-58 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'user-login' });
};












