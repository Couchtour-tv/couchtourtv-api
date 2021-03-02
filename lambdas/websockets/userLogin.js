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
                    id
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

    let action = 'user-login';
    const replyMessage = { sender: connectionId };

    try {

        let postData = JSON.parse(event.body).message;
        const user = Dynamo.get( post.user.id, UserTableName );

        if ( postData.user.password === user.user.Id) {
            const update = Dynamo.update( user.user.id, UserTableName, user.loggedIn, true );

            replyMessage.action = action + '-success';
            replyMessage.message = 'user logged in';

            const socket_send = await socket.postToConnection({ 
                ConnectionId: connectionId, 
                Data: JSON.stringify(replyMessage) 
            }).promise();

            console.log('\nUSERLOGIN-56 - Promise.all now ');
            await Promise.resolve( socket_send );

        } else {

            const update = Dynamo.update( user.user.id, UserTableName, user.loggedIn, false );

            replyMessage.action = action + '-fail';
            replyMessage.message = 'user not logged in';

            const socket_send = await socket.postToConnection({ 
                ConnectionId: connectionId, 
                Data: JSON.stringify(replyMessage) 
            }).promise();

            console.log('\nUSERLOGIN-56 - Promise.all now ');
            await Promise.resolve( socket_send );

        }

    } catch (e) {
        
        console.log('\nUSERLOGIN-43 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'user-login' });
};
