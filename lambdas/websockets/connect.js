/*

MoonSocket Socket Connect

    generates the socket data structure

    { connectionID, identityId, date, domainName, stage, status: 'connected', messages: []}

*/

const connectMessage = "Moondog Midi Socket Connected!";
import Responses from '../common/API_Responses';
import { createSocket } from '../models/SocketModel';

exports.handler = async event => {
    console.log('\n', '\n', '\n', '--------------------  CONNECT  ---------------------','\n', '\n', '\n');
    console.log('WEBSOCKETS/CONNECT.JS:7', event);

    let identityID = event.requestContext.identity.cognitoIdentityId;
    const { connectionId: connectionID, domainName, stage } = event.requestContext;

    if (identityID === null) {
        identityID = connectionID;
    }

    const data = {
        connectionID,
        identityID,
        domainName,
        stage
    };


    await createSocket(data);

    return Responses._200({ message: connectMessage });
};


