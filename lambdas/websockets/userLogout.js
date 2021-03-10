const AWS = require('aws-sdk');

import { OptionsAPIGateway, OptionsDynamoDB, SocketTableName } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
// import dynamoDb from "../../libs/dynamodb-lib";

import { UserTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';

/*
    SAMPLE PAYLOAD:
<<<<<<< HEAD
        {"action": "user-logout", "message": {}}

    TO-DO
        - decide on the data to be UPDATED for the user
=======
        {
            "action": "user-logout",
            "message": {
                "id": couchtourdbId,
                "email": email,
                "emailVerified": bool,
                "accessToken": token,
                "idToken": idToken,
                "refreshToken": refreshToken,
                "loggedIn": true
            }
        }

    TO-DO
        - what other values to update ?
        - UPDATING SEVERAL COLUMNS AT ONCE
>>>>>>> mr
*/

exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = postData;
        replyMessage.sender = connectionId;

        console.log('**************\n [42] userLogout payload Recevied: ', postData)

        try {
            // TO-DO: edit to update several 'columns' at once
            const update = Dynamo.update( postData.id, UserTableName, 'loggedIn', false );
            const updateAccessToken = Dynamo.update( postData.id, UserTableName, 'accessToken', postData.accessToken );
            const updateIdToken = Dynamo.update( postData.id, UserTableName, 'idToken', postData.idToken );
            const updateRefreshToken = Dynamo.update( postData.id, UserTableName, 'refreshToken', postData.refreshToken );

            replyMessage.displayMessage = 'user logged out';
            replyMessage.action = 'user-logout-success';

        } catch (e) {

            replyMessage.displayMessage = 'user not logged out';
            replyMessage.action = 'user-logout-error';

        }

        const socket_send = await socket.postToConnection({
            ConnectionId: connectionId,
            Data: JSON.stringify(replyMessage)
        }).promise();

        console.log('\nUSERLOGOUT-53 - Promise.all now ');
        await Promise.resolve( socket_send );

    } catch (e) {

        console.log('\nUSERLOGOUT-58 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'user-logout' });
};
