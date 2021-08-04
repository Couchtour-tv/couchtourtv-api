import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import { SocketTableName } from '../common/constants';

exports.handler = async event => {
    console.log('1-----------------------------', '\n');
    console.log('WEBSOCKET CONNECT EVENT', event, '\n');
    console.log('2-----------------------------', '\n');
    const { connectionId, domainName, stage, requestId } = event.requestContext;

    const data = {
        ID: connectionId,
        date: Date.now(),
        messages: [],
        domainName,
        stage,
        userId: requestId,
        socketId: connectionId
    };
    console.log('3-----------------------------', '\n');
    await Dynamo.write(data, SocketTableName);
    console.log('4-----------------------------', '\n');
    return Responses._200({ message: 'connected' });
};