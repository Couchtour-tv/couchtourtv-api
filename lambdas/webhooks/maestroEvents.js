// const AWS = require('aws-sdk')

import Responses from '../common/API_Responses'
import DynamoDb from '../../libs/dynamodb-lib'
import { MaestroEventsTable, MaestroSalesTable } from '../common/constants'
import { v4 as uuidv4 } from 'uuid'

exports.handler = async event => {
    try {
        const payload = JSON.parse(event.body)
        console.log("MAESTRO EVENTS [11] ", payload)

        const systemId = uuidv4()
        let email = null
        let maestroId = null
        let name = null
        let sku = null
        let slug = null 

        let hasAccount = false
        let hasEvent = false 

        if (payload.account) {
            email = payload.account.email
            maestroId = payload.account.siteId
            name = payload.account.name
            hasAccount = true
        }

        if (payload.eventData) {
            sku = payload.eventData.sku
            slug = payload.eventData.referer.pageSlug
            hasEvent = true
        }

        let maestroEventsWrite = {
            TableName: MaestroEventsTable,
            Item: {
                ID: systemId,
                maestroId: maestroId,
                email: email,
                name: name,
                sku: sku,
                slug: slug,
                createdAt: Date.now(),
                payload: payload,
            }
        }

        let TableName = maestroEventsWrite
        if (hasAccount && hasEvent) {
            TableName = MaestroSalesTable
        }

        await DynamoDb.put(TableName)

        return Responses._200({ 'success': true })

    } catch (error) {

        console.log('\n', error.stack)
        return Responses._400({ 'success': false })
    }
}



// SLUG = payload.eventData.referer.pageSlug == 'disco-biscuits-2021-05-sussex'
// SKU = payload.eventData.sku == '2021-05-sussex-2-day-lively-vips'
// EMAIL = payload.account.email == 'helix42@gmail.com'
// NAME = payload.account.name ==  'Marnicle Mill *verified*'
// MAESTRO_ID = payload.account._id = '5f8988c69bc82600a5829b48'



// {
//   eventData: {
//     billingInfo: {
//       complete: true,
//       countryCode: 'UM',
//       error: null,
//       markDefaultPaymentMethod: true,
//       name: '',
//       postalCode: '18037',
//       stateCode: null
//     },
//     idempotencyKey: '62215a09-6e9e-4a16-81d5-2bb2cf60ecd4',
//     paymentMethod: {
//       billing_details: [Object],
//       card: [Object],
//       created: 1620668840,
//       customer: null,
//       id: 'pm_1IpdCNKlS19qVW5lAb8RLRNB',
//       livemode: true,
//       object: 'payment_method',
//       type: 'card'
//     },
//     referer: {
//       origin: 'https://player.couchtour.tv',
//       pageSlug: 'disco-biscuits-2021-05-sussex'
//     },
//     sku: '2021-05-sussex-2-day-lively-vips'
//   },
//   method: 'POST',
//   service: 'billing v1',
//   signature: 'c0e5de7d-03c7-47cf-aae4-ea38ea8367a4',
//   originPath: '/',
//   webhookUrl: 'https://sq3xr6uno2.execute-api.us-east-1.amazonaws.com/prod/maestro-events',
//   account: {
//     _id: '5f8988c69bc82600a5829b48',
//     email: 'helix42@gmail.com',
//     marketingOptin: false,
//     name: 'Marnicle Mill *verified*',
//     normalizedName: 'marnicle mill *verified*',
//     roles: [
//       [Object], [Object],
//       [Object], [Object],
//       [Object], [Object],
//       [Object], [Object],
//       [Object], [Object]
//     ],
//     siteId: '5f627f6ae63761002c65fcd6',
//     subscriptions: [ [Object] ],
//     uid: 'email-helix42@gmail.com',
//     created: 1602848966437,
//     modified: 1617406842750,
//     tags: []
//   }
// }