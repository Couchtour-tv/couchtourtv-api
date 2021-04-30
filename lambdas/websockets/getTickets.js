const AWS = require('aws-sdk');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import dynamoDb from "../../libs/dynamodb-lib";

import { StripeSuccessfulCheckoutTableName } from '../common/constants'

/*
    SAMPLE PAYLOAD:
        {"action": "get-purchases", "message": { email: <customer_email>, cogId: <cogId> }}
*/

exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    const scan_params = { TableName: StripeSuccessfulCheckoutTableName };
    const video_array = await dynamoDb.scan(scan_params);

    const replyMessage = {
        action: 'get-user-tickets-resp-success',
        sender: connectionId,
        message: video_array.Items
    };

    const socket_send = await socket.postToConnection({
        ConnectionId: connectionId,
        Data: JSON.stringify(replyMessage)
    }).promise();

    try {
        console.log('\nGETVIDEOS-22 - Promise.all now ');
        await Promise.resolve( socket_send );
    } catch (e) {
        console.log('\nGETVIDEOS-25 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'delivervideos' });
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

