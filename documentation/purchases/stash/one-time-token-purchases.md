## Stripe Service Interactions


###### Stripe Create Charges

```javascript
const purchaseData = {
    // source: postData.stripePayment.id,
    source: postData.tokenObj.token.id,
    amount: totalValueInCents,
    currency: "usd",
    metadata: {
        requestId: requestId,
        userId: postData.userId,
        email: postData.email,
        cogId: postData.cogId,
        itemIds: allItemsIds
        // What other pieces of data do we want to include ?
    }
};
const purchaseResp = await stripeInterface.charges.create(purchaseData);

```


```javascript
const purchaseData = {
    source: paymentIntent.id,
    amount: totalValueInCents,
    currency: "usd",
    metadata: {
        requestId: requestId,
        userId: postData.userId,
        email: postData.email,
        cogId: postData.cogId,
        itemIds: allItemsIds
        // What other pieces of data do we want to include ?
    }
};
const purchaseResp = await stripeInterface.charges.create(purchaseData);
```