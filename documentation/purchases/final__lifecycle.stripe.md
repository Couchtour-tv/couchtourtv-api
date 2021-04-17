## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## ~~~~~~~~~~~~~~~~~~~~~~~~~~PAYLOADS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


========================================================================
# =========================== SUCCESS PAYLOADS =========================
========================================================================

```javascript
const successPayload = JSON.stringify({
  action: "payment-transaction-status-update",
  message: {
    stripeConfirmationTransactionPayload: confirmCardPayment,
    userId: userId,
    cogId: localCogId,
    email: userEmail,
    cardId: chosenCard.cardId,
    transactionId: socketRespData.transactionID,
    intentId: socketRespData.intentId,
    statusResp: "SUCCESS", //stripe status
  },
})
```

========================================================================
# =========================== ERRORS ===================================
========================================================================

=================================================
# card_declined, decline_code: generic_decline
=================================================
# Card Number:      4000000000000002
# paymentMethod:    pm_card_chargeDeclined
# token:            tok_chargeDeclined
_________________________________________________
# Card Number:      4000000000000341
# paymentMethod:    pm_card_chargeCustomerFail
# token:            tok_chargeCustomerFail
_________________________________________________
# Card Number:      4000000000004954
# paymentMethod:    pm_card_riskLevelHighest
# token:            tok_riskLevelHighest
_________________________________________________




- MESSAGE: 'Your Card Was Declined For An Unknown Reason, Please Contact Your Card Issuer For More Information'
- MESSAGE: 'We Will Be DeActiviating This Card Until It Your Issuer Resolves This. Please Add or Choose Anohther Card To Process This Payment'
	- BACKEND: Send payload to Deactivate Card
	- ACTIONS: Add Card or Process Payment With Another
		- ADD CARD socket call
		or
		- Process Payment With Existing Card

  # __________________________________________

```javascript
const successPayload = JSON.stringify({
  // action: "payment-transaction-status-update",
    action: "stripe-process-error-card-deactivate",
  message: {
    stripeConfirmationTransactionPayload: confirmCardPayment,
    userId: userId,
    cogId: localCogId,
    email: userEmail,
    cardId: chosenCard.cardId,
    transactionId: socketRespData.transactionID,
    intentId: socketRespData.intentId,
    statusResp: "ERROR", //stripe status
    cardAction: "DEACTIVATE",
    errorCode: codeType
  }
})
```
=============================================================================================


=================================================
# incorrect_cvc
=================================================
# Card Number:      4000000000000101
# paymentMethod:    pm_card_cvcCheckFail
# token:            tok_cvcCheckFail
_________________________________________________
# Card Number:      4000000000000127
# paymentMethod:    pm_card_chargeDeclinedIncorrectCvc
# token:            tok_chargeDeclinedIncorrectCvc
_________________________________________________
# todo enable UI to update card.
# after this error pupulate message, button that asks to update card.
# send stripe-process-error-incorrect-cvc then UI update then wallet-update-user-credit-card

    - MESSAGE: 'Your Transaction Failed Due to Mismatched CSV numbers. Please update Your Card'
    - BACKEND:
    - send resp payload to associate to transaction
    - ACTIONS:
    - User Update Card
    - Update Card Backend
    - Process Payment with another card (No payment-intent-creation necesary, just use another caard obj with exsisting payment-intent)

  # __________________________________________
```javascript
const updatePayload = JSON.stringify({
  action: "wallet-update-user-credit-card",
  message: {
    stripeCardPayment: paymentMethod,
    userId: userId,
    cardId: cardId,
    email: userEmail,
    cogId: localCogId,
  },
})
```
# __________________________________________
```javascript
const successPayload = JSON.stringify({
  // action: "payment-transaction-status-update",
    action: "stripe-process-error-incorrect-cvc",
  message: {
    stripeConfirmationTransactionPayload: confirmCardPayment,
    userId: userId,
    cogId: localCogId,
    email: userEmail,
    cardId: chosenCard.cardId,
    transactionId: socketRespData.transactionID,
    intentId: socketRespData.intentId,
    statusResp: "ERROR", //stripe status
    errorCode: errorCode
  },
})
```
=============================================================================================


=================================================
# card_declined, decline_code: fraudulent
=================================================
# Card Number:      4100000000000019
# paymentMethod:    pm_card_chargeDeclinedFraudulent
# token:            tok_chargeDeclinedFraudulent
_________________________________________________
	- MESSAGE: 'Your Card Was Consider Potentially Fraudulent By Our Card Processor's System. They Have Blocked Your Transaction'
	- MESSAGE: 'We Will Be DeActiviating This Card Until It Your Issuer Resolves This. Please Add or Choose Anohther Card To Process This Payment'
	- BACKEND: Send payload to Deactivate Card
	- ACTIONS: Add Card or Process Payment With Another
		- ADD CARD socket call
		or
		- Process Payment With Existing Card (reminder:: use existing payment-intent-obj with another card id)

# __________________________________________


```javascript
const successPayload = JSON.stringify({
  // action: "payment-transaction-status-update",
   action: "stripe-process-error-card-deactivate",
  message: {
    stripeConfirmationTransactionPayload: confirmCardPayment,
    userId: userId,
    cogId: localCogId,
    email: userEmail,
    cardId: chosenCard.cardId,
    transactionId: socketRespData.transactionID,
    intentId: socketRespData.intentId,
    statusResp: "ERROR", //stripe status
    cardAction: "DEACTIVATE",
    errorCode: errorCode

  },
})
```
=============================================================================================



=================================================
# card_declined, decline_code: insufficient_funds
=================================================
# Card Number:      4000000000009995
# paymentMethod:    pm_card_chargeDeclinedInsufficientFunds
# token:            tok_chargeDeclinedInsufficientFunds
_________________________________________________
	- MESSAGE: 'Your Transaction Has Failed Due To Insuffient Funds. PLease User An Alternate Card'
	- BACKEDN: Socket Call To Add Transaction Attempt to BEnd
	- ACTIONS: Add Card or Process Payment With Another
	- Process Payment With Another Existing Card (reminder:: use existing payment-intent-obj with another card id)

# __________________________________________
todo send this payload to backend on success. make sure payment intent is in state and be ready to process card again

```javascript
const successPayload = JSON.stringify({
  action: "stripe-process-error-insufficient-funds",
   // action: "handle-payment-error",
  message: {
    stripeConfirmationTransactionPayload: confirmCardPayment,
    userId: userId,
    cogId: localCogId,
    email: userEmail,
    cardId: chosenCard.cardId,
    transactionId: socketRespData.transactionID,
    intentId: socketRespData.intentId,
    statusResp: "ERROR", //stripe status,
    errorCode: errorCode,

  },
})
```
=============================================================================================



=================================================
# card_declined, decline_code: lost_card
=================================================
# Card Number:      4000000000009987
# paymentMethod:    pm_card_visa_chargeDeclinedLostCard
# token:            tok_visa_chargeDeclinedLostCard
_________________________________________________
	- MESSAGE: 'Our Payment Processing Partner Is Not Able To Execute Your Transaction Attempt. Please Use Another Card'
	- BACKEDN: Socket Call To Add Transaction Attempt to Backend
	- ACTIONS: Add Card or Process Payment With Another
	- Process Payment With Another Existing Card (reminder:: use existing payment-intent-obj with another card id)

# __________________________________________

```javascript
const successPayload = JSON.stringify({
  action: "stripe-process-error-card-deactivate",
   // action: "handle-payment-error",
  message: {
    stripeConfirmationTransactionPayload: confirmCardPayment,
    userId: userId,
    cogId: localCogId,
    email: userEmail,
    cardId: chosenCard.cardId,
    transactionId: socketRespData.transactionID,
    intentId: socketRespData.intentId,
    statusResp: "ERROR", //stripe status
    cardAction: "DEACTIVATE",
    errorCode: errorCode
  },
})
```
=============================================================================================



=================================================
# card_declined, decline_code: stolen_card
=================================================
# Card Number:      4000000000009979
# paymentMethod:    pm_card_visa_chargeDeclinedStolenCard
# token:            tok_visa_chargeDeclinedStolenCard
_________________________________________________
	- MESSAGE: 'Our Payment Processing Partner Is Not Able To Execute Your Transaction Attempt. Please Use Another Card'
	- BACKEND: Socket Call To Add Transaction Attempt to Backend
	- ACTIONS: Add Card or Process Payment With Another
	- Process Payment With Another Existing Card (reminder:: use existing payment-intent-obj with another card id)

# __________________________________________

```javascript
const successPayload = JSON.stringify({
  action: "stripe-process-error-card-deactivate",
   // action: "handle-payment-error",
  message: {
    stripeConfirmationTransactionPayload: confirmCardPayment,
    userId: userId,
    cogId: localCogId,
    email: userEmail,
    cardId: chosenCard.cardId,
    transactionId: socketRespData.transactionID,
    intentId: socketRespData.intentId,
    statusResp: "ERROR", //stripe status
    cardAction: "DEACTIVATE",
    errorCode: errorCode
  },
})
```
=============================================================================================


=================================================
# expired_card
=================================================
# Card Number:      4000000000000069
# paymentMethod:    pm_card_chargeDeclinedExpiredCard
# token:            tok_chargeDeclinedExpiredCard
_________________________________________________
	- MESSAGE: 'Your Card Has Since Expired. Please Use Another Card.'
	- BACKEDN: Socket Call To
		Add Transaction Attempt to Backend
		Set Card to EXPIRED
	- ACTIONS: Add Card or Process Payment With Another
	- Process Payment With Another Existing Card (reminder:: use existing payment-intent-obj with another card id)

# __________________________________________

```javascript
const successPayload = JSON.stringify({
  action: "stripe-process-error-card-expired",
   // action: "handle-payment-error",
  message: {
    stripeConfirmationTransactionPayload: confirmCardPayment,
    userId: userId,
    cogId: localCogId,
    email: userEmail,
    cardId: chosenCard.cardId,
    transactionId: socketRespData.transactionID,
    intentId: socketRespData.intentId,
    statusResp: "ERROR", //stripe status
    cardAction: "EXPIRE",
    errorCode: errorCode
  },
})
```
=============================================================================================


=================================================
# processing_error
=================================================
# Card Number:      4000000000000119
# paymentMethod:    pm_card_chargeDeclinedProcessingError
# token:            tok_chargeDeclinedProcessingError
_________________________________________________
	- MESSAGE: 'Our Payment Processing Partner Has Failed To Execute Your Transaction.'
	- MESSAGE: 'Please Use Another Card'
	- BACKEND:
		- send resp payload to associate to transaction
	- ACTIONS:
		- Process Payment with another card (No payment-intent-creation necesary, just use another caard obj with exsisting payment-intent)

# __________________________________________
todo: associate payment error on backend

```javascript
const successPayload = JSON.stringify({
  action: "stripe-process-error-payment-failure",
   // action: "handle-payment-error",
  message: {
    stripeConfirmationTransactionPayload: confirmCardPayment,
    userId: userId,
    cogId: localCogId,
    email: userEmail,
    cardId: chosenCard.cardId,
    transactionId: socketRespData.transactionID,
    intentId: socketRespData.intentId,
    statusResp: "ERROR", //stripe status
    errorCode: errorCode
  },
})
```

=============================================================================================

# ============================ STRIPE ERROR ACTIONS AND RESPONSES ===============================

# stripe-process-success-transaction-update
    stripe-process-success-transaction-update-resp-successs
    stripe-process-success-transaction-update-resp-error

# stripe-process-error-card-deactivate
    stripe-process-error-card-deactivate-resp-success
    stripe-process-error-card-deactivate-resp-error

# stripe-process-error-incorrect-cvc
    stripe-process-error-incorrect-cvc-resp-success
    stripe-process-error-incorrect-cvc-resp-error

# stripe-process-error-card-deactivate
    stripe-process-error-card-deactivate-resp-success
    stripe-process-error-card-deactivate-resp-error

# stripe-process-error-insufficient-funds
    stripe-process-error-insufficient-funds-resp-success
    stripe-process-error-insufficient-funds-resp-error

# stripe-process-error-card-deactivate
    stripe-process-error-card-deactivate-resp-success
    stripe-process-error-card-deactivate-resp-error

# stripe-process-error-card-deactivate
    stripe-process-error-card-deactivate-resp-success
    stripe-process-error-card-deactivate-resp-error

# stripe-process-error-card-expired
    stripe-process-error-card-expired-resp-success
    stripe-process-error-card-expired-resp-error

# stripe-process-error-payment-failure
    stripe-process-error-payment-failure-resp-success
    stripe-process-error-payment-failure-resp-error




# ============================ STRIPE ACTIONS AND RESPONSES ===============================

# wallet-add-user-credit-card
    wallet-add-user-credit-card-resp-success
    wallet-add-user-credit-card-resp-error

# wallet-update-user-credit-card
    wallet-update-user-credit-card-resp-success
    wallet-update-user-credit-card-resp-error

# wallet-get-user-credit-cards
    wallet-get-user-credit-cards-resp-success
    wallet-get-user-credit-cards-resp-error

# need to create stripe user, add stripeUserId to userObj
#   - handle error and resp for socket call

# get-user-id [[ --DONE-- ]]
    get-user-id-resp-success
    get-user-id-resp-error

# create-purchase-intent
    create-purchase-intent-resp-success
    create-purchase-intent-resp-error

# ____________________________________________________________________
## not currently used actions:
        view-purchases-resp-success
        view-purchases-resp-error
        get-payment-intent


# not currently used actions responses:
        chose-existing-payment-method-resp-success
        chose-existing-payment-method-resp-error

        purchase-request-resp-success
        purchase-request-resp-error

        create-payment-method-resp-success
        create-payment-method-resp-error

        get-user-credit-cards-resp-success
        get-user-credit-cards-resp-error

//TODO
when adding a card check to see if card exists
// action: verify-card-existence
// how will we know to reactivate card
do we want to enable a user to reactivate a card again

        const payload = JSON.stringify({
          action: "wallet-add-user-credit-card",
          message: {
            fullName:
            last4:
            security:
            expMonth:
            expYear:
            userId: userId,
            email: userEmail,
            cogId: localCogId,
          },
        })



        // # PaymentMethod Object:

{
  "id": "pm_1IWWRr2eZvKYlo2C5L5hFZFo", //A6 stripe cloud saves the card info and user info submitted and returns a
                                       ///////CARD_TOKEN = card_a4f923gf9u3fg
  "object": "payment_method",
  "billing_details": {
    "address": {
      "city": "Abbotsford",
      "country": "CA",
      "line1": "32497 South Fraser Way",
      "line2": null,
      "postal_code": "V2T 1X4",
      "state": "British Columbia"
    },
    "email": "jenny@example.com",
    "name": null,
    "phone": "+15555555555"
  },

  //B3. 3. web-client request from sls-api , current payment methods aka current
  //status: live cards
  "card": {
    "brand": "visa",
    "checks": {
      "address_line1_check": null,
      "address_postal_code_check": null,
      "cvc_check": "pass"    //A3
    },
    "country": "US",
    "exp_month": 8,
    "exp_year": 2022,
    "fingerprint": "Xt5EWLLDS7FJjR1c",
    "funding": "credit",
    "generated_from": null,
    "last4": "4242",
    "networks": {
      "available": [
        "visa"
      ],
      "preferred": null
    },
    "three_d_secure_usage": {
      "supported": true
    },
    "wallet": null
  },
  "created": 123456789,
  "customer": null,
  "livemode": false,
  "metadata": {
    "order_id": "123456789"
  },
  "type": "card"
}