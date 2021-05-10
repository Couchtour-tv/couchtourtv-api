// const AWS = require('aws-sdk')

import Responses from '../common/API_Responses'
import DynamoDb from '../../libs/dynamodb-lib'
import { MaestroSalesTable } from '../common/constants'

exports.handler = async event => {
	try {
		const payload = JSON.parse(event.body)
		console.log("LIVELY SALES [11] ", payload)

		let filterExpression = `type = :type`
		let expressionAttributes = {
			':type': 'lively',
		}
		console.log('\LIVELY SALES-16 - records ', filterExpression, expressionAttributes);
		const records = await DynamoDb.scan({
			TableName: MaestroSalesTable,
			filterExpression,
			expressionAttributes,
		})

		let scraped_record = {}
		console.log("LIVELY SALES [23] ", records)
		const records_lively = records.Items.filter((record) => record.type === 'lively')
		const api_ready = records_lively.map((record) => {
			if (record.type === 'lively') {
				scraped_record.id = record.ID
				scraped_record.sku = record.sku
				scraped_record.email = record.email
				scraped_record.name = record.name
				scraped_record.slug = record.slug
				scraped_record.created_at = record.createdAt
				scraped_record.maestro_id = record.maestroId
				return scraped_record
			}
		})
		console.log("LIVELY SALES [29] ", api_ready)

		return Responses._200({ 'success': true, 'data': api_ready })

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