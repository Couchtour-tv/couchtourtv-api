import Dynamo from '../common/Dynamo';
import { SocketTableName } from '../common/constants';

const getLiveSockets = async (connectionId) => {
    console.log("**************************    SOCKETMODEL SCAN");
	/*
		get sockets where status is connected
	*/

    let filterExpression = `currentstatus = :currentstatus`;
    let expressionAttributes = {
        ':currentstatus': 'connected',
    };
    if (connectionId) {
        filterExpression += ` AND identityId <> :identityId`;
        expressionAttributes = {
            ':currentstatus': 'connected',
            ':identityId': connectionId,
        };
    }

    const sockets = await Dynamo.scan({
        TableName: SocketTableName,
        filterExpression,
        expressionAttributes,
    });

    console.log("SOCKETMODEL SCAN-2", sockets);

    const socketIDS = sockets.map((socket) => socket.ID);

    console.log("SOCKETMODEL SCAN-3", socketIDS);

	return socketIDS;
};


const createSocket = (data) => {

    const params = {
        ID: data.connectionID,
        identityId: data.identityID,
        messages: [],
        domainName: data.domainName,
        stage: data.stage,
        currentstatus: 'connected'
    };

    const res = Dynamo.write(params, SocketTableName);
    console.log("SOCKETMODEL  CREATE SOCKET-50", res);

    return data.connectionID;
};

const disconnectSocket = async (connectionID) => {

    const columnName = "currentstatus";
    const value = "disconnected";
	const res =	await Dynamo.update(connectionID, SocketTableName, columnName, value);
    console.log("SOCKETMODEL  DISCONNECT SOCKET-50", res);

};


export {
	getLiveSockets,
	createSocket,
	disconnectSocket
};