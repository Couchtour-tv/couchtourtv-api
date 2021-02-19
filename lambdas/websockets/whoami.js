const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsAPIGateway } from '../common/constants';

exports.handler = async event => {
    console.log('\n', '\n', '\n', '--------------------  WHOAMI  ---------------------','\n', '\n', '\n');
    console.log('WEBSOCKETS/WHOAMI.JS:7', event);

    const { connectionId, domainName } = event.requestContext;

    const availableCommands = [
        "whoami",
        "sendmessage",
        "echo",
        "onlinenow",
    ];

    const replyMessage = {
        action: 'whoami',
        connectionId,
        domainName,
        commands: availableCommands,
    };

    console.log('WEBSOCKETS/WHOAMI.JS:34', replyMessage);


    try {

        const apigwManagementApi = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
        await apigwManagementApi.postToConnection({ ConnectionId: connectionId, Data: JSON.stringify(replyMessage) }).promise();

        return Responses._200({ message: 'whoami SENT'});
    } catch (error) {
        return Responses._400({ message: 'message could not be received', error: error });
    }

    return Responses._200({ message: 'got a message' });
};