/*

MoonSocket Users

    *** Users ***

    { connectionID, identityId, date, domainName, stage, status: 'connected', messages: []}

*/

const UserModel = require('../models/UserModel')
const Responses = require('../common/API_Responses')
const distributeMessage = require('../common/WebsocketDistribute')

exports.handler = async event => {
    console.log('\n', '\n',  '--------------------  USERS  ---------------------', '\n', '\n')
    // console.log('WEBSOCKETS/USERS.JS:7', event)

    const { connectionId: connectionID, domainName, stage } = event.requestContextt

    try {
        console.log('WEBSOCKETS/USERS.JS:22 connectionID -> ', connectionID)

        const users = await UserModel.getUsers(connectionID)
        const reply = WebsocketDistribute.distributeMessage(users)

        return Responses._200({ message: 'got a message' })

    } catch (error) {
        console.log('message.js[52] -> ERROR!', error)
        return Responses._400({ message: 'message could not be received', error: error })
    }

    return Responses._200({ message: 'got a message' })
}