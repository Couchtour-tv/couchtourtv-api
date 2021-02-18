const AWS = require('aws-sdk')

let options = { apiVersion: '2012-08-10', region: process.env.AWS_REGION }
if (process.env.IS_OFFLINE) {
    options = {
        region: 'localhost',
        endpoint: 'http://localhost:8000'
    }
}

const ddb = new AWS.DynamoDB.DocumentClient(options)

const TABLE_NAME = "MoonSockets"

exports.handler = async event => {
	let connectionData
	console.log('\n', '\n', '--------------------  SENDMESSAGE-9  ---------------------', event, '\n')
	const { connectionId: connectionID, domainName, stage } = event.requestContext
	// let filterExpression = `currentstatus = :currentstatus`
	// let expressionAttributes = {
 //        ':currentstatus': 'connected',
 //    }

 //    const params = {
 //        TableName: TABLE_NAME,
 //        FilterExpression: filterExpression,
 //        ExpressionAttributeValues: expressionAttributes
 //    }

	try {
		connectionData = await ddb.scan({ TableName: TABLE_NAME, ProjectionExpression: 'ID' }).promise()
	} catch (e) {
		console.log('\nSENDMESSAGE-14 - error database', e.stack)
		return { statusCode: 500, body: e.stack }
	}

    const endpoint = process.env.IS_OFFLINE ? 'http://localhost:3001' : `${domainName}/${stage}`
	const apigwManagementApi = new AWS.ApiGatewayManagementApi({
		apiVersion: '2018-11-29',
		endpoint: endpoint
	})

	const postData = JSON.parse(event.body).message

	console.log('\nSENDMESSAGE-24 - postdata - ', postData, connectionData)

    const replyMessage = {
        action: 'sendmessage',
		sender: connectionID,
		message: postData
    }


	const postCalls = connectionData.Items.map(async ({ ID }) => {
		try {
			console.log('\nSENDMESSAGE-29 - .map ', ID)
			if (ID === connectionID) {
				return
			} else {
				await apigwManagementApi.postToConnection({ ConnectionId: ID, Data: JSON.stringify(replyMessage) }).promise()
			}
		} catch (e) {
			if (e.statusCode === 410) {
				console.log(`Found stale connection, deleting ${ID}`)
				await ddb.delete({ TableName: TABLE_NAME, Key: { ID } }).promise()
			} else {
				throw e
			}
		}
	})

	console.log('\nSENDMESSAGE-39 - post calls promises ', postCalls)

	try {
		console.log('\nSENDMESSAGE-42 - Promise.all ')
		await Promise.all(postCalls)
	} catch (e) {
		console.log('\nSENDMESSAGE-45 - error on promises', e.stack)
		return { statusCode: 500, body: e.stack }
	}

	console.log('\nSENDMESSAGE-47')
	return { statusCode: 200, body: 'Data sent.' }
}
