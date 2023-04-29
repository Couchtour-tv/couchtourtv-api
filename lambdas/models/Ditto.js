// Ditto Model
//
// Verbose api requests and responses
//
//-----------------------------------


import * as uuid from "uuid";
import dynamoDb from "../../libs/dynamodb-lib";

const dynamoTableName = "prod-branchdna-request-responses";

// have a function that takes the inputs and logs the request
// this function returns a request uuid - can i get that from amazon

// Create DITTO
export const ApiRequest = async (event, context, endpoint) => {

	let itemRequestId = uuid.v1();
	if (context && context.awsRequestId) {
		itemRequestId = context.awsRequestId;
	}

	console.log("[6] Ditto.js:ApiRequest", event.requestContext.identity);
	const params = {
		TableName: dynamoTableName,
		Item: {
			userId: event.requestContext.identity.cognitoIdentityId,
			requestId: itemRequestId,
			event: event,
			context: context,
			endpoint: endpoint,
			createdAt: Date.now(),
			responseData: null,
			responseAt: null,
		}
	};

	const res = await dynamoDb.put(params);

	console.log("[31] Ditto HERE IS THE RESPONSE FROM DYNAMODB", res);
	return params.Item;
};

// have another function that finds the request via the uuid
// add the response to the function

// UPDATE DITTO
export const ApiResponse = async (userId, requestId, responseData) => {
	console.log("[40] Ditto.js:ApiResponse", userId, requestId, responseData);

	const params = {
		TableName: dynamoTableName,
		Key: {
			userId: userId,
			requestId: requestId
		},
		UpdateExpression: "SET responseData = :responseData, responseAt = :responseAt",
		ExpressionAttributeValues: {
			":responseData": responseData,
			":responseAt": Date.now(),
		},
		ReturnValues: "ALL_NEW"
	};

	const res = await dynamoDb.update(params);

	console.log("[66] ApiResponse - HERE IS THE RESPONSE FROM DYNAMODB", res);
	return { status: true };
};
