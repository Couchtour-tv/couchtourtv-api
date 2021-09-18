// const AWS = require('aws-sdk')

import Responses from '../common/API_Responses'
import DynamoDb from '../../libs/dynamodb-lib'
import { StripeSuccessfulCheckoutTableName } from '../common/constants'
import { v4 as uuidv4 } from 'uuid'

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

            let stripeSuccessCheckoutWrite = {
                TableName: StripeSuccessfulCheckoutTableName,
                Item: {
                    ID: uuidv4(),
                    checkoutId: payload.id,
                    stripeCustomerId: payload.data.object.customer,
                    email: payload.data.object.billing_details.email,
                    name: payload.data.object.billing_details.name,
                    receivedAt: Date.now(),
                    payload: payload,
                    status: 'paid',
                    video: { video_url: "https://decibel-stream.couchtour.tv/stream/index.m3u8", video_name: 'broadcast' }
                }
            }

            if (payload.data.object.paid === true) {

                // stripeSuccessCheckoutWrite.Item.status = 'paid'

            } else {

                console.log("PAYMENT FAILED")
                stripeSuccessCheckoutWrite.Item.status = 'error'
                stripeSuccessCheckoutWrite.Item.video = {}
            }

            await DynamoDb.put(stripeSuccessCheckoutWrite)

        } else {

            console.log("PAYLOAD NOT EVENT ---------------------------------------------- !!!!!")
        }

        return Responses._200({ 'success': true })

    } catch (error) {

        console.log('\n', error.stack)
        return Responses._400({ 'success': false })
    }
}