const AWS = require('aws-sdk');

import { OptionsAPIGateway } from './constants';

const WebSocketMessageCreate = () => {
    return new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
};

const WebSocketMessageSend = ({ ConnectionId, message }) => {
    const ws = WebSocketMessageCreate();

    const postParams = {
        Data: message,
        ConnectionId,
    };

    return ws.postToConnection(postParams).promise();
};

export {
    WebSocketMessageSend,
    WebSocketMessageCreate
};