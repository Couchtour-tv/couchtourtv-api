const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import Dynamo from '../common/Dynamo';

import { OptionsSNS, SNSTableName } from '../common/constants';
const SNS = new AWS.SNS(OptionsSNS);

exports.handler = async event => {
    console.log('event', event);

    const body = JSON.parse(event.body);

    if (!body || !body.phoneNumber || !body.message) {
        return Responses._400({ message: 'missing phone number or messsage from the body' });
    }

    const AttributeParams = {
        attributes: {
            DefaultSMSType: 'Promotional',
        },
    };

    const messageParams = {
        Message: body.message,
        PhoneNumber: body.phoneNumber,
    };

    const ID = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    const dbWrite = { ID: ID, messageParams, AttributeParams};

    await Dynamo.write(dbWrite, SNSTableName);

    try {
        await SNS.setSMSAttributes(AttributeParams).promise();
        await SNS.publish(messageParams).promise();
        return Responses._200({ message: 'text has been sent' });
    } catch (error) {
        console.log('error', error);
        return Responses._400({ message: 'text failed to send' });
    }
};