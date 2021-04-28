const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';

exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log( '\n**************', path.basename(__filename), '[25] userSignUp payload Recevied:', postData );

        try {

            let usersResp = await Dynamo.getGivenEmailAddress( postData.email );
            let user = await usersResp[0];

            await Dynamo.userUpdateLoggedInStatus( user.emailAddress, user.cogId, false );
            await Dynamo.userUpdateAttri( user.emailAddress, user.cogId, 'emailVerified', postData.emailVerified );

            user.loggedIn = false;
            user.emailVerified = postData.emailVerified;

            replyMessage.message = user;
            replyMessage.message.displayMessage = 'user logged out';
            replyMessage.action = 'user-logout-success';

            console.log('\n', path.basename(__filename), '[42] : Success DB Updates' )

        } catch (e) {

            replyMessage.message = null;
            replyMessage.message.displayMessage = 'user not logged out';
            replyMessage.action = 'user-logout-error';

            console.log('\n', path.basename(__filename), '[50] : ERROR  DB Update' )
            console.log('\n', e.stack)

        }

        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n', path.basename(__filename), '[63]: Socket Send to connectcionId: ', connectionId )

        } catch (e) {

            console.log('\n', path.basename(__filename), '[67] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)

            return { statusCode: 500, body: e.stack };

        }

    } catch (e) {

        console.log('\n', path.basename(__filename), '[76] : Error in Parsing Payload :' )
        console.log('\n', e.stack)

        return { statusCode: 500, body: e.stack };

    }

    return Responses._200({ success: true, message: 'user-logout' });
};