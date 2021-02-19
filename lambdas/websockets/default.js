const AWS = require('aws-sdk');
import { OptionsAPIGateway } from '../common/constants';

exports.handler = async event => {
    console.log('\n', '\n', '--------------------  NEW-DEFAULT-9  ---------------------', event, '\n');
    const { connectionId, domainName, stage } = event.requestContext;

    console.log('\n', '\n', '--------------------  NEW-DEFAULT-19  ---------------------', connectionId, domainName, stage, '\n');

    const apigwManagementApi = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    console.log('WEBSOCKETS/DEFAULT.JS[33]');
    let body;
    let postData;
    try {
        body = JSON.parse(event.body);
        postData = body.message;
    } catch (error) {
        console.log('WEBSOCKETS/DEFAULT.JS[14] - JSON PARSE FAIL', error);
        body = event.body;
        postData = body;
    }
    console.log('\nNEW-DEFAULT-24 - postdata - ', postData);

    const replyMessage = {
        action: 'default',
        sender: connectionId,
        message: { error: 401, message: postData }
    };

    const postCalls = [connectionId].map(async ({ ID }) => {
        try {
            console.log('\nNEW-DEFAULT-29 - .map ', replyMessage, connectionId);
            await apigwManagementApi.postToConnection({ ConnectionId: connectionId, Data: JSON.stringify(replyMessage) }).promise();
        } catch (e) {
            if (e.statusCode === 410) {
                console.log(`Found stale connection, deleting ${connectionId}`);
            } else {
                throw e;
            }
        }
    });

    console.log('\nNEW-DEFAULT-39 - post calls promises ', postCalls);

    try {
        console.log('\nNEW-DEFAULT-42 - Promise.all ');
        await Promise.all(postCalls);
    } catch (e) {
        console.log('\nNEW-DEFAULT-45 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    console.log('\nNEW-DEFAULT-47');
    return { statusCode: 200, body: 'Data sent.' };
};
