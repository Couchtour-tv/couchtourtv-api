const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway, TicketsTableName } from '../common/constants';
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

        console.log('\n************** [getAllTickets.js] [20] payload Recevied:', postData );

        try {

            const ticketsObj = await DynamoDb.scan({ TableName: TicketsTableName });
            replyMessage.message.tickets = ticketsObj.Items;
            replyMessage.action = 'get-all-tickets-resp-success';
            replyMessage.message.displayMessage = 'tickets retrieved';

        } catch (e) {

            replyMessage.message = {};
            replyMessage.action = 'get-all-tickets-resp-error';
            replyMessage.message.displayMessage = 'tickets NOT retrieved';

            console.log('\n************** [getAllTickets.js] [50] : ERROR  DB Fetch' )
            console.log('\n', e.stack)

        }

        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n************** [getAllTickets.js] [55]: Socket Send to connectcionId: ', connectionId )

        } catch (e) {

            console.log('\n************** [getAllTickets.js] [59] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)
            return { statusCode: 500, body: e.stack };

        }

    } catch (e) {

        console.log('\n************** [getAllTickets.js] [67] : Error in Parsing Payload :' )
        console.log('\n', e.stack)
        return { statusCode: 500, body: e.stack };

    }

    return Responses._200({ success: true, message: 'retrieved-all-tickets' });
};