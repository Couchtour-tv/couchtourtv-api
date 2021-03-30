const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import { UserTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';


exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log( '\n**************', path.basename(__filename), '[22] payload Recevied:', postData );

        let userObj = {};
        userObj.ID = uuidv4();
        userObj.emailAddress = postData.email;
        userObj.cogId = postData.cogId;
        userObj.emailVerified = postData.emailVerified;
        userObj.loggedIn = true;

        replyMessage.action = null;
        replyMessage.message = userObj;

        try {

            Dynamo.write(userObj, UserTableName );

            replyMessage.action = 'user-signup-success';
            replyMessage.message.displayMessage = 'user created';

            replyMessage.message.userId = replyMessage.message.ID
            delete replyMessage.message.ID

            console.log('\n', path.basename(__filename), '[44] : Success DB Write' )

        } catch (e) {

            replyMessage.action = 'user-signup-error';
            replyMessage.message.displayMessage = 'user not created';
            replyMessage.message.loggedIn = false;

            console.log('\n', path.basename(__filename), '[52] : ERROR  DB Write' )
            console.log('\n', e.stack)

        }

        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n', path.basename(__filename), '[65]: Socket Send to connectcionId: ')

        } catch (e) {

            console.log('\n', path.basename(__filename), '[69] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)

            return { statusCode: 500, body: e.stack };

        }

    } catch (e) {

        console.log('\n', path.basename(__filename), '[78] : Error in Parsing Payload :' )
        console.log('\n', e.stack)

        return { statusCode: 500, body: e.stack };

    }

    return Responses._200({ success: true, message: 'user-signup' });

};

