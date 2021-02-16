// Card Model
//
// Database of user credit cards
//
//-----------------------------------
// cardId
// userId
// stripeToken
// lastFour
// createdAt
// cardType
// nickname
// month
// year

import * as uuid from "uuid";
import dynamoDb from "../../libs/dynamodb-lib";

const dynamoTableName = "prod-branchdna-purchases";


