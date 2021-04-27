const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway, EventsTableName } from '../common/constants';
import Responses from '../common/API_Responses';
// import Dynamo from '../common/Dynamo';
import DynamoDb from '../../libs/dynamodb-lib';

exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log('\n************** [getAllEvents.js] [20] payload Recevied:', postData );

        try {

            const eventsObj = await DynamoDb.scan({ TableName: EventsTableName });
            replyMessage.message.events= eventsObj.Items;
            replyMessage.action = 'get-all-events-resp-success';
            replyMessage.message.displayMessage = 'events retrieved';

        } catch (e) {

            replyMessage.message = {};
            replyMessage.action = 'retrieved-user-error';
            replyMessage.message.displayMessage = 'user NOT retrieved';

            console.log('\n************** [getAllEvents.js] [50] : ERROR  DB Update' )
            console.log('\n', e.stack)

        }

        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n************** [getAllEvents.js] [55]: Socket Send to connectcionId: ', connectionId )

        } catch (e) {

            console.log('\n************** [getAllEvents.js] [59] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)
            return { statusCode: 500, body: e.stack };

        }

    } catch (e) {

        console.log('\n************** [getAllEvents.js] [67] : Error in Parsing Payload :' )
        console.log('\n', e.stack)
        return { statusCode: 500, body: e.stack };

    }

    return Responses._200({ success: true, message: 'retrieved-all-events' });
};