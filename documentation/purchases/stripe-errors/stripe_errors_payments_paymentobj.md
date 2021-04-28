>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#### >>>>> Testing for specific responses and errors >>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# :::::(https://stripe.com/docs/testing#cards-responses):::::

# The following test cards can be used to create payments that produce specific responses—useful for testing different scenarios and error codes. Verification checks only run when the required information is provided (e.g., for cvc_check to be set to fail, a CVC code must be provided).

## ====================================================================================================================
##                                            !!!!!!!! SUCCESS CASES !!!!!!!!!
## ====================================================================================================================

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCESS W/ CAVEATS
# Card Number:      4000000000000077
_________________________
# paymentMethod:    pm_card_bypassPending
# token:            tok_bypassPending
# Description:      Charge succeeds and funds will be added directly to your available balance (bypassing your pending balance).

_________________________
# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"paymentIntent": {
		"id": "pi_1IeoueKsNNk3qPPUrYtkp1Dx",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IeoueKsNNk3qPPUrYtkp1Dx_secret_BZDjAYSOqE1QxXwQJ7QOKLl87",
		"confirmation_method": "automatic",
		"created": 1618092260,
		"currency": "usd",
		"description": null,
		"last_payment_error": null,
		"livemode": false,
		"next_action": null,
		"payment_method": "pm_1IeoshKsNNk3qPPUyURBC6Pf",
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "succeeded"
	}
}
```

# Transaction attempt response with Token:
```javascript

```
_________________________
# REACTIONS

	- MESSAGE: 'Your Payment Was SuccessFully Processed !'
	- BACKEND:
		- send resp payload to associate to transaction
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCESS W/ CAVEATS
# Card Number:      4000003720000278
	_________________________
# paymentMethod:    pm_card_bypassPendingInternational
# token:            tok_bypassPendingInternational
# Description:      Charge succeeds and funds will be added directly to your available balance (bypassing your pending balance).
	_________________________

# Transaction attempt response with payment methodobj:
```javascript
{
	"paymentIntent": {
		"id": "pi_1Iep79KsNNk3qPPUKPYZrKzm",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1Iep79KsNNk3qPPUKPYZrKzm_secret_msUtqphFET3vaTmNTjEqqZTsT",
		"confirmation_method": "automatic",
		"created": 1618093035,
		"currency": "usd",
		"description": null,
		"last_payment_error": null,
		"livemode": false,
		"next_action": null,
		"payment_method": "pm_1Iep4ZKsNNk3qPPUlFpDVEHO",
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "succeeded"
	}
}
```

# Transaction attempt response with Token:
```javascript

```
_________________________
# REACTIONS
	- MESSAGE: 'Your Payment Was SuccessFully Processed !'
	- BACKEND:
		- send resp payload to associate to transaction
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCEEDS W/ CAVEATS
# Card Number:      4000000000000093
_________________________________________________
# paymentMethod:    pm_card_domesticPricing
# token:            tok_domesticPricing
# Description:     	Charge succeeds and domestic pricing is used (other test cards use international pricing). This card is only significant in countries with split pricing.
_________________________________________________
# FRONTEND:

# Transaction attempt response with payment methodobj:
```javascript
{
	"paymentIntent": {
		"id": "pi_1IepKVKsNNk3qPPUQk2J19l1",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IepKVKsNNk3qPPUQk2J19l1_secret_geDo6dMIMv1dwyi6C87vvnqri",
		"confirmation_method": "automatic",
		"created": 1618093863,
		"currency": "usd",
		"description": null,
		"last_payment_error": null,
		"livemode": false,
		"next_action": null,
		"payment_method": "pm_1IepIUKsNNk3qPPUXFZqSmCg",
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "succeeded"
	}
}
```

# Transaction attempt response with Token:
```javascript
````
_________________________
# REACTIONS

	- MESSAGE: 'Your Payment Was SuccessFully Processed !'
	- BACKEND:
		- send resp payload to associate to transaction

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCESS
# Card Number:      4000000000000010
_________________________________________________
# paymentMethod:    pm_card_avsFail
# token:            tok_avsFail
# Description:     	The address_line1_check and address_zip_check verifications fail. If your account is blocking payments that fail postal code validation, the charge is declined.
_________________________________________________
# FRONTEND:

# Transaction attempt response with payment methodobj:
```javascript
{
	"paymentIntent": {
		"id": "pi_1IepQpKsNNk3qPPUdXpNVHpC",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IepQpKsNNk3qPPUdXpNVHpC_secret_LhOVkUi5is4LSfSnY6llXCHyv",
		"confirmation_method": "automatic",
		"created": 1618094255,
		"currency": "usd",
		"description": null,
		"last_payment_error": null,
		"livemode": false,
		"next_action": null,
		"payment_method": "pm_1IepPFKsNNk3qPPUaA7Pbykd",
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "succeeded"
	}
}
```

# Transaction attempt response with Token:
```javascript
```
_________________________
# REACTIONS

	- MESSAGE: 'Your Payment Was SuccessFully Processed !'
	- BACKEND:
		- send resp payload to associate to transaction
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCESS
# Card Number:      4000000000000028
_________________________________________________
# paymentMethod:    pm_card_avsLine1Fail
# token:            tok_avsLine1Fail
# Description:     	Charge succeeds but the address_line1_check verification fails.
_________________________________________________
# FRONTEND:

# Transaction attempt response with payment methodobj:
```javascript
{
	"paymentIntent": {
		"id": "pi_1IepWWKsNNk3qPPUebdBl8Mc",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IepWWKsNNk3qPPUebdBl8Mc_secret_n7r8A8haDubNhr33WFt4dZnh1",
		"confirmation_method": "automatic",
		"created": 1618094608,
		"currency": "usd",
		"description": null,
		"last_payment_error": null,
		"livemode": false,
		"next_action": null,
		"payment_method": "pm_1IepVNKsNNk3qPPUsV0hmvrs",
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "succeeded"
	}
}
```

# Transaction attempt response with Token:
```javascript
```
_________________________
# REACTIONS

	- MESSAGE: 'Your Payment Was SuccessFully Processed !'
	- BACKEND:
		- send resp payload to associate to transaction
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCESS
# Card Number:      4000000000000036
_________________________________________________
# paymentMethod:    pm_card_avsZipFail
# token:            tok_avsZipFail
# Description:     	The address_zip_check verification fails. If your account is blocking payments that fail postal code validation, the charge is declined.
_________________________________________________
# FRONTEND:

# Transaction attempt response with payment methodobj:
```javascript
{
	"paymentIntent": {
		"id": "pi_1IepaMKsNNk3qPPU2OIiGDNW",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IepaMKsNNk3qPPU2OIiGDNW_secret_XkrDJr1FLpjQHWHimhR2W6MOm",
		"confirmation_method": "automatic",
		"created": 1618094846,
		"currency": "usd",
		"description": null,
		"last_payment_error": null,
		"livemode": false,
		"next_action": null,
		"payment_method": "pm_1IepYtKsNNk3qPPU8Zzp14VO",
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "succeeded"
	}
}
```

# Transaction attempt response with Token:
```javascript
```
_________________________
# REACTIONS

	- MESSAGE: 'Your Payment Was SuccessFully Processed !'
	- BACKEND:
		- send resp payload to associate to transaction
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCESS
# Card Number:      4000000000000044
_________________________________________________
# paymentMethod:    pm_card_avsUnchecked
# token:            tok_avsUnchecked
# Description:     	Charge succeeds but the address_zip_check and address_line1_check verifications are both unavailable.
_________________________________________________
# FRONTEND:

# Transaction attempt response with payment methodobj:
```javascript
{
	"paymentIntent": {
		"id": "pi_1IepdFKsNNk3qPPUlkBvxWyd",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IepdFKsNNk3qPPUlkBvxWyd_secret_200Egw7GsjRLmKbVFUJZblUCe",
		"confirmation_method": "automatic",
		"created": 1618095025,
		"currency": "usd",
		"description": null,
		"last_payment_error": null,
		"livemode": false,
		"next_action": null,
		"payment_method": "pm_1IepcOKsNNk3qPPUhFjmD2W3",
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "succeeded"
	}
}
```

# Transaction attempt response with Token:
```javascript
```
_________________________
# REACTIONS

	- MESSAGE: 'Your Payment Was SuccessFully Processed !'
	- BACKEND:
		- send resp payload to associate to transaction
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCEEDED
# Card Number:      4000000000005126
_________________________________________________
# paymentMethod:    pm_card_refundFail
# token:            tok_refundFail
# Description:     	Charge succeeds but refunding a captured charge fails asynchronously with a failure_reason of expired_or_canceled_card. Note that because refund failures are asynchronous, the refund will appear 											to be successful at first and will only have the failed status on subsequent fetches. We also notify you of refund failures using the charge.refund.updated webhook event.
_________________________________________________
# FRONTEND:

# Transaction attempt response with payment methodobj:
```javascript
{
	"paymentIntent": {
		"id": "pi_1IepguKsNNk3qPPUuqTTCVDw",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IepguKsNNk3qPPUuqTTCVDw_secret_WrkRN90hFdyspfrir4lMjM7sL",
		"confirmation_method": "automatic",
		"created": 1618095252,
		"currency": "usd",
		"description": null,
		"last_payment_error": null,
		"livemode": false,
		"next_action": null,
		"payment_method": "pm_1IepfnKsNNk3qPPUiAhVSUsx",
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "succeeded"
	}
}
```

# Transaction attempt response with Token:
```javascript
```
_________________________
# REACTIONS

	- MESSAGE: 'Your Payment Was SuccessFully Processed !'
	- BACKEND:
		- send resp payload to associate to transaction
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCESS
# Card Number:      4000000000009235
_________________________________________________
# paymentMethod:    pm_card_riskLevelElevated
# token:            tok_riskLevelElevated
# Description:     	Results in a charge with a risk_level of elevated.
_________________________________________________
# FRONTEND:

# Transaction attempt response with payment methodobj:
```javascript
{
	"paymentIntent": {
		"id": "pi_1IeppFKsNNk3qPPU2LVHbVr8",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IeppFKsNNk3qPPU2LVHbVr8_secret_mablptU099Fswlstgth7iPcdM",
		"confirmation_method": "automatic",
		"created": 1618095769,
		"currency": "usd",
		"description": null,
		"last_payment_error": null,
		"livemode": false,
		"next_action": null,
		"payment_method": "pm_1IepoIKsNNk3qPPU1gX1Dtvk",
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "succeeded"
	}
}
```

# Transaction attempt response with Token:
```javascript
```
_________________________
# REACTIONS

	- MESSAGE: 'Your Payment Was SuccessFully Processed !'
	- BACKEND:
		- send resp payload to associate to transaction
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCESS W/ CAVEAT
# Card Number:      5555555555554220
_________________________________________________
# paymentMethod:
# token:
# Description:     	Charge succeeds and returns a brand_product of MWE.
_________________________________________________
# FRONTEND:

# Transaction attempt response with payment methodobj:
```javascript
{
	"paymentIntent": {
		"id": "pi_1IeqMtKsNNk3qPPUOjgrklFg",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IeqMtKsNNk3qPPUOjgrklFg_secret_14GVBPOJ6ab3buyyK6NgoIAEn",
		"confirmation_method": "automatic",
		"created": 1618097855,
		"currency": "usd",
		"description": null,
		"last_payment_error": null,
		"livemode": false,
		"next_action": null,
		"payment_method": "pm_1IeqLuKsNNk3qPPU2SqtvWev",
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "succeeded"
	}
}
```

# Transaction attempt response with Token:
```javascript
```
_________________________
# REACTIONS

	- MESSAGE: 'Your Payment Was SuccessFully Processed !'
	- BACKEND:
		- send resp payload to associate to transaction
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

## ====================================================================================================================
##                                         !!!!!!!!! SUCCESS CASES END !!!!!!!!!
## ====================================================================================================================


## ====================================================================================================================
## 												!!!!!!! ERROR CASES !!!!!!!!!
## ====================================================================================================================


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# TRANSACTION ERROR
# Card Number:      4000000000000002
	__________________________________________________________________
# paymentMethod:    pm_card_chargeDeclined
# token:            tok_chargeDeclined
# Description:      Charge is declined with a card_declined code.
	__________________________________________________________________
## From transaction error object:

#  code:  			card_declined
#  decline_code:    generic_decline
#  doc_url:         https://stripe.com/docs/error-codes/card-declined
#  description:		The card has been declined for an unknown reason.
#  next steps: 		The customer needs to contact their card issuer for more information.
	__________________________________________________________________


# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1IepAqKsNNk3qPPUFjmClBZD",
	"code": "card_declined",
	"decline_code": "generic_decline",
	"doc_url": "https://stripe.com/docs/error-codes/card-declined",
	"message": "Your card was declined.",
	"payment_intent": {
		"id": "pi_1IepAqKsNNk3qPPUFzjb9O2S",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IepAqKsNNk3qPPUFzjb9O2S_secret_O5T8Uncs32bagcTCuWD2dC3YB",
		"confirmation_method": "automatic",
		"created": 1618093264,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1IepAqKsNNk3qPPUFjmClBZD",
			"code": "card_declined",
			"decline_code": "generic_decline",
			"doc_url": "https://stripe.com/docs/error-codes/card-declined",
			"message": "Your card was declined.",
			"payment_method": {
				"id": "pm_1Iep9AKsNNk3qPPUy9vZGOW2",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "22222",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 2,
					"exp_year": 2022,
					"funding": "credit",
					"generated_from": null,
					"last4": "0002",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618093161,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1Iep9AKsNNk3qPPUy9vZGOW2",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "22222",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 2,
			"exp_year": 2022,
			"funding": "credit",
			"generated_from": null,
			"last4": "0002",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618093161,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
```
_________________________
# REACTIONS

	- MESSAGE: 'Your Card Was Declined For An Unknown Reason, Please Contact Your Card Issuer For More Information'
	- MESSAGE: 'We Will Be DeActiviating This Card Until It Your Issuer Resolves This. Please Add or Choose Anohther Card To Process This Payment'

	- BACKEND: Send payload to Deactivate Card

	- ACTIONS: Add Card or Process Payment With Another
		- ADD CARD socket call

		or

		- Process Payment With Existing Card

	________________________
# BACKEND REACTION:

USED CARD TWICE.
FIRST ERROR MESSAGE WAS: [Your card was declined.]
SECOND ERROR MESSAGE WAS: [The provided PaymentMethod was previously used with a PaymentIntent without Customer attachment, shared with a connected account without Customer attachment, or was detached from a Customer. It may not be used again. To use a PaymentMethod multiple times, you must attach it to a Customer first.]
	https://stackoverflow.com/questions/60333494/this-paymentmethod-was-previously-used-without-being-attached-to-a-customer-or-w


# BACKEND:
	attatch to customer (https://stripe.com/docs/api/customers)
	CREATE customer (https://stripe.com/docs/api/customers/create)
```javascript
const customer = await stripe.customers.create({
	description: 'My First Test Customer (created for API docs)',
});
```

# FRONTEND:
	- display error message. ask them to re-enter card info, pick a different card or add a new card
	- send message to backend notifying card was declined
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION FAILURE
# Card Number:      4000000000000101
	__________________________________________________________________
# paymentMethod:    pm_card_cvcCheckFail
# token:            tok_cvcCheckFail
# Description:     	If a CVC number is provided, the cvc_check fails. If your account is blocking payments that fail CVC code validation, the charge is declined.
	__________________________________________________________________
## From transaction error object:

#  code:            incorrect_cvc
#  doc_url:         https://stripe.com/docs/error-codes/incorrect-cvc
#  description:		The card’s security code is incorrect.
#  next steps: 		Check the card’s security code or use a different card.
	__________________________________________________________________

# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1IepjUKsNNk3qPPUMSoyJaFG",
	"code": "incorrect_cvc",
	"doc_url": "https://stripe.com/docs/error-codes/incorrect-cvc",
	"message": "Your card's security code is incorrect.",
	"param": "cvc",
	"payment_intent": {
		"id": "pi_1IepjTKsNNk3qPPUxJDnzNJX",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IepjTKsNNk3qPPUxJDnzNJX_secret_UOi0NncoQz1H1DyWi80Pn2f7t",
		"confirmation_method": "automatic",
		"created": 1618095411,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1IepjUKsNNk3qPPUMSoyJaFG",
			"code": "incorrect_cvc",
			"doc_url": "https://stripe.com/docs/error-codes/incorrect-cvc",
			"message": "Your card's security code is incorrect.",
			"param": "cvc",
			"payment_method": {
				"id": "pm_1IepieKsNNk3qPPUSzHOaHAN",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "11111",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 1,
					"exp_year": 2031,
					"funding": "credit",
					"generated_from": null,
					"last4": "0101",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618095360,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1IepieKsNNk3qPPUSzHOaHAN",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "11111",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 1,
			"exp_year": 2031,
			"funding": "credit",
			"generated_from": null,
			"last4": "0101",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618095360,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
```
_________________________
# REACTIONS

	- MESSAGE: 'Your Transaction Failed Due to Mismatched CSV numbers. Please update Your Card'
	- BACKEND:
		- send resp payload to associate to transaction
	- ACTIONS:
		- User Update Card
			- Update Card Backend
		- Process Payment with another card (No payment-intent-creation necesary, just use another caard obj with exsisting payment-intent)
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION ERROR
# Card Number:      4000000000000341
_________________________________________________
# paymentMethod:    pm_card_chargeCustomerFail
# token:            tok_chargeCustomerFail
# Description:     	Attaching this card to a Customer object succeeds, but attempts to charge the customer fail.
_________________________________________________
## From transaction error object:

#  code:  			card_declined
#  decline_code:    generic_decline
#  doc_url:         https://stripe.com/docs/error-codes/card-declined
#  description:		The card has been declined for an unknown reason.
#  next steps: 		The customer needs to contact their card issuer for more information.
	__________________________________________________________________
# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1IepmOKsNNk3qPPU5zFqoh9x",
	"code": "card_declined",
	"decline_code": "generic_decline",
	"doc_url": "https://stripe.com/docs/error-codes/card-declined",
	"message": "Your card was declined.",
	"payment_intent": {
		"id": "pi_1IepmOKsNNk3qPPUA8oN0UPa",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IepmOKsNNk3qPPUA8oN0UPa_secret_HqCItf71pBujSjl9JCr7yUBi3",
		"confirmation_method": "automatic",
		"created": 1618095592,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1IepmOKsNNk3qPPU5zFqoh9x",
			"code": "card_declined",
			"decline_code": "generic_decline",
			"doc_url": "https://stripe.com/docs/error-codes/card-declined",
			"message": "Your card was declined.",
			"payment_method": {
				"id": "pm_1IeplcKsNNk3qPPU1eJQzugn",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "43334",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 4,
					"exp_year": 2034,
					"funding": "credit",
					"generated_from": null,
					"last4": "0341",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618095544,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1IeplcKsNNk3qPPU1eJQzugn",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "43334",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 4,
			"exp_year": 2034,
			"funding": "credit",
			"generated_from": null,
			"last4": "0341",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618095544,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
```
_________________________
# REACTIONS

	- MESSAGE: 'Your Card Was Declined For An Unknown Reason, Please Contact Your Card Issuer For More Information'
	- MESSAGE: 'We Will Be DeActiviating This Card Until It Your Issuer Resolves This. Please Add or Choose Anohther Card To Process This Payment'

	- BACKEND: Send payload to Deactivate Card

	- ACTIONS: Add Card or Process Payment With Another
		- ADD CARD socket call

		or

		- Process Payment With Existing Card
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION FAILURE
# Card Number:      4000000000004954
_________________________________________________
# paymentMethod:    pm_card_riskLevelHighest
# token:            tok_riskLevelHighest
# Description:     	Results in a charge with a risk_level of highest.
_________________________________________________
## From transaction error object:

#  code:  			card_declined
#  decline_code:    generic_decline
#  doc_url:         https://stripe.com/docs/error-codes/card-declined
#  description:		The card has been declined for an unknown reason.
#  next steps: 		The customer needs to contact their card issuer for more information.
	__________________________________________________________________
# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1IepryKsNNk3qPPUuTItnYlC",
	"code": "card_declined",
	"decline_code": "generic_decline",
	"doc_url": "https://stripe.com/docs/error-codes/card-declined",
	"message": "Your card was declined.",
	"payment_intent": {
		"id": "pi_1IeprxKsNNk3qPPUNVuVkOSJ",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IeprxKsNNk3qPPUNVuVkOSJ_secret_AcwD8lIFGWHYMEJIX5PaagbuE",
		"confirmation_method": "automatic",
		"created": 1618095937,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1IepryKsNNk3qPPUuTItnYlC",
			"code": "card_declined",
			"decline_code": "generic_decline",
			"doc_url": "https://stripe.com/docs/error-codes/card-declined",
			"message": "Your card was declined.",
			"payment_method": {
				"id": "pm_1IeprEKsNNk3qPPU8zGL1MOZ",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "45555",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 5,
					"exp_year": 2054,
					"funding": "credit",
					"generated_from": null,
					"last4": "4954",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618095892,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1IeprEKsNNk3qPPU8zGL1MOZ",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "45555",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 5,
			"exp_year": 2054,
			"funding": "credit",
			"generated_from": null,
			"last4": "4954",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618095892,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
ChoosePaymentMethod.js: 235[223], CONFIRM CARD FAILURE {
	"action": "default",
	"sender": "cknc9yqdy000toh3ab61h21j4",
	"message": {
		"error": 401,
		"message": {
			"cogId": "us-east-1:009c3e6e-81c8-4904-bdc3-554ce0f466a3",
			"statusResp": "FAILURE",
			"userId": "249a8942-4407-4aaf-9816-f91fbc8056e7",
			"email": "stuheadz@gmail.com",
			"cardId": "9649679f-264c-4527-a361-0984a39d62b9"
		}
	}
}
```


________________________________________________
# REACTION

- MESSAGE: 'Your Card Was Declined For An Unknown Reason, Please Contact Your Card Issuer For More Information'
	- MESSAGE: 'We Will Be DeActiviating This Card Until It Your Issuer Resolves This. Please Add or Choose Anohther Card To Process This Payment'

	- BACKEND: Send payload to Deactivate Card

	- ACTIONS: Add Card or Process Payment With Another
		- ADD CARD socket call

		or

		- Process Payment With Existing Card

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION ERROR
# Card Number:      4100000000000019
_________________________________________________
# paymentMethod:    pm_card_chargeDeclinedFraudulent
# token:            tok_chargeDeclinedFraudulent
# Description:     	Results in a charge with a risk_level of highest. The charge is blocked as it’s considered fraudulent.
_________________________________________________
## From transaction error object:

#  code:    		card_declined
#  decline_code: 	fraudulent,
#  doc_url:         https://stripe.com/docs/error-codes/card-declined
#  description:		The payment has been declined as Stripe suspects it is fraudulent.
#  next steps: 		Do not report more detailed information to your customer. Instead, present as you would the generic_decline described below. (i.e. The customer needs to contact their card issuer for more information.)


	__________________________________________________________________
# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1IepusKsNNk3qPPU0Y1ofxfr",
	"code": "card_declined",
	"decline_code": "fraudulent",
	"doc_url": "https://stripe.com/docs/error-codes/card-declined",
	"message": "Your card has been declined.",
	"payment_intent": {
		"id": "pi_1IepurKsNNk3qPPUjSuzWaIQ",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IepurKsNNk3qPPUjSuzWaIQ_secret_7vqiI2od5mDhwYceuCuux0nS7",
		"confirmation_method": "automatic",
		"created": 1618096117,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1IepusKsNNk3qPPU0Y1ofxfr",
			"code": "card_declined",
			"decline_code": "fraudulent",
			"doc_url": "https://stripe.com/docs/error-codes/card-declined",
			"message": "Your card was declined.",
			"payment_method": {
				"id": "pm_1IepttKsNNk3qPPUmkW4vFig",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "43434",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 4,
					"exp_year": 2034,
					"funding": "credit",
					"generated_from": null,
					"last4": "0019",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618096057,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1IepttKsNNk3qPPUmkW4vFig",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "43434",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 4,
			"exp_year": 2034,
			"funding": "credit",
			"generated_from": null,
			"last4": "0019",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618096057,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
```

________________________________________________
# REACTION:

	- MESSAGE: 'Your Card Was Consider Potentially Fraudulent By Our Card Processor's System. They Have Blocked Your Transaction'
	- MESSAGE: 'We Will Be DeActiviating This Card Until It Your Issuer Resolves This. Please Add or Choose Anohther Card To Process This Payment'

	- BACKEND: Send payload to Deactivate Card

	- ACTIONS: Add Card or Process Payment With Another
		- ADD CARD socket call

		or

		- Process Payment With Existing Card (reminder:: use existing payment-intent-obj with another card id)
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION ERROR
# Card Number:      4000000000009995
_________________________________________________
# paymentMethod:    pm_card_chargeDeclinedInsufficientFunds
# token:            tok_chargeDeclinedInsufficientFunds
# Description:     	Charge is declined with a card_declined code. The decline_code attribute is insufficient_funds.
_________________________________________________
## From             transaction error object:
#  code:            card_declined
#  decline_code:    insufficient_funds,
#  doc_url:         https://stripe.com/docs/error-codes/card-declined
#  description:		The card has insufficient funds to complete the purchase.
#  next steps: 		The customer should use an alternative payment method.
	__________________________________________________________________
# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1Iepz8KsNNk3qPPUbCnhRTKL",
	"code": "card_declined",
	"decline_code": "insufficient_funds",
	"doc_url": "https://stripe.com/docs/error-codes/card-declined",
	"message": "Your card has insufficient funds.",
	"payment_intent": {
		"id": "pi_1Iepz7KsNNk3qPPUJipazvye",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1Iepz7KsNNk3qPPUJipazvye_secret_4y7gAyqefJtP8xeZdL2HhBRqa",
		"confirmation_method": "automatic",
		"created": 1618096381,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1Iepz8KsNNk3qPPUbCnhRTKL",
			"code": "card_declined",
			"decline_code": "insufficient_funds",
			"doc_url": "https://stripe.com/docs/error-codes/card-declined",
			"message": "Your card has insufficient funds.",
			"payment_method": {
				"id": "pm_1IepyEKsNNk3qPPUogVjsrtF",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "34234",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 3,
					"exp_year": 2024,
					"funding": "credit",
					"generated_from": null,
					"last4": "9995",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618096326,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1IepyEKsNNk3qPPUogVjsrtF",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "34234",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 3,
			"exp_year": 2024,
			"funding": "credit",
			"generated_from": null,
			"last4": "9995",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618096326,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
```
________________________________________________
# REACTIONS :

	- MESSAGE: 'Your Transaction Has Failed Due To Insuffient Funds. PLease User An Alternate Card'
	- BACKEDN: Socket Call To Add Transaction Attempt to BEnd
	- ACTIONS: Add Card or Process Payment With Another
		- Process Payment With Another Existing Card (reminder:: use existing payment-intent-obj with another card id)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION ERROR
# Card Number:      4000000000009987
_________________________________________________
# paymentMethod:    pm_card_visa_chargeDeclinedLostCard
# token:            tok_visa_chargeDeclinedLostCard
# Description:     	Charge is declined with a card_declined code. The decline_code attribute is lost_card.
_________________________________________________
## From transaction error object:

# code:       			card_declined,
# decline_code: 		lost_card,
# doc_url: 				https://stripe.com/docs/error-codes/card-declined
# description:			The payment has been declined because the card is reported lost.
# next steps: 			The specific reason for the decline should not be reported to the customer. Instead, it needs to be presented as a generic decline.

	__________________________________________________________________
# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1Ieq2cKsNNk3qPPUy5vHygEe",
	"code": "card_declined",
	"decline_code": "lost_card",
	"doc_url": "https://stripe.com/docs/error-codes/card-declined",
	"message": "Your card has been declined.",
	"payment_intent": {
		"id": "pi_1Ieq2bKsNNk3qPPUOhEVv7Wm",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1Ieq2bKsNNk3qPPUOhEVv7Wm_secret_lWWLtiGGCT157jYmVc2HBMl7g",
		"confirmation_method": "automatic",
		"created": 1618096597,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1Ieq2cKsNNk3qPPUy5vHygEe",
			"code": "card_declined",
			"decline_code": "lost_card",
			"doc_url": "https://stripe.com/docs/error-codes/card-declined",
			"message": "Your card was declined.",
			"payment_method": {
				"id": "pm_1Ieq1dKsNNk3qPPUKeioB05U",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "44444",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 4,
					"exp_year": 2044,
					"funding": "credit",
					"generated_from": null,
					"last4": "9987",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618096538,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1Ieq1dKsNNk3qPPUKeioB05U",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "44444",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 4,
			"exp_year": 2044,
			"funding": "credit",
			"generated_from": null,
			"last4": "9987",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618096538,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
```
________________________________________________
# REACTIONS:

	- MESSAGE: 'Our Payment Processing Partner Is Not Able To Execute Your Transaction Attempt. Please Use Another Card'
	- BACKEDN: Socket Call To Add Transaction Attempt to Backend
	- ACTIONS: Add Card or Process Payment With Another
		- Process Payment With Another Existing Card (reminder:: use existing payment-intent-obj with another card id)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION FAILURE
# Card Number:      4000000000009979
_________________________________________________
# paymentMethod:    pm_card_visa_chargeDeclinedStolenCard
# token:            tok_visa_chargeDeclinedStolenCard
# Description:     	Charge is declined with a card_declined code. The decline_code attribute is stolen_card.
_________________________________________________
## From transaction error object:

#  code:    	 	card_declined,
#  decline_code: 	stolen_card,
#  doc_url: 		https://stripe.com/docs/error-codes/card-declined
#  description:		The payment has been declined because the card is reported stolen.
#  next steps: 		The specific reason for the decline should not be reported to the customer. Instead, it needs to be presented as a generic decline.

__________________________________________________________________
# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1Ieq94KsNNk3qPPUMHLd1OVi",
	"code": "card_declined",
	"decline_code": "stolen_card",
	"doc_url": "https://stripe.com/docs/error-codes/card-declined",
	"message": "Your card has been declined.",
	"payment_intent": {
		"id": "pi_1Ieq93KsNNk3qPPUUFT49XjN",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1Ieq93KsNNk3qPPUUFT49XjN_secret_CH8x56TCBQI9sPC1FAWFHCy6Y",
		"confirmation_method": "automatic",
		"created": 1618096997,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1Ieq94KsNNk3qPPUMHLd1OVi",
			"code": "card_declined",
			"decline_code": "stolen_card",
			"doc_url": "https://stripe.com/docs/error-codes/card-declined",
			"message": "Your card was declined.",
			"payment_method": {
				"id": "pm_1Ieq8AKsNNk3qPPUwrU2mZDG",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "54545",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 5,
					"exp_year": 2045,
					"funding": "credit",
					"generated_from": null,
					"last4": "9979",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618096943,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1Ieq8AKsNNk3qPPUwrU2mZDG",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "54545",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 5,
			"exp_year": 2045,
			"funding": "credit",
			"generated_from": null,
			"last4": "9979",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618096943,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
```
________________________________________________
# REACTIONS:

	- MESSAGE: 'Our Payment Processing Partner Is Not Able To Execute Your Transaction Attempt. Please Use Another Card'
	- BACKEND: Socket Call To Add Transaction Attempt to Backend
	- ACTIONS: Add Card or Process Payment With Another
		- Process Payment With Another Existing Card (reminder:: use existing payment-intent-obj with another card id)
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION FAILURE
# Card Number:      4000000000000069
_________________________________________________
# paymentMethod:    pm_card_chargeDeclinedExpiredCard
# token:            tok_chargeDeclinedExpiredCard
# Description:     	Charge is declined with an expired_card code.
_________________________________________________
## From transaction error object:

# code: 	 	   expired_card,
# doc_url:         https://stripe.com/docs/error-codes/expired-card
# description:	   The card has expired.
# next steps: 	   Check the expiration date or use a different card.
	__________________________________________________________________
# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1IeqCYKsNNk3qPPU467iGh4d",
	"code": "expired_card",
	"doc_url": "https://stripe.com/docs/error-codes/expired-card",
	"message": "Your card has expired.",
	"param": "exp_month",
	"payment_intent": {
		"id": "pi_1IeqCXKsNNk3qPPU7972whEq",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IeqCXKsNNk3qPPU7972whEq_secret_c3gRAP8X6CtFlyQ352Uekv7ho",
		"confirmation_method": "automatic",
		"created": 1618097213,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1IeqCYKsNNk3qPPU467iGh4d",
			"code": "expired_card",
			"doc_url": "https://stripe.com/docs/error-codes/expired-card",
			"message": "Your card has expired.",
			"param": "exp_month",
			"payment_method": {
				"id": "pm_1IeqBnKsNNk3qPPUVZTz3343",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "96969",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 6,
					"exp_year": 2069,
					"funding": "credit",
					"generated_from": null,
					"last4": "0069",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618097167,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1IeqBnKsNNk3qPPUVZTz3343",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "96969",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 6,
			"exp_year": 2069,
			"funding": "credit",
			"generated_from": null,
			"last4": "0069",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618097167,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
```
________________________________________________
# REACTION:

	- MESSAGE: 'Your Card Has Since Expired. Please Use Another Card.'
	- BACKEDN: Socket Call To
		Add Transaction Attempt to Backend
		Set Card to EXPIRED
	- ACTIONS: Add Card or Process Payment With Another
		- Process Payment With Another Existing Card (reminder:: use existing payment-intent-obj with another card id)
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION ERROR
# Card Number:      4000000000000127
_________________________________________________
# paymentMethod:    pm_card_chargeDeclinedIncorrectCvc
# token:            tok_chargeDeclinedIncorrectCvc
# Description:     	Charge is declined with an incorrect_cvc code.
_________________________________________________
## From transaction error object:

# code:            incorrect_cvc,
# doc_url:         https://stripe.com/docs/error-codes/incorrect-cvc
# description:	   The card’s security code is incorrect.
# next steps: 	   Check the card’s security code or use a different card.
	__________________________________________________________________
# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1IeqFLKsNNk3qPPUNKBPDFBC",
	"code": "incorrect_cvc",
	"doc_url": "https://stripe.com/docs/error-codes/incorrect-cvc",
	"message": "Your card's security code is incorrect.",
	"param": "cvc",
	"payment_intent": {
		"id": "pi_1IeqFKKsNNk3qPPUAEvxyN5t",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IeqFKKsNNk3qPPUAEvxyN5t_secret_FN0sSvb6H9QfYlCUobn6sblb6",
		"confirmation_method": "automatic",
		"created": 1618097386,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1IeqFLKsNNk3qPPUNKBPDFBC",
			"code": "incorrect_cvc",
			"doc_url": "https://stripe.com/docs/error-codes/incorrect-cvc",
			"message": "Your card's security code is incorrect.",
			"param": "cvc",
			"payment_method": {
				"id": "pm_1IeqEEKsNNk3qPPUyGZ5SaNm",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "44444",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 4,
					"exp_year": 2044,
					"funding": "credit",
					"generated_from": null,
					"last4": "0127",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618097319,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1IeqEEKsNNk3qPPUyGZ5SaNm",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "44444",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 4,
			"exp_year": 2044,
			"funding": "credit",
			"generated_from": null,
			"last4": "0127",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618097319,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
```
________________________________________________
# REACTIONS:

	- MESSAGE: 'Your Transaction Failed Due to Mismatched CSV numbers. Please update Your Card'
	- BACKEND:
		- send resp payload to associate to transaction
	- ACTIONS:
		- User Update Card
			- Update Card Backend
		- Process Payment with another card (No payment-intent-creation necesary, just use another caard obj with exsisting payment-intent)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION ERROR
# Card Number:      4000000000000119
_________________________________________________
# paymentMethod:    pm_card_chargeDeclinedProcessingError
# token:            tok_chargeDeclinedProcessingError
# Description:     	Charge is declined with a processing_error code.
_________________________________________________
## From transaction error object:

#  code:            processing_error
#  doc_url:         https://stripe.com/docs/error-codes/processing-error
#  description:		An error occurred while processing the card.
#  next steps: 		Try again later or with a different payment method.
	__________________________________________________________________
# FRONTEND:

# Transaction attempt response with payment method obj:
```javascript
{
	"type": "card_error",
	"charge": "ch_1IeqIoKsNNk3qPPUWNdo2faA",
	"code": "processing_error",
	"doc_url": "https://stripe.com/docs/error-codes/processing-error",
	"message": "An error occurred while processing your card. Try again in a little bit.",
	"payment_intent": {
		"id": "pi_1IeqIoKsNNk3qPPUDgDiI7ZM",
		"object": "payment_intent",
		"amount": 600,
		"canceled_at": null,
		"cancellation_reason": null,
		"capture_method": "automatic",
		"client_secret": "pi_1IeqIoKsNNk3qPPUDgDiI7ZM_secret_yrqVne2qYmNGgR0IjubYPaini",
		"confirmation_method": "automatic",
		"created": 1618097602,
		"currency": "usd",
		"description": null,
		"last_payment_error": {
			"charge": "ch_1IeqIoKsNNk3qPPUWNdo2faA",
			"code": "processing_error",
			"doc_url": "https://stripe.com/docs/error-codes/processing-error",
			"message": "An error occurred while processing your card. Try again in a little bit.",
			"payment_method": {
				"id": "pm_1IeqHqKsNNk3qPPULecm5StU",
				"object": "payment_method",
				"billing_details": {
					"address": {
						"city": null,
						"country": null,
						"line1": null,
						"line2": null,
						"postal_code": "49449",
						"state": null
					},
					"email": null,
					"name": null,
					"phone": null
				},
				"card": {
					"brand": "visa",
					"checks": {
						"address_line1_check": null,
						"address_postal_code_check": null,
						"cvc_check": null
					},
					"country": "US",
					"exp_month": 1,
					"exp_year": 2029,
					"funding": "credit",
					"generated_from": null,
					"last4": "0119",
					"networks": {
						"available": ["visa"],
						"preferred": null
					},
					"three_d_secure_usage": {
						"supported": true
					},
					"wallet": null
				},
				"created": 1618097543,
				"customer": null,
				"livemode": false,
				"type": "card"
			},
			"type": "card_error"
		},
		"livemode": false,
		"next_action": null,
		"payment_method": null,
		"payment_method_types": ["card"],
		"receipt_email": null,
		"setup_future_usage": null,
		"shipping": null,
		"source": null,
		"status": "requires_payment_method"
	},
	"payment_method": {
		"id": "pm_1IeqHqKsNNk3qPPULecm5StU",
		"object": "payment_method",
		"billing_details": {
			"address": {
				"city": null,
				"country": null,
				"line1": null,
				"line2": null,
				"postal_code": "49449",
				"state": null
			},
			"email": null,
			"name": null,
			"phone": null
		},
		"card": {
			"brand": "visa",
			"checks": {
				"address_line1_check": null,
				"address_postal_code_check": null,
				"cvc_check": null
			},
			"country": "US",
			"exp_month": 1,
			"exp_year": 2029,
			"funding": "credit",
			"generated_from": null,
			"last4": "0119",
			"networks": {
				"available": ["visa"],
				"preferred": null
			},
			"three_d_secure_usage": {
				"supported": true
			},
			"wallet": null
		},
		"created": 1618097543,
		"customer": null,
		"livemode": false,
		"type": "card"
	}
}
```
_____________________________________________
# REACTIONS:

	- MESSAGE: 'Our Payment Processing Partner Has Failed To Execute Your Transaction.'
	- MESSAGE: 'Please Use Another Card'
	- BACKEND:
		- send resp payload to associate to transaction
	- ACTIONS:
		- Process Payment with another card (No payment-intent-creation necesary, just use another caard obj with exsisting payment-intent)

<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

## TRANSACTION ERROR - INCORRECT CARD NUMBER WONT ALLOW USER TO CREATE TOKEN/ PAYMENT METHOD
# Card Number:      4242424242424241
_________________________________________________
# paymentMethod:
# token:
# Description:     	Charge is declined with an incorrect_number code as the card number fails the Luhn check.
_________________________________________________
## From transaction error object:
#  code:
#  doc_url:
#  description:
#  next steps:
	__________________________________________________________________
# FRONTEND:

# PaymentMethodResponseObject:
```javascript
NULL
```
# Transaction attempt response with payment method:
```javascript
NULL
```
# TokenResponseObject:
```javascript
NULL
```

_____________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

## =======================================================ERROR CASES END=======================================================<<<<<<
