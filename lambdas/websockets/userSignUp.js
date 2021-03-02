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
            "action": "user-signup", 
            "message": {
                "user": {
                    id
                    cogId
                    username
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
        
        postData.Id = uuid4();
        postData.emailAddress = postData.user.email;
        postData.user.loggedIn = true
        
        // delete postData.user.userId
        delete postData.user.cogId

        Dynamo.write(postData, UserTableName );

        replyMessage.action = 'user-signup';
        replyMessage.message = { message: 'user created',user: postData };

        const socket_send = await socket.postToConnection({ 
            ConnectionId: connectionId, 
            Data: JSON.stringify(replyMessage) 
        
        }).promise();
        
        console.log('\nUSERSIGNUP-60 - Promise.all now ');
        await Promise.resolve( socket_send );
    
    } catch (e) {

        console.log('\nUSERSIGN-78 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    
    }

    return Responses._200({ success: true, message: 'user-login' });
};
