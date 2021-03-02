import * as uuid from "uuid";
import { DevicesTableName } from '../common/constants';
import handler from "../../libs/handler-lib";
import dynamoDb from "../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);

  // randonly generate 6 digit code with only capital leters

  // takes the device ids sent up from device
  // generates a 6 character code
  // verifies that that code is unique in the database when userId === null , createdAt < 2.hours.ago
  // saves that in devices db with a timestamp

  // { deviceId, createdAt, code } /// userId, connectedAt

  const params = {
    TableName: DevicesTableName,
    // 'Item' contains the attributes of the item to be created
    // - 'userId': user identities are federated through the
    //             Cognito Identity Pool, we will use the identity id
    //             as the user id of the authenticated user
    // - 'noteId': a unique uuid
    // - 'content': parsed from request body
    // - 'attachment': parsed from request body
    // - 'createdAt': current Unix timestamp
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  await dynamoDb.put(params);

  return params.Item;
});
