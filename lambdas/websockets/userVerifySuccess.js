const AWS = require('aws-sdk');

import { OptionsAPIGateway, OptionsDynamoDB, SocketTableName } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
// import dynamoDb from "../../libs/dynamodb-lib";

import { UserTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';

exports.handler = async event => {

    const { connectionId, domainName, stage, requestId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = postData;
        replyMessage.sender = connectionId;

        console.log('**************\n [22] userVerifySuccess payload Recevied: ', postData)

        try {
            
            // -- TO DO
            // -- What is Backend To Do ? Record a successful user verification ?
            
            replyMessage.displayMessage = 'user email verified';
            replyMessage.action = 'user-verify-success-resp';

        } catch (e) {

            replyMessage.displayMessage = 'user email verified resp error ';
            replyMessage.action = 'user-verify-success-resp-error';

        }

        const socket_send = await socket.postToConnection({ 
            ConnectionId: connectionId, 
            Data: JSON.stringify(replyMessage) 
        }).promise();

        console.log('\nUSERVERIFYSUCCESS-44 - Promise.all now ');
        await Promise.resolve( socket_send );

    } catch (e) {
        
        console.log('\nUSERVERIFYSUCCESS-49 - error on promises', e.stack);
        return { statusCode: 500, body: e.stack };
    }

    return Responses._200({ success: true, message: 'user-login' });
};