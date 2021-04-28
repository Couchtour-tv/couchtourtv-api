>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
#### >>>>> Testing for specific responses and errors >>>>>
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# :::::(https://stripe.com/docs/testing#cards-responses):::::

# The following test cards can be used to create payments that produce specific responses—useful for testing different scenarios and error codes. Verification checks only run when the required information is provided (e.g., for cvc_check to be set to fail, a CVC code must be provided).

## ====================================================================================================================>>>>>>
## !!!!!!!! SUCCESS CASES !!!!!!!!!
		
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCESS W/ CAVEATS
# Card Number:      4000000000000077	
	_________________________
# paymentMethod:    pm_card_bypassPending
# token:            tok_bypassPending
# Description:      Charge succeeds and funds will be added directly to your available balance (bypassing your pending balance).
	_________________________
# FRONTEND: 

# TokenResponseObject:
```javascript
{
	"id": "tok_1IeosgKsNNk3qPPUthLcIPM4",
	"object": "token",
	"card": {
		"id": "card_1IeosgKsNNk3qPPUH9zxS19C",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "11111",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 7,
		"exp_year": 2071,
		"funding": "credit",
		"last4": "0077",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618092138,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token: 
```javascript

```
	_________________________
# FRONTEND REACTION: 
	_________________________
# BACKEND REACTION: 
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
## TRANSACTION SUCCESS W/ CAVEATS
# Card Number:      4000003720000278
	_________________________
# paymentMethod:    pm_card_bypassPendingInternational
# token:            tok_bypassPendingInternational
# Description:      Charge succeeds and funds will be added directly to your available balance (bypassing your pending balance).
	_________________________    

# TokenResponseObject:
```javascript
{
	"id": "tok_1Iep4ZKsNNk3qPPUThiKEKIg",
	"object": "token",
	"card": {
		"id": "card_1Iep4ZKsNNk3qPPUwoM6C7Gx",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "83838",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "IE",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 7,
		"exp_year": 2028,
		"funding": "credit",
		"last4": "0278",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618092875,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token: 
```javascript

```

# FRONTEND: 

# BACKEND: 
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

# TokenResponseObject:
```javascript
{
	"id": "tok_1IepITKsNNk3qPPUVpZH3YCZ",
	"object": "token",
	"card": {
		"id": "card_1IepITKsNNk3qPPUgQTME2KU",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "33333",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 9,
		"exp_year": 2033,
		"funding": "credit",
		"last4": "0093",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618093737,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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

# TokenResponseObject:
```javascript
{
	"id": "tok_1IepPFKsNNk3qPPUL5NG41yO",
	"object": "token",
	"card": {
		"id": "card_1IepPFKsNNk3qPPUgxyjIIpN",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "33333",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 10,
		"exp_year": 2055,
		"funding": "credit",
		"last4": "0010",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618094157,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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


# TokenResponseObject:
```javascript
{
	"id": "tok_1IepVNKsNNk3qPPUbfdpuEix",
	"object": "token",
	"card": {
		"id": "card_1IepVNKsNNk3qPPULK51yW4n",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "82882",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 2,
		"exp_year": 2028,
		"funding": "credit",
		"last4": "0028",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618094537,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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

# TokenResponseObject:
```javascript
{
	"id": "tok_1IepYtKsNNk3qPPUWFqVrKaU",
	"object": "token",
	"card": {
		"id": "card_1IepYtKsNNk3qPPU3aUopKpM",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "55555",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 3,
		"exp_year": 2063,
		"funding": "credit",
		"last4": "0036",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618094755,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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

# TokenResponseObject:
```javascript
{
	"id": "tok_1IepcNKsNNk3qPPUi33xqeJ5",
	"object": "token",
	"card": {
		"id": "card_1IepcNKsNNk3qPPUvyQmXboY",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "44444",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 4,
		"exp_year": 2044,
		"funding": "credit",
		"last4": "0044",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618094971,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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

# TokenResponseObject:
```javascript
{
	"id": "tok_1IepfnKsNNk3qPPUdnUqemIL",
	"object": "token",
	"card": {
		"id": "card_1IepfmKsNNk3qPPU0IkbuLOr",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "66666",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 5,
		"exp_year": 2026,
		"funding": "credit",
		"last4": "5126",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618095183,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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

# TokenResponseObject:
```javascript
{
	"id": "tok_1IepoIKsNNk3qPPUvlPrl2om",
	"object": "token",
	"card": {
		"id": "card_1IepoIKsNNk3qPPUX9m2UQJt",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "53453",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 9,
		"exp_year": 2023,
		"funding": "credit",
		"last4": "9235",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618095710,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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

# TokenResponseObject:
```javascript
{
	"id": "tok_1IeqLuKsNNk3qPPUw70yu0AM",
	"object": "token",
	"card": {
		"id": "card_1IeqLuKsNNk3qPPUMlu4ag1V",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "34234",
		"address_zip_check": "unchecked",
		"brand": "MasterCard",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 2,
		"exp_year": 2042,
		"funding": "credit",
		"last4": "4220",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618097794,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<




## =============================================SUCCESS CASES END======================================================<<<<<<


## ====================================================================================================================>>>>>>
## !!!!!!! ERROR CASES !!!!!!!!!

>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
# TRANSACTION ERROR
# Card Number:      4000000000000002
	__________________________________________________________________
# paymentMethod:    pm_card_chargeDeclined
# token:            tok_chargeDeclined
# Description:      Charge is declined with a card_declined code.
	__________________________________________________________________
## From transaction error object: 

#  code:  					card_declined
#  decline_code:    generic_decline
#  doc_url:         https://stripe.com/docs/error-codes/card-declined
#  description:			The card has been declined for an unknown reason.
#  next steps: 			The customer needs to contact their card issuer for more information.
	__________________________________________________________________

# FRONTEND: 

# TokenResponseObject: 
```javascript
{
	"id": "tok_1Iep9AKsNNk3qPPU4EGVjefy",
	"object": "token",
	"card": {
		"id": "card_1Iep9AKsNNk3qPPUB8akHuq9",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "22222",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 2,
		"exp_year": 2022,
		"funding": "credit",
		"last4": "0002",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618093160,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token: 
```javascript

```

	_________________________
# FRONTEND REACTION: 

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
#  description:			The card’s security code is incorrect. 
#  next steps: 		  Check the card’s security code or use a different card.
	__________________________________________________________________

# FRONTEND:

# TokenResponseObject:
```javascript
{
	"id": "tok_1IepidKsNNk3qPPUPO4lHrXT",
	"object": "token",
	"card": {
		"id": "card_1IepidKsNNk3qPPUXAgCdvFR",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "11111",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 1,
		"exp_year": 2031,
		"funding": "credit",
		"last4": "0101",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618095359,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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

#  code:  					card_declined
#  decline_code:    generic_decline
#  doc_url:         https://stripe.com/docs/error-codes/card-declined
#  description:			The card has been declined for an unknown reason.
#  next steps: 			The customer needs to contact their card issuer for more information.
	__________________________________________________________________
# FRONTEND:

# TokenResponseObject:
```javascript
{
	"id": "tok_1IeplbKsNNk3qPPUVFBpwdHW",
	"object": "token",
	"card": {
		"id": "card_1IeplbKsNNk3qPPUzqhv2L13",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "43334",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 4,
		"exp_year": 2034,
		"funding": "credit",
		"last4": "0341",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618095543,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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

#  code:  					card_declined
#  decline_code:    generic_decline
#  doc_url:         https://stripe.com/docs/error-codes/card-declined
#  description:			The card has been declined for an unknown reason.
#  next steps: 			The customer needs to contact their card issuer for more information.		
	__________________________________________________________________
# FRONTEND:

# TokenResponseObject:
```javascript
{
	"id": "tok_1IeprDKsNNk3qPPUos52fhfM",
	"object": "token",
	"card": {
		"id": "card_1IeprDKsNNk3qPPUxAr7jids",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "45555",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 5,
		"exp_year": 2054,
		"funding": "credit",
		"last4": "4954",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618095891,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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
#  code:    				card_declined 
#  decline_code: 		fraudulent,
#  doc_url:         https://stripe.com/docs/error-codes/card-declined
#  description:			The payment has been declined as Stripe suspects it is fraudulent.
#  next steps: 			Do not report more detailed information to your customer. Instead, present as you would the generic_decline described below. (i.e. The customer needs to contact their card issuer for more information.)


	__________________________________________________________________
# FRONTEND:

# TokenResponseObject:
```javascript
{
	"id": "tok_1IepttKsNNk3qPPUand2f5fG",
	"object": "token",
	"card": {
		"id": "card_1IepttKsNNk3qPPUYdcEU6p5",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "43434",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 4,
		"exp_year": 2034,
		"funding": "credit",
		"last4": "0019",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618096057,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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
#	 decline_code:    insufficient_funds,
#  doc_url:         https://stripe.com/docs/error-codes/card-declined
#  description:			The card has insufficient funds to complete the purchase.
#  next steps: 			The customer should use an alternative payment method.
	__________________________________________________________________
# FRONTEND:

# TokenResponseObject:
```javascript
{
	"id": "tok_1IepyEKsNNk3qPPU2qYeqv14",
	"object": "token",
	"card": {
		"id": "card_1IepyDKsNNk3qPPUgokjHTJF",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "34234",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 3,
		"exp_year": 2024,
		"funding": "credit",
		"last4": "9995",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618096326,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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

#	 code:       			card_declined,
#	 decline_code: 		lost_card,
#	 doc_url: 				https://stripe.com/docs/error-codes/card-declined     
#  description:			The payment has been declined because the card is reported lost.
#  next steps: 			The specific reason for the decline should not be reported to the customer. Instead, it needs to be presented as a generic decline.
	__________________________________________________________________
# FRONTEND:

# TokenResponseObject:
```javascript
{
	"id": "tok_1Ieq1dKsNNk3qPPU78oU1oMD",
	"object": "token",
	"card": {
		"id": "card_1Ieq1dKsNNk3qPPUdA1EBf8F",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "44444",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 4,
		"exp_year": 2044,
		"funding": "credit",
		"last4": "9987",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618096537,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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
#  code:    				card_declined,
#  decline_code: 		stolen_card,
#  doc_url: 				https://stripe.com/docs/error-codes/card-declined   
#  description:			The payment has been declined because the card is reported stolen.
#  next steps: 			The specific reason for the decline should not be reported to the customer. Instead, it needs to be presented as a generic decline.
	__________________________________________________________________
# FRONTEND:

# TokenResponseObject:
```javascript
{
	"id": "tok_1Ieq8AKsNNk3qPPUcJuVNlb7",
	"object": "token",
	"card": {
		"id": "card_1Ieq8AKsNNk3qPPUjd49JdPA",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "54545",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 5,
		"exp_year": 2045,
		"funding": "credit",
		"last4": "9979",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618096942,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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
#	 code: 						expired_card,
#  doc_url:         https://stripe.com/docs/error-codes/expired-card
#  description:			The card has expired.
#  next steps: 			Check the expiration date or use a different card.
	__________________________________________________________________
# FRONTEND:

# TokenResponseObject:
```javascript
{
	"id": "tok_1IeqBmKsNNk3qPPULe3iEBIr",
	"object": "token",
	"card": {
		"id": "card_1IeqBmKsNNk3qPPUAROlIjFs",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "96969",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 6,
		"exp_year": 2069,
		"funding": "credit",
		"last4": "0069",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618097166,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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
#  code:            incorrect_cvc,
#  doc_url:         https://stripe.com/docs/error-codes/incorrect-cvc      
#  description:			The card’s security code is incorrect. 
#  next steps: 			Check the card’s security code or use a different card.
	__________________________________________________________________
# FRONTEND:

# TokenResponseObject:
```javascript
{
	"id": "tok_1IeqEEKsNNk3qPPUvYTiKjpA",
	"object": "token",
	"card": {
		"id": "card_1IeqEEKsNNk3qPPUboF81UO7",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "44444",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 4,
		"exp_year": 2044,
		"funding": "credit",
		"last4": "0127",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618097318,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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
#  description:			An error occurred while processing the card. 
#  next steps: 			Try again later or with a different payment method.
	__________________________________________________________________
# FRONTEND:

# TokenResponseObject:
```javascript
{
	"id": "tok_1IeqHqKsNNk3qPPUdkaJABNf",
	"object": "token",
	"card": {
		"id": "card_1IeqHqKsNNk3qPPUugvsaMza",
		"object": "card",
		"address_city": null,
		"address_country": null,
		"address_line1": null,
		"address_line1_check": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": "49449",
		"address_zip_check": "unchecked",
		"brand": "Visa",
		"country": "US",
		"cvc_check": "unchecked",
		"dynamic_last4": null,
		"exp_month": 1,
		"exp_year": 2029,
		"funding": "credit",
		"last4": "0119",
		"name": null,
		"tokenization_method": null
	},
	"client_ip": "71.192.44.175",
	"created": 1618097542,
	"livemode": false,
	"type": "card",
	"used": false
}
```
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
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
# Transaction attempt response with Token:

________________________________________________
# FRONTEND REACTION:
________________________________________________
# BACKEND REACTION:
	<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

## =======================================================ERROR CASES END=======================================================<<<<<<





















