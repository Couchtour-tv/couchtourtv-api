const AWS = require('aws-sdk');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import { DevicesTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';

/*

    Use Cases To Consider

        { UserId, code } + connectedAt

        dyanmo scan the database for this code and userId === null
            into database and get the device record with that code
        it doesnt exist  - code is wrong
        it exists but theres already a userId - device is current on an account
        it exists but theres not userId - this is success. match
        it exists but its no longer valid - please request a new code

        update the record with userId , connectedAt
*/

exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    let postData = JSON.parse(event.body).message;

    postData.ID = uuidv4();
    postData.userId = uuidv4();
    postData.deviceId = uuidv4();

    Dynamo.write(postData, DevicesTableName );

    const replyMessage = {
        action: 'addDeviceId',
        sender: connectionId,
        message: postData.code
    };

    const socket_send = await socket.postToConnection({
        ConnectionId: connectionId,
        Data: JSON.stringify(replyMessage)
    }).promise();

    try {
        console.log('\nADDEVICEID-32 - Promise.all now ');
        await Promise.resolve( socket_send );
    } catch (e) {
        console.log('\nADDEVICEID-35 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'add-device-id' });
};
