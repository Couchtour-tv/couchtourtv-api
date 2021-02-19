const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsAPIGateway, OptionsDynamoDB, SocketTableName } from '../common/constants';
const ddb = new AWS.DynamoDB.DocumentClient(OptionsDynamoDB);

// import { getLiveSockets } from '../models/SocketModel';

exports.handler = async event => {
    console.log('\n', '\n', '--------------------  ONLINENOW  ---------------------', '\n');
    console.log('WEBSOCKETS/ONLINENOW.JS:17', event);

    try {
        const { connectionId } = event.requestContext;

        let sockets = [];
        try {
            sockets = await ddb.scan({ TableName: SocketTableName, ProjectionExpression: 'ID' }).promise();
        } catch (e) {
            console.log('\nECHO-14 - error database', e.stack);
            return { statusCode: 500, body: e.stack };
        }
        const socketIDS = sockets.Items.map((socket) => socket.ID);
        console.log(sockets, socketIDS);
        // const val = event.body.match(/"options":"all"/) || event.body.match(/"options": "all"/);
        // const userIncluded = val ? null : connectionId;
        // const sockets = getLiveSockets(userIncluded);

        const replyMessage = {
            action: 'onlinenow',
            connections: socketIDS,
        };

        console.log('WEBSOCKETS/ONLINENOW.JS:31', replyMessage);

        const apigwManagementApi = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);
        await apigwManagementApi.postToConnection({ ConnectionId: connectionId, Data: JSON.stringify(replyMessage) }).promise();

        return Responses._200({ message: 'onlinenow SENT'});
    } catch (error) {
        return Responses._400({ message: 'onlinenow error', error: error });
    }

    return Responses._200({ message: 'onlinenow' });
};