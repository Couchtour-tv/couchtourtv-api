const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';

exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log( '\n**************', path.basename(__filename), '[18] payload Recevied:', postData );

        try {

            replyMessage.action = 'user-verify-resend-success-resp';
            replyMessage.message = postData;
            replyMessage.message.displayMessage = 'Noting Successful Resend of User Verification';

        } catch (e) {

            replyMessage.action = 'user-verify-resend-success-resp-error';
            replyMessage.message = {};
            replyMessage.message.displayMessage = 'Error Noting Successful Resend of User Verification';

        }

        const socket_send = await socket.postToConnection({
            ConnectionId: connectionId,
            Data: JSON.stringify(replyMessage)
        }).promise();

        console.log('\nUSERVERIFYRESENDSUCCESS-39 - Promise.all now ');
        await Promise.resolve( socket_send );

    } catch (e) {

        console.log('\nUSERVERIFYRESENDSUCCESS-44 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'user-verify-resend-success' });
};

