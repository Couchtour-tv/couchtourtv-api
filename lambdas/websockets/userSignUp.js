const AWS = require('aws-sdk');

import { OptionsAPIGateway, OptionsDynamoDB, SocketTableName } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
// import dynamoDb from "../../libs/dynamodb-lib";

import { UserTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';

/*
    ::Working:: SAMPLE PAYLOAD as JSON:
        { 
            "action": "user-signup", 
            "message": { 
                "cogId": "9daae32d-c987-41dd-bef7-0e0549a62790", 
                "username": "bleep@bloop.com", 
                "email": "bleep@bloop.com", 
                "emailVerified": bool,
                "accessToken": "3db51eb5-06ed-4f70-bac0-e1bbcad46da8",
                "idToken": idToken,
                "refreshToken": refreshToken 
            } 
        }

    ::Working:: formatted for [ wscat ]

        { "action": "user-signup", "message": {  "cogId": "9daae32d-c987-41dd-bef7-0e0549a62790", "username": "bleep@bloop.com", "email": "bleep@bloop.com", "emailVerified": bool, "accessToken": "3db51eb5-06ed-4f70-bac0-e1bbcad46da8", "idToken": idToken, "refreshToken": refreshToken } }



    To-DO 
        -- emailVerified : cognito.verified

*/

exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = postData;
        replyMessage.sender = connectionId;

        console.log('**************\n [47] userSignUp payload Recevied: ', postData)
        

        // create a userId for db table
        postData.ID = uuidv4();
        postData.emailAddress = postData.email;
        postData.cogId = postData.cogId;
        postData.loggedIn = true;

        delete postData.cogId
        delete postData.email

        replyMessage.action = null;
        replyMessage.message = postData;
        // replyMessage.sender = connectionId;

        try { 

            Dynamo.write(postData, UserTableName );

            replyMessage.action = 'user-signup-success'; 
            replyMessage.message.displayMessage = 'user created';

            replyMessage.message.id = replyMessage.message.ID
            delete replyMessage.message.ID


        } catch (e) {

            replyMessage.action = 'user-signup-error';
            replyMessage.message.displayMessage = 'user not created';
            replyMessage.message.loggedIn = false;

        }

        const socket_send = await socket.postToConnection({ 
            ConnectionId: connectionId, 
            Data: JSON.stringify(replyMessage) 
        
        }).promise();
        
        console.log('\nUSERSIGNUP-84 - Promise.all now ');
        await Promise.resolve( socket_send );
    
    } catch (e) {

        console.log('\nUSERSIGN-89 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    
    }

    return Responses._200({ success: true, message: 'user-login' });
};
