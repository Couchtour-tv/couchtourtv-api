// Purchase Model
//
// Database of successfull purchases
//
//-----------------------------------
// purchaseId
// userId
// amount
// currency
// requestId
// movieTitle
// movieId
// email
// createdAt

import * as uuid from "uuid";
import dynamoDb from "../../libs/dynamodb-lib";

const dynamoTableName = "prod-branchdna-purchases";


export const CreatePurchase = async (purchaseData) => {

	const itemId = uuid.v1();
	console.log("[6] Purchase.js:ApiRequest", purchaseData);
	const params = {
		TableName: dynamoTableName,
		Item: {
			purchaseId: itemId,
			userId: purchaseData.metadata.userId,
			email: purchaseData.metadata.email,
			amount: purchaseData.amount,
			currency: purchaseData.currency,
			requestId: purchaseData.metadata.requestId,
			movieTitle: purchaseData.metadata.movieTitle,
			movieId: purchaseData.metadata.movieId,
			createdAt: Date.now()
		}
	};

	const res = await dynamoDb.put(params);

	console.log("[31] Purchase HERE IS THE RESPONSE FROM DYNAMODB", res);
	return params.Item;
};

export const ListPurchases = async (userId) => {
	const params = {
		TableName: dynamoTableName,
		KeyConditionExpression: "userId = :userId",
		ExpressionAttributeValues: {
			":userId": userId
		}
	};

	const result = await dynamoDb.query(params);

	// Return the matching list of items in response body
	return result.Items;
};