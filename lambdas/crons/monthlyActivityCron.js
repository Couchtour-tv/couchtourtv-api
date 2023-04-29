// Monthly Activity Cron

const AWS = require('aws-sdk');
import Dynamo from '../common/Dynamo';
import { OptionsSNS, SNSTableName } from '../common/constants';

const SNS = new AWS.SNS(OptionsSNS);


exports.handler = async (event, context) => {
  const time = new Date();
  const messageText = `Monthly Activity Cron "${context.functionName}" ran at ${time}`;
  console.log(messageText);

  const AttributeParams = {
      attributes: {
          DefaultSMSType: 'Promotional',
      },
  };

	const body = { "message": messageText, "phoneNumber": "+16464934870" };

  const messageParams = {
      Message: body.message,
      PhoneNumber: body.phoneNumber,
  };

	const textId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	const userId = "f24389hf29"
	const dbWrite = { ID: textId, textId, userId, messageParams, AttributeParams};

	await Dynamo.write(dbWrite, SNSTableName);

  try {
      await SNS.setSMSAttributes(AttributeParams).promise();
      await SNS.publish(messageParams).promise();
      console.log('text has been sent');
  } catch (error) {
      console.log('error', error);
  }

};