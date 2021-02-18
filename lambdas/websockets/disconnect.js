/*

MoonSocket Socket Disconnect

    status: 'disconnected'

    { connectionID, identityId, date, domainName, stage, status: 'connected', messages: []}

*/

const disconnectMessage = "Moondog Midi Socket Disconnected! Goodbark!";
const SocketModel = require('../models/SocketModel');
const Responses = require('../common/API_Responses');

exports.handler = async event => {
	console.log('\n', '\n', '\n', '--------------------  DISCONNECT  ---------------------','\n', '\n', '\n');
    console.log('WEBSOCKETS/DISCONNECT.JS:7', event);

    const { connectionId: connectionID } = event.requestContext;

    // const record = await Dynamo.get(connectionID, tableName)

    await SocketModel.disconnectSocket(connectionID);

    return Responses._200({ message: disconnectMessage });
};