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
                "id": couchtourdbId,
                "email": email,
                "emailVerified": bool,
                "accessToken": token,
                "idToken": idToken,
                "refreshToken": refreshToken,
                "loggedIn": false
            }
        }
    
    TO-DO
        - decide on the data to be SAVED for the user
        - UPDATING SEVERAL COLUMNS AT ONCE
*/

exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = postData;
        replyMessage.sender = connectionId;

        console.log('**************\n [42] userLogin payload Recevied: ', postData)

        try {
            
            // ---- Not Doing this any longer seen as Id is provided to endpoint via front end 
            // const returned_user = Dynamo.login( postData.user.email, UserTableName );
            // const update = Dynamo.update( returned_user.id, UserTableName, 'user.loggedIn', true );
            
            // TO-DO:
            //  edit to update several 'columns' at once
            //  will tokens be null on logg out ?

            // const update = Dynamo.update( postData.userId, UserTableName, 'loggedIn', true );
            const update = Dynamo.update( postData.email, UserTableName, 'loggedIn', true );
            const updateAccessToken = Dynamo.update( postData.email, UserTableName, 'accessToken', postData.accessToken );
            const updateIdToken = Dynamo.update( postData.email, UserTableName, 'idToken', postData.idToken );
            const updateRefreshToken = Dynamo.update( postData.email, UserTableName, 'refreshToken', postData.refreshToken );

            replyMessage.displayMessage = 'user logged in';
            replyMessage.action = 'user-login-success';

        } catch (e) {

            replyMessage.displayMessage = 'user not logged in';
            replyMessage.action = 'user-login-success';

        }

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












