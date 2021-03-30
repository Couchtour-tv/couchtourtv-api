const AWS = require('aws-sdk');
const path = require('path');

import { OptionsAPIGateway } from '../common/constants';
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';
import { CreditCardTableName } from '../common/constants';
import { v4 as uuidv4 } from 'uuid';


exports.handler = async event => {

    const { connectionId } = event.requestContext;
    const socket = new AWS.ApiGatewayManagementApi(OptionsAPIGateway);

    try {

        let postData = JSON.parse(event.body).message;
        let replyMessage = {};
        replyMessage.sender = connectionId;

        console.log( '\n**************', path.basename(__filename), '[22] payload Recevied:', postData );

        // TODO -- Need To Check If Payment Object Already Exists, Handle Error If So
        let paymentObj = {};
        paymentObj.ID = uuidv4();
        paymentObj.emailAddress = postData.email;
        paymentObj.userId = postData.userId;

        paymentObj.active = true;
        paymentObj.status = 'live';
        payment.expmonth = postData.expmonth;
        payment.expyear = postData.expyear;
        paymentObj.stripeObj = postData.paymentMethodObject;

        replyMessage.action = null;
        replyMessage.message = paymentObj;

        try {

            Dynamo.write(userObj, CreditCardTableName );

            replyMessage.action = 'create-payment-method-resp-success';
            replyMessage.message.displayMessage = 'payment method created';

            console.log('\n', path.basename(__filename), '[53] : Success DB Write' )

        } catch (e) {

            replyMessage.action = 'create-payment-method-resp-error';
            replyMessage.message.displayMessage = 'payment method not created';

            console.log('\n', path.basename(__filename), '[61] : ERROR  DB Write' )
            console.log('\n', e.stack)

        }

        try {

            const socket_send = await socket.postToConnection({
                ConnectionId: connectionId,
                Data: JSON.stringify(replyMessage)
            }).promise();

            await Promise.resolve( socket_send );
            console.log('\n', path.basename(__filename), '[65]: Socket Send to connectcionId: ')

        } catch (e) {

            console.log('\n', path.basename(__filename), '[69] : Error Return Socket Message to Client:' )
            console.log('\n', e.stack)

            return { statusCode: 500, body: e.stack };

        }

    } catch (e) {

        console.log('\n', path.basename(__filename), '[78] : Error in Parsing Payload :' )
        console.log('\n', e.stack)

        return { statusCode: 500, body: e.stack };

    }

    return Responses._200({ success: true, message: 'create-payment-method' });

};

