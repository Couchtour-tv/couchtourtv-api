const AWS = require('aws-sdk');

import { OptionsAPIGateway, OptionsDynamoDB, SocketTableName } from '../common/constants';
const ddb = new AWS.DynamoDB.DocumentClient(OptionsDynamoDB);

exports.handler = async event => {
    let connectionData;
    console.log('\n', '\n', '--------------------  MESSAGE-9  ---------------------', event, '\n');
    const { connectionId, domainName, stage } = event.requestContext;
    // let filterExpression = `currentstatus = :currentstatus`
    // let expressionAttributes = {
 //        ':currentstatus': 'connected',
 //    }

 //    const params = {
 //        TableName: SocketTableName,
 //        FilterExpression: filterExpression,
 //        ExpressionAttributeValues: expressionAttributes
 //    }

    try {
        connectionData = await ddb.scan({ TableName: SocketTableName, ProjectionExpression: 'ID' }).promise();
    } catch (e) {
        console.log('\nMESSAGE-14 - error database', e.stack);
        return { statusCode: 500, body: e.stack };
    };

    const apigwManagementApi = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
    const postData = JSON.parse(event.body).message;
    console.log('\nMESSAGE-24 - postdata - ', domainName, stage, postData, connectionData);
    const replyMessage = {
        action: 'message',
        sender: connectionId,
        message: postData
    };

    const postCalls = connectionData.Items.map(async ({ ID }) => {
        try {
            console.log('\nMESSAGE-29 - .map ', ID);
            if (ID === connectionId) {
                return;
            } else {
                await apigwManagementApi.postToConnection({ ConnectionId: ID, Data: JSON.stringify(replyMessage) }).promise();
            }
        } catch (e) {
            if (e.statusCode === 410) {
                console.log(`Found stale connection, deleting ${ID}`);
                await ddb.delete({ TableName: SocketTableName, Key: { ID } }).promise();
            } else {
                throw e;
            }
        }
    });

    console.log('\nMESSAGE-39 - post calls promises ', postCalls);

    try {
        console.log('\nMESSAGE-42 - Promise.all ');
        await Promise.all(postCalls);
    } catch (e) {
        console.log('\nMESSAGE-45 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    console.log('\nMESSAGE-47');
    return { statusCode: 200, body: 'Data sent.' };
};
