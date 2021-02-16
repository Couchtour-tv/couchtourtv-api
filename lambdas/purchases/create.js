import * as uuid from "uuid";
import handler from "../../libs/handler-lib";
import dynamoDb from "../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "PurchasesTable",
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      purchaseId: uuid.v1(),
      data: data,
      createdAt: Date.now()
    }
  };

  await dynamoDb.put(params);

  return params.Item;
});
