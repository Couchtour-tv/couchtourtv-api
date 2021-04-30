const AWS = require('aws-sdk');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import dynamoDb from "../../libs/dynamodb-lib";

import { StripeSuccessfulCheckoutTableName } from '../common/constants'

const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
/*
    SAMPLE PAYLOAD:
        {"action": "get-tickets", "message": { email: <customer_email>, cogId: <cogId> }}
*/

exports.handler = async event => {

    const { connectionId } = event.requestContext;

    try {
        let postData = JSON.parse(event.body).message;
        const email = postData.email;

        let filterExpression = `email = :email`
        let expressionAttributes = {
            ':email': email
        }

        const records = await dynamoDb.scan({
            TableName: StripeSuccessfulCheckoutTableName,
            filterExpression,
            expressionAttributes,
        })

        await Promise.all( records );

        let replyMessage = {};

        if (records.Count > 0 ) {

            replyMessage = {
                action: 'get-tickets-resp-success',
                sender: connectionId,
                message: { video_url: "https://decibel-stream.couchtour.tv/stream/index.m3u8", video_name: 'broadcast' }
            };

        } else {

            replyMessage = {
                action: 'get-tickets-resp-success',
                sender: connectionId,
                message: { video_url: null }
            };

        }

        const socket_send = await socket.postToConnection({
            ConnectionId: connectionId,
            Data: JSON.stringify(replyMessage)
        }).promise();

        console.log('\GET_TICKETS-22 - Promise.all now ');
        await Promise.resolve( socket_send );

    } catch (error) {

        console.log('\GET_TICKETS-22 - Promise.all ERROR ');
        console.log('\GET_TICKETS-25 - error on promises', error.stack);
        return { statusCode: 500, body: error.stack };

    }

    return Responses._200({ success: true, message: 'get-tickets' });

};

// go into StripeSuccessfulCheckoutTableName

// and get records for email where video is not null

    // let filterExpression = `email = :email`
    // let expressionAttributes = {
    //     ':email': <user_email>,
    // }


    // const records = await Dynamo.scan({
    //     TableName: tableName,
    //     filterExpression,
    //     expressionAttributes,
    // })

     // const purchase_record  = records.map((record) => video.video_url  === "https://decibel-stream.couchtour.tv/stream/index.m3u8")


     // purchase_reord .first _200
// {/*{"action": "send-purchases-web", "message": { "video": { <url>, <name>, <email> , <customerId>  }}} */}

