````javascript
PAYMENT SPEC
PARTIES
web-client
sls api layer
stripe cloud
Stripe test credit card cannot be random numbers
there s list of them
4242 4242 4242 4242
4111 1111 1111 1111
WORKS
credit cards
use case

    A- user has credit card to use , wants to enter it into couchtour.tv web-client
    ```
    Verifies card with card element
    sends card element to stripe with createPaymentMethod
    sends entire response from createPaymentMethod to sls-api
    evaluate sls-api for success or failure
    ```
        1. web-client renders a form to take the info

        2. use enters the info

        3. info is verified - credit cards have a lorenze verification - exp date in future

        4. web-client submits card data to stripe.js (react-stripe-js)

        5. stripe.js sends data to stripe cloud

        6. stripe cloud saves the card info and user info submitted and returns a CARD_TOKEN = card_a4f923gf9u3fg

        7. web-client sends card token with user info to sls-api

        // send entire payload to sls api
        8. sls-api stores the card token info in a DB connected to userID
            credit card records are never delete, a deleted record is made by switching 'active' to false
            for credit card states we use 'status' ,
                states are :live, :expired, :cancelled, :error, :fail_checks

        card_id     card_token       expmont  expyear   userid              createdate      card        lastFour  active  status
        UUID        BUGGS_BUNNY         12      2025   user_dynamodb_ider_id   Date.now()     VISA        5678      true     live

        9. sls-api return success { uuid, lastfFour }, thats it .

    B- user wants to make a purchase

        1. user chooses pulls up shopping cart on web-client

        2. user choose purchase items

        3. web-client request from sls-api , current payment methods aka current status: live cards

        4. user choose form of payment from their current cards

        5. user submits shopping cart items and form of payment card (card UUID) to sls-api in form of a 'purchase request'
            { "action": "purchase_request", "message": { items: [ item_id: uuid, price_cents: 2 ] }}

        6. sls-api double checks that the user owns the form of payment and that form of payment is live and active
            - card not valid err fail

        7. sls-api double checks the prices on all the items and confirms the sale
            sls-api , pulls up items by item_id and compares the prices
            - cart items price unavailabe err fail

            priceValueConfirm(**kwargs) { return true}

        8. sls-api takes cart total + stripe token and sends to sls-api-stripe
            cart items are
                livestream for 20$
                meet and greet for 50$
                poster for 100$
                subtotal of items = 170$
                streaming cost (10%)  = 17$
                shipping for poster  =  5$
                total  = 192$
             { amount: 19200, source: BUGSS_BUNNY }
            Dans card id + web-client(stripe.js publickey) = BUGSS_BUNNY
            sls-api(stripe-api key) + BUGSS BUNNY = dans card
            stripe database record example
                web public key    - api private key - card number - cord token
                .env stripe publice    sls env pkey      12345678     BUGGS_BUNNY
            amount + sls-api stripe_key + BUGSS_BUNNY = post charge to Dans card on stripe cloud
            CHARGE SUCCEEDED



        9. generate a purchase transaction record in purchase transaction db table
            card_id , createdAt, user_id, total, transactionId, active, status, stripe_response

        10. purchase complete/fail, send action back to web-client

        11.  webclient receives action and sends user to either error component or success screen

    C- users wants to view purchases
    ```
    payload = {
        action: "get-user-purchases",
        message: {
            userId:
            userEmail:
        }}
    ```

    D- user wants to views credit cards
    ```
    payload = {
        action: "get-user-credit-card",
        message: {
            userId:
            userEmail:
        }}
    ```
````
#### List of payloads sent by web client:
```javascript
    /*
        paymentObj -- cardId, billing detail, email, name

        //A6 stripe cloud saves the card info and user info submitted and returns a
        ///////CARD_TOKEN = card_a4f923gf9u3fg

        "id": "pm_1IWWRr2eZvKYlo2C5L5hFZFo",
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
                "available": [ "visa" ],
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
    */

    //A6, A7
    payload = JSON.stringify({
        action: "create-payment-method",
        message: {
          userId: userId,
          cogId: cogId,
          stripePayment : paymentMethod
      }
    })

    // B5
    payload = JSON.stringify({
        action: "purchase-request",
        message: {
            stripePayment: paymentMethod,
            userId: userId,
            cogId: cogId,
            items: [ {item_id: uuid, price_cents: 2}, .. ]
        }
    })

    // C
    payload = {
        action: "get-user-credit-card", // D, B3, B4
        message: {
            userId: userId,
            cogId: cogId,
        }
    }

    // D
    payload = {
        action: "get-user-purchases",
        message: {
            userId: userId,
            cogId: cogId,
        }}
```

#### List of socket actions:
```javascript

       (socketRespAction === "create-payment-method-resp-success") // A6

       (socketRespAction === "create-payment-method-resp-error") // A6

       (socketRespAction === "get-payment-intent") { // A5
        setPaymentIntent(socketRespMessage)}

       (socketRespAction === "get-user-credit-card-resp-success") { // b3, b4
        setCardOptions(socketRespMessage)}

       (socketRespAction === "get-user-credit-card-resp-failure") //  b3 b4

       (socketRespAction === "purchase-request-resp-success") {  //  b5
        setPurchaseSuccess("SUCCESS")}

       (socketRespAction === "purchase-request-resp-failure") { // b5
        setPurchaseSuccess("FAILURE")}

       (socketRespAction === "view-purchases-resp-success") { // C
         setUserPurchases(socketRespMessage)}

       (socketRespAction === "view-purchases-resp-failure") { // C
        setPurchaseSuccess("FAILURE")}

```