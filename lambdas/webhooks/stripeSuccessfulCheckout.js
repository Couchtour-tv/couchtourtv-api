// const AWS = require('aws-sdk')

import Responses from '../common/API_Responses'
// import { StripeSuccessfulCheckoutTableName } from '../common/constants'
// import DynamoDb from '../../libs/dynamodb-lib'
import { v4 as uuidv4 } from 'uuid'

exports.handler = async event => {
    try {
        const payload = JSON.parse(event.body)
        console.log("stripeSuccessfulCheckout", payload)
        // const stripeSuccessCheckoutWrite = {
        //     TableName: StripeSuccessfulCheckoutTableName,
        //     Item: {
        //         ID: uuidv4(),
        //         checkoutId: payload.id,
        //         stripeCustomerId: payload.customer,
        //         receivedAt: Date.now(),
        //         payload: payload
        //     }
        // }
        // await DynamoDb.put(stripeSuccessCheckoutWrite)
        return Responses._200({ 'success': true })

    } catch (error) {

        console.log('\n', error.stack)
        return Responses._400({ 'success': false })
    }
}