// const AWS = require('aws-sdk')

import Responses from '../common/API_Responses'
import DynamoDb from '../../libs/dynamodb-lib'

exports.handler = async event => {
    try {
        const payload = JSON.parse(event.body)
        console.log("stripeChargeSuccess", payload)

        if (payload.object === 'event') {

            if (payload.data && payload.data.object.billing_details) {
                console.log("BILLING DETAILS", payload.data.object.billing_details)
            }

            if (payload.data && payload.data.object.payment_method_details) {
                console.log("PAYMENT METHOD DETAILS", payload.data.object.payment_method_details)
            }

            if (pauyload.data.object.paid === true) {

                const stripeSuccessCheckoutWrite = {
                    TableName: StripeSuccessfulCheckoutTableName,
                    Item: {
                        ID: uuidv4(),
                        checkoutId: payload.id,
                        stripeCustomerId: payload.data.object.customer,
                        receivedAt: Date.now(),
                        payload: payload
                    }
                }
                await DynamoDb.put(stripeSuccessCheckoutWrite)

            } else {
                console.log("PAYMENT FAILED")
            }

        } else {
            console.log("PAYLOAD NOT EVENT")
        }

        return Responses._200({ 'success': true })

    } catch (error) {

        console.log('\n', error.stack)
        return Responses._400({ 'success': false })
    }
}