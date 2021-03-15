const AWS = require('aws-sdk');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import dynamoDb from "../../libs/dynamodb-lib";

import { MediaMetaTableName } from '../common/constants';

/*
    SAMPLE PAYLOAD:
        {"action": "getvideos"}
*/

exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    const scan_params = { TableName: MediaMetaTableName };
    const video_array = await dynamoDb.scan(scan_params);

    const replyMessage = {
        action: 'delivervideos',
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
