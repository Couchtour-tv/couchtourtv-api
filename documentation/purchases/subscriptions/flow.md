# Product/Subscription
​
​
### Subscription Payments with -- STRIPE --
​
* [Fixed Price Subscripts](https://stripe.com/docs/billing/subscriptions/fixed-price)

* [Update Payment Method](https://stripe.com/docs/api/payment_methods/update)


​
​
##### -- PARTRON WORKFLOW --
​
* patron clicks on and lands on subscriptions [[ PUBLICLY AVAILABLE PAGE]]
​
	* action: **get-product-subscriptions**
		* sls queries [stripe-products](https://stripe.com/docs/billing/subscriptions/examples)
		* return of objs
			* objs sorted by key of metadata for product
​
	* UI parses response and puts in web page
​
* patron chooses subscription of choice
​
	* sample product IDS
		* Benefactor Plan:     price_1IiMljKsNNk3qPPUwBtO8VfL
		* Pro Plan:            price_1IiMlKKsNNk3qPPU3P6p9Lij
		* Standard Plan:       price_1IiMl7KsNNk3qPPUF6to2i20
		* Student Plan:        price_1IiMkOKsNNk3qPPU19jhQHhb
​
	* action: **create-user-subscription**
​
		* (NON-COUCHTOUR GENERATED PRODUCTS -- THEY LIVE IN STRIPE EXCLUSIVE. FOR NOW.)
​
		* sls creates subscription [stripe-create-subscription](https://stripe.com/docs/api/subscriptions/create)
​
			* set **default_payment_method** on method call
​
			* TO Consider: [NOTEABLES]((https://stripe.com/docs/api/subscriptions/create)
​
				* **billing_cycle_anchor** -- charge on the first of the next month
				* **days_until_due**
				* **collection_method** = send_invoice
​
​
		* params (grab from app state)
			* customer id
			* paymentMethodId
			* create subscription
​
		* on success update transactions table
​
			* type='subscription'
			* subscription_id = payload.resp.id (see docs above)
​
* try/catch responses:
​
	* message: **create-user-subscription-resp-success**
​
	* message: **create-user-subscription-resp-error**
​
​
​
​
​
​
​
​
##### -- CT-USER WORKFLOW --
​
* [ct-admin] user adds metadata to "products" in stripe ui
​
​
​
##### -- PAYLOADS --
​
```javascript
​
const getProductSubscriptionsPayload = {
	action: "get-product-subscriptions"
}
​
if (respAction === "get-product-subscriptions-resp-success"){
	setSubscriptions(response.data.subscriptions)
} else if ( respAction === "get-product-subscriptions-resp-error"){
	setErrorMessage("Trouble loading subscriptions")
}
​
​
​
const createUserSubscriptionPayload = {
	action: "create-user-subscription"
	message: {
		customerId: customerId,
    paymentMethodId: paymentMethodId,
    priceId: priceId,
		userId: userId,
  	cogId: localCogId,
    email: userEmail,
	}
}
​
​
```
​
​
```javascript
  const subscription = await stripe.subscriptions.create({
    customer: 'cus_JLOvDG0CK7jlbt',
    items: [
      {price: 'price_1IiMljKsNNk3qPPUwBtO8VfL'},
    ],
  });
```
example response:
```javascript
{
  "id": "sub_HAwfLuEoLetEJ3",
  "object": "subscription",
  "application_fee_percent": null,
  "billing_cycle_anchor": 1588008574,
  "billing_thresholds": null,
  "cancel_at": null,
  "cancel_at_period_end": false,
  "canceled_at": null,
  "collection_method": "charge_automatically",
  "created": 1588008574,
  "current_period_end": 1590600574,
  "current_period_start": 1588008574,
  "customer": "cus_HAwfE7FhKgxbJ6",
  "days_until_due": null,
  "default_payment_method": null,
  "default_source": null,
  "default_tax_rates": [],
  "discount": null,
  "ended_at": null,
  "items": {
    "object": "list",
    "data": [
      {
        "id": "si_HAwfKDKNOmRu6Q",
        "object": "subscription_item",
        "billing_thresholds": null,
        "created": 1588008574,
        "metadata": {},
        "price": {
          "id": "price_H1NlVtpo6ubk0m",
          "object": "price",
          "active": true,
          "billing_scheme": "per_unit",
          "created": 1585803008,
          "currency": "usd",
          "livemode": false,
          "lookup_key": null,
          "metadata": {},
          "nickname": "Basic",
          "product": "prod_H1Nl2JMpwPur6w",
          "recurring": {
            "aggregate_usage": null,
            "interval": "month",
            "interval_count": 1,
            "trial_period_days": 30,
            "usage_type": "licensed"
          },
          "tiers": null,
          "tiers_mode": null,
          "transform_quantity": null,
          "type": "recurring",
          "unit_amount": 500,
          "unit_amount_decimal": "500"
        },
        "quantity": 1,
        "subscription": "sub_HAwfLuEoLetEJ3",
        "tax_rates": []
      }
    ],
    "has_more": false,
    "url": "/v1/subscription_items?subscription=sub_HAwfLuEoLetEJ3"
  },
  "latest_invoice": null,
  "livemode": false,
  "metadata": {},
  "next_pending_invoice_item_invoice": null,
  "pause_collection": null,
  "pending_invoice_item_interval": null,
  "pending_setup_intent": null,
  "pending_update": null,
  "quantity": 1,
  "schedule": null,
  "start_date": 1588008574,
  "status": "active",
  "tax_percent": null,
  "trial_end": null,
  "trial_start": null
}
```
​
​
​
​
##### -- USERS --
​
danstuart4242@gmail.com       cus_JKqUSycVVVuT0o
goham699@gmail.com            cus_JKqTtWytwMhtif
gohambuddy6942@gmail.com      cus_JKqSv9wyHVuLPn
stuheadz@gmail.com            cus_JKqRBV2q1nVWwM






























