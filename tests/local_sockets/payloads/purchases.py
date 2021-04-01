import uuid

"""
Token Docs
	https://stripe.com/docs/api/tokens

Token Are Always Single User
"""

## --------------------------------------------------------------------
## UUID GENERATOR :: https://www.uuidgenerator.net/version4
## --------------------------------------------------------------------

## --------------------------------------------------------------------
## Adds a credit card to DB for the User
# -- Add A Card to User Wallet
CREATE_PAYMENT_METHOD = {
	"action": "create-payment-method",
	"message": {
		"userId": "2f087c03-3fd7-4411-bd18-de87ff1f3485",
		"cogId": "f06b3aaf-19fb-4510-9440-dbf93a49cea4",
		"email": "dansSmellyAss@stealyourbiscuit.com",
		"stripePayment" : {},
		"tokenObj": {}
	}
}

## --------------------------------------------------------------------
## Retrieve Purchase History
LIST_USER_PURCHASES = {
	"action": "get-user-purchases",
	"message": {
		"userId": "2f087c03-3fd7-4411-bd18-de87ff1f3485",
		"cogId": "f06b3aaf-19fb-4510-9440-dbf93a49cea4",
		"email": "dansSmellyAss@stealyourbiscuit.com"
	}
}

## --------------------------------------------------------------------
## Retrieve Credit Cards
LIST_USER_CREDIT_CARDS = {
	"action": "get-user-credit-cards",
	"message": {
		"userId": "2f087c03-3fd7-4411-bd18-de87ff1f3485",
		"cogId": "f06b3aaf-19fb-4510-9440-dbf93a49cea4",
		"email": "dansSmellyAss@stealyourbiscuit.com",
	}
}

## --------------------------------------------------------------------
## Execute Single User Credit Card Purchase
# -- Need To Re-Generate Token
# Doc For
CREDIT_CARD_PURCHASE = {
	"action": "purchase-request",
	"message": {
		# srtripe payment object
		"stripePayment": {
			"id": "pm_1Ib9t2KsNNk3qPPUv9r2FOMf",
			"object": "payment_method",
			"billing_details": {
				"address": {
					"city": None,
					"country": None,
					"line1": None,
					"line2": None,
					"postal_code": "42224",
					"state": None
				},
				"email": None,
				"name": None,
				"phone": None
			},
			"card": {
				"brand": "visa",
				"checks": {
					"address_line1_check": None,
					"address_postal_code_check": None,
					"cvc_check": None
				},
				"country": "US",
				"exp_month": 4,
				"exp_year": 2024,
				"funding": "credit",
				"generated_from": None,
				"last4": "4242",
				"networks": {
					"available": ["visa"],
					"preferred": None
				},
				"three_d_secure_usage": {
					"supported": True
				},
				"wallet": None
			},
			"created": 1617219572,
			"customer": None,
			"livemode": False,
			"type": "card"
		},
		# strip token object
		"tokenObj": {
			"token": {
				"id": "tok_1Ib9t2KsNNk3qPPUth4HKgye",
				"object": "token",
				"card": {
					"id": "card_1Ib9t2KsNNk3qPPUFhIu5Q0J",
					"object": "card",
					"address_city": None,
					"address_country": None,
					"address_line1": None,
					"address_line1_check": None,
					"address_line2": None,
					"address_state": None,
					"address_zip": "42224",
					"address_zip_check": "unchecked",
					"brand": "Visa",
					"country": "US",
					"cvc_check": "unchecked",
					"dynamic_last4": None,
					"exp_month": 4,
					"exp_year": 2024,
					"funding": "credit",
					"last4": "4242",
					"name": None,
					"tokenization_method": None
				},
				"client_ip": "71.192.44.175",
				"created": 1617219572,
				"livemode": False,
				"type": "card",
				"used": False
			}
		},
		"userId": "2f087c03-3fd7-4411-bd18-de87ff1f3485",
		"cogId": "f06b3aaf-19fb-4510-9440-dbf93a49cea4",
		"email": "dansSmellyAss@stealyourbiscuit.com",
		"items": [
			{
				"item_id": "42424545hj5jkh5kjh5k55l29er",
				"price_cents": 42
			},{
				"item_id": "24534lkjlkjljklkj324lkj4lkj",
				"price_cents": 42
			},{
				"item_id": "kjhsfkjppqa4324234kjhkjwh6j8",
				"price_cents": 42
			}
		]
	}
}

GENERATE_PAYMENT_INTENT = {
	"action": "genetate-payment-intent",
	"message": {
		# srtripe payment object
		"stripePayment": {
			"id": "pm_1Ib9t2KsNNk3qPPUv9r2FOMf",
			"object": "payment_method",
			"billing_details": {
				"address": {
					"city": None,
					"country": None,
					"line1": None,
					"line2": None,
					"postal_code": "42224",
					"state": None
				},
				"email": None,
				"name": None,
				"phone": None
			},
			"card": {
				"brand": "visa",
				"checks": {
					"address_line1_check": None,
					"address_postal_code_check": None,
					"cvc_check": None
				},
				"country": "US",
				"exp_month": 4,
				"exp_year": 2024,
				"funding": "credit",
				"generated_from": None,
				"last4": "4242",
				"networks": {
					"available": ["visa"],
					"preferred": None
				},
				"three_d_secure_usage": {
					"supported": True
				},
				"wallet": None
			},
			"created": 1617219572,
			"customer": None,
			"livemode": False,
			"type": "card"
		},
		# strip token object
		"tokenObj": {
			"token": {
				"id": "tok_1Ib9t2KsNNk3qPPUth4HKgye",
				"object": "token",
				"card": {
					"id": "card_1Ib9t2KsNNk3qPPUFhIu5Q0J",
					"object": "card",
					"address_city": None,
					"address_country": None,
					"address_line1": None,
					"address_line1_check": None,
					"address_line2": None,
					"address_state": None,
					"address_zip": "42224",
					"address_zip_check": "unchecked",
					"brand": "Visa",
					"country": "US",
					"cvc_check": "unchecked",
					"dynamic_last4": None,
					"exp_month": 4,
					"exp_year": 2024,
					"funding": "credit",
					"last4": "4242",
					"name": None,
					"tokenization_method": None
				},
				"client_ip": "71.192.44.175",
				"created": 1617219572,
				"livemode": False,
				"type": "card",
				"used": False
			}
		},
		"userId": "2f087c03-3fd7-4411-bd18-de87ff1f3485",
		"cogId": "f06b3aaf-19fb-4510-9440-dbf93a49cea4",
		"email": "dansSmellyAss@stealyourbiscuit.com",
		"items": [{
			"item_id": "42424545hj5jkh5kjh5k55l29er",
			"price_cents": 42
		}, {
			"item_id": "24534lkjlkjljklkj324lkj4lkj",
			"price_cents": 42
		}, {
			"item_id": "kjhsfkjppqa4324234kjhkjwh6j8",
			"price_cents": 42
		}]
	}
}