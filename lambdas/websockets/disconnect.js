import { SocketTableName } from '../common/constants';
import Responses from '../common/API_Responses';
// import Dynamo from '../common/Dynamo';

exports.handler = async event => {
    console.log('WEBSOCKET DISCONNECT EVENT', event, '\n');

    const { connectionId } = event.requestContext;

    console.log(connectionId, SocketTableName);
    await Dynamo.delete(connectionId, SocketTableName);

    return Responses._200({ message: 'disconnected' });
};