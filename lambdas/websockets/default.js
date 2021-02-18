/*

MoonSocket Socket Default

    adds message to MoodSocket :messages

    { connectionID, identityId, date, domainName, stage, status: 'connected', messages: []}

    connectionID = event.requestContext
*/


const Responses = require('../common/API_Responses');
const WebSocket = require('../common/WebsocketMessage');

exports.handler = async event => {
    console.log('\n', '\n', '\n', '--------------------  DEFAULT  ---------------------','\n', '\n', '\n');
    console.log('WEBSOCKETS/DEFAULT.JS:7', event);

    const { connectionId: connectionID, domainName, stage } = event.requestContext;

    let body;
    try {
        body = JSON.parse(event.body);
    } catch (error) {
        console.log('WEBSOCKETS/DEFAULT.JS[14] - JSON PARSE FAIL', error);
		body = event.body;
    }
    console.log('WEBSOCKETS/DEFAULT.JS:16', body);

    try {
        const replyMessage = {
            action: 'syntax error',
            errorCode: 401,
            connectionID,
            domainName,
            body,
        };

        await WebSocket.send({
            domainName,
            stage,
            connectionID,
            replyMessage
        });

        return Responses._200({ message: 'whoami SENT'});
    } catch (error) {
        return Responses._400({ message: 'message could not be received', error: error });
    }

    return Responses._200({ message: 'got a message' });
};