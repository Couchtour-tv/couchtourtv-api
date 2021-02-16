import handler from "../../libs/handler-lib";

import { ListPurchases } from "../models/Purchase";

export const main = handler(async (event, context) => {

	const userId = event.requestContext.identity.cognitoIdentityId;

	const items = ListPurchases(userId);

	console.log("[12] list purchases.js: ", items);

	return items;
});
