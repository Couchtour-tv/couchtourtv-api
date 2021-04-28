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

        replyMessage.action = 'user-signup-error-resp';
        replyMessage.message = postData;
        replyMessage.message.displayMessage = 'Noting User SignUp Error';

        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n', path.basename(__filename), '[32]: Socket Send to connectcionId: ', connectionId )

        } catch (e) {

            console.log('\n', path.basename(__filename), '[36] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)

            return { statusCode: 500, body: e.stack };

        }

    } catch (e) {

        console.log('\n', path.basename(__filename), '[45] : Error in Parsing Payload :' )
        console.log('\n', e.stack)

        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'user-signup-error' });
};
