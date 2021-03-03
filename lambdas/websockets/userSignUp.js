const AWS = require('aws-sdk');

import { OptionsAPIGateway, OptionsDynamoDB, SocketTableName } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
// import dynamoDb from "../../libs/dynamodb-lib";

import { UserTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';

/*
    ::Working:: SAMPLE PAYLOAD as JSON:
        { "action": "user-signup", "message": { "cogId": "9daae32d-c987-41dd-bef7-0e0549a62790", "username": "bleep@bloop.com", "email": "bleep@bloop.com", "accessToken": "3db51eb5-06ed-4f70-bac0-e1bbcad46da8", "currAuthUser__data1": "efd9359c-d69d-4c47-a94d-7bc2b69c804a", "currAuthUser__data2": "3266f093-ed94-4f17-bcfb-61f8dc6caaaf" } }

    ::NON-working:: SAMPLE PAYLOAD as JSON:

        { "action": "user-signup", "message": { "user": { "cogId": "3ca2d754-bb93-4350-b2a8-131b8585f9f6", "username": "bleep@bloop.com", "email": "bleep@bloop.com", "accessToken": "b872b8d5-d608-43df-bd5c-66ec9156a087" }  }

        {
            "action": "user-signup", 
            "message": {
                "user": {
                    "cogId": "9daae32d-c987-41dd-bef7-0e0549a62790", 
                    "username": "bleep@bloop.com", 
                    "email": "bleep@bloop.com", 
                    "accessToken": "3db51eb5-06ed-4f70-bac0-e1bbcad46da8"
                },
                "currentAuthenticatedUser": {
                    "data1": "helloWorld",
                    "data2": "linusAndCharlieBrown"
                }
            }
        }

    To-DO 
        -- emailVerified : cognito.verified

*/

exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    const replyMessage = { sender: connectionId };

    try {

        let postData = JSON.parse(event.body).message;
        
        // create a userId for db table
        postData.ID = uuidv4();
        postData.emailAddress = postData.email;
        postData.cogId = postData.cogId;
        postData.loggedIn = true;

        delete postData.user.cogId
        delete postData.emai

        replyMessage.action = null;
        replyMessage.message = { user: postData };

        try { 

            Dynamo.write(postData, UserTableName );

            replyMessage.action = 'user-signup-success'; 
            replyMessage.message.displayMessage: 'user created'

        } catch (e) {

            replyMessage.action = 'user-signup-error';
            replyMessage.message.displayMessage: 'user not created'
            replyMessage.message.loggedIn = false;

        }

        const socket_send = await socket.postToConnection({ 
            ConnectionId: connectionId, 
            Data: JSON.stringify(replyMessage) 
        
        }).promise();
        
        console.log('\nUSERSIGNUP-64 - Promise.all now ');
        await Promise.resolve( socket_send );
    
    } catch (e) {

        console.log('\nUSERSIGN-69 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    
    }

    return Responses._200({ success: true, message: 'user-login' });
};
