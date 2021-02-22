import stripePackage from "stripe";
import { StripeSecretKey } from '../lambdas/common/constants';
import handler from "../../libs/handler-lib";
import { ApiRequest, ApiResponse } from "../models/Ditto";
import { CreatePurchase } from "../models/Purchase";

// import create from "./create";
// import { getCognitoUser } from "../common/AWSCognitoUtils";

export const main = handler(async (event, context) => {
	const { amount, source, movieId, movieTitle, email } = JSON.parse(event.body);
	const description = "Couchtour.TV Purchase";
	const userId = event.requestContext.identity.cognitoIdentityId;
	console.log("[16] Billing.js:main" , event, userId, description, amount, source);

	// REQUEST - put data in database
	const requestItem = await ApiRequest(event, context, "/billing");
	// const user = getUserOfAuthenticatedUser(event);
	// const user = getCognitoUser(userId);
	console.log("[16] Billing/User", requestItem);

	// Load our secret key from the  environment variables
	const stripe = stripePackage(StripeSecretKey);
	const purchaseData = {
		source,
		amount,
		description,
		currency: "usd",
		metadata: {
			requestId: requestItem.requestId,
			userId: userId,
			email: email,
			movieTitle: movieTitle,
			movieId: movieId,
		}
	};

	const reply = await stripe.charges.create(purchaseData);

	console.log("[38]here is stripe reply", reply );

	if (reply && (reply.status === 'succeeded')) {
		// Success
		// save the payment to the payment database
		const purchaseResp = await CreatePurchase(purchaseData);
		console.log("[47] purchase reply", purchaseResp);

		// const notificationResp = PurchaseCompleteEvent(purchaseData)
			// save the credit card token to the credit card table
			// format the purchase invoice
			// send the purchase invoice back to the user
			// const cardResp = PaymethodmentMet(purchaseData)

	} else {
		// Error
		// save the payment error somewhere
		// save the credit card token to the credit card table
		// send a detailed error back to the client

	}

	if (requestItem && requestItem.requestId) {
		const res = await ApiResponse(userId, requestItem.requestId, reply);
		console.log("[53] Billing: ", res);
	}

	return { status: true, reply: reply };
});
