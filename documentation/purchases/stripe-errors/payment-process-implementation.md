# Payment Process Implementation

### -----------------------------------------------------------
###  	                 THIS IS SUDO CODE !! ::
### -----------------------------------------------------------

```javascript
/*
	TODO
		- VERIFY WITH DOCS
			- payment intent (backend)
				- associate stripe customer?
				- associate idempotent
				- associate costs in cents
*/

// -------------------------------------------------
// response from create-payment-intent api/socket call
//
/*
	send payment-intent-client-secret
		with associated
			stripe customer id
			price in cents
			idempotent
	send card payment obj id
*/
const paymentDetails = {
	stripeCustomerId: 'sadasdas',
	transactionId: 'asdasd',
	payment_intent_client_secret: 'asdasd',
	idempotent: 'asdasd',
	items_total_costs_in_cents: 234234,
	items_ids: [],
};
// -------------------------------------------------
// Highest Level Payment Processing Function
//
function processPayment( paymentDetails, cardObjectId ) {
	let handled = false;
	// -------------------------------------------------
	// -- interface with stripe ::
	const resp = stripe.confirmCardPayment(
		paymentDetails.payment_intent_client_secret,
		cardObjectId
	);
	// -------------------------------------------------
	// -- handle response for status
	if (resp.status === 'SUCCEEDED') {

		// Do things: [example] update UI whatever

		// then use handler to update backend
		let transactionRespHandler = Stripe_SuccessTransaction_handler.resp.code;
		let action  = transactionRespHandler.do( resp , paymentDetails );

		// -------------------------------------------------
		// -- DO Exit Block
	}

	if (resp.status !== 'SUCCEEDED') {

		// Do things: [example] update UI whatever
		let transactionRespHandler = Stripe_ErrorTransaction_handler.resp.payment_intent.code;
		let action  = transactionRespHandler.do( resp , paymentDetails );

		// -------------------------------------------------
		// -- Do Exit Block
		if ( action.completed ) {

			if ( action.requires_retry ) {

				// do not updated handled to true
				processPayment( paymentDetails, NEW___cardObjectId )

			} else {
				// update
				handled = true
			}
		}
	}

	if ( handled ) {
		// - Exit Function, Carry On WayWard Son
		return {}

	} else {
		// inform user, update UI
	}
}

// -------------------------------------------------
//
// ---- THIS IS WHATS IMPORTANT !
// ---- Handler Modulue: In Another File?

function error_case_blah( params ) {
	// ask the use to update card in UI
	// 		send a backend call to socket to update card
	// on success, repeat
	try
		// do things
		if (blahblah) {

			return { completed: true, retry: false }

		} else () {

			return { completed: true, retry: true }

		}

	catch
		return { completed: true, retry: true }

	// return { completed: true, retry: true }
};
function error_case_blah_blah( params ) {
	// card is expired
	// 		send backend call for expired card
	//		backend disables card
	//		backend logs transaction
	// 		front calls user-get-credit-cards again to attempt tranaction with out expired card

};
function success_case_blah( params ) {};
function success_case_blah_blah( params ) {};

export.Stripe_ErrorTransaction_handler = {
	'error_code_1': error_case_blah(),
	'error_code_2': error_case_blah_blah(),
	'error_code_2': error_case_blah_blah(),
	'error_code_2': error_case_blah_blah(),
	'error_code_2': error_case_blah_blah(),
	'error_code_2': error_case_blah_blah(),
	'error_code_2': error_case_blah_blah(),
	'error_code_2': error_case_blah_blah(),
};

export.Stripe_SuccessTransaction_handler = {
	'error_code_1': success_case_blah(),
	'error_code_2': success_case_blah_blah()
};
```

#### -----------------------------------------------------------
#### 	Payment Intent Creation
#### -----------------------------------------------------------


## :: Creating Customers

https://stripe.com/docs/api/customers/create


## :: Creating Payment Intents

```javascript

// creating payment
const intent = await stripe.paymentIntents.create({
  amount: 1099,
  currency: 'usd',
  customer: customer.id,
});
````