// const AWS = require('aws-sdk')

import Responses from '../common/API_Responses'
import DynamoDb from '../../libs/dynamodb-lib'
import { MaestroEventsTable } from '../common/constants'
import { v4 as uuidv4 } from 'uuid'

exports.handler = async event => {
    try {
        const payload = JSON.parse(event.body)
        console.log("MAESTRO EVENTS [11]", payload)

        const tempId = uuidv4()

        let maestroEventsWrite = {
            TableName: MaestroEventsTable,
            Item: {
                ID: tempId,
                maestroId: tempId,
                email: "test@example.com",
                createdAt: Date.now(),
                payload: payload,
            }
        }

        await DynamoDb.put(maestroEventsWrite)

        return Responses._200({ 'success': true })

    } catch (error) {

        console.log('\n', error.stack)
        return Responses._400({ 'success': false })
    }
}