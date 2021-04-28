const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway, AcquisitionsTableName, TicketsTableName } from '../common/constants';
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

        console.log('\n************** [get-user-tickets-resp-.js] [20] payload Recevied:', postData );

        try {

            async function filterSuccess ( acquisitions ) {
                return acquisitions.Items.filter(
                    acquisition, acquisition.status == 'SUCCESS' && acquisition.type == "non-subscription"
                );
            };

            async function retrieveTicketObjs ( filteredAcquisitions ) {
                let acquiredTicketIds = [];
                filteredAcquisitions.forEach( transactions, function( transaction ) {
                    transaction.items.forEach( ticket, function( ticket ) {
                        // acquiredTicketIds.push( ticket.item_id );
                        const ticektObj = await DynamoDb.query({
                            TableName: TicketsTableName,
                            KeyConditionExpression: 'ticketId = :v1',
                            ExpressionAttributeValues: { ':v1': ticket.item_id }
                        });
                        acquiredTicketIds.push( ticektObj );
                    });
                });
                return acquiredTicketIds
            ;

            const acquiredItems = await DynamoDb.query({
                TableName: AcquisitionsTableName,
                KeyConditionExpression: 'userId = :v1',
                ExpressionAttributeValues: { ':v1': postData.userId}
            });

            const successAcquired = await filterSuccess( acquiredItems );
            const successfullyAcquiredTickets = await retrieveTicketObjs( successAcquired );

            replyMessage.userTickets = successfullyAcquiredTickets;
            replyMessage.action = 'get-user-tickets-resp-success';
            replyMessage.displayMessage = 'user ticekts retrieved';

        } catch (e) {

            replyMessage.events = {};
            replyMessage.action = 'get-user-tickets-resp-error';
            replyMessage.displayMessage = 'user ticekts NOT retrieved';

            console.log('\n************** [get-user-tickets-resp-.js] [50] : ERROR DB Queries' )
            console.log('\n', e.stack)

        }

        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n************** [get-user-tickets-resp-.js] [55]: Socket Send to connectcionId: ', connectionId )

        } catch (e) {

            console.log('\n************** [get-user-tickets-resp-.js] [59] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)
            return { statusCode: 500, body: e.stack };

        }

    } catch (e) {

        console.log('\n************** [get-user-tickets-resp-.js] [67] : Error in Parsing Payload :' )
        console.log('\n', e.stack)
        return { statusCode: 500, body: e.stack };

    }

    return Responses._200({ success: true, message: 'get-user-tickets' });
};