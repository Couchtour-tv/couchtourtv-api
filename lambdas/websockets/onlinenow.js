/*

MoonSocket Socket Onlinenow

    this action removes the requesting user connection ID without the options -all flag

    > {"action": "onlinenow"}
    > {"action": "onlinenow", "options": "all"}  --- include request user connection ID
    < {"action":"onlinenow",
        "domainName":"localhost",
        "connections":["ckjw05ngl0009dyij8no89l28","ckjvzwa360030vpij99ggfq8b"]


*/

const Responses = require('../common/API_Responses')
const WebSocket = require('../common/WebsocketMessage')
const SocketModel = require('../models/SocketModel')

exports.handler = async event => {
    console.log('\n', '\n', '--------------------  ONLINENOW  ---------------------', '\n')
    console.log('WEBSOCKETS/ONLINENOW.JS:17', event)

    try {
    	const { connectionId: connectionID, domainName, stage } = event.requestContext

        const val = event.body.match(/"options": "all"/)

        const userIncluded = val ? null : connectionID
        const sockets = await SocketModel.getLiveSockets(userIncluded)

        const replyMessage = {
            action: 'onlinenow',
            connections: sockets,
        }

        console.log('WEBSOCKETS/ONLINENOW.JS:31', replyMessage)

        await WebSocket.send({
            domainName,
            stage,
            connectionID,
            replyMessage
        })

        return Responses._200({ message: 'onlinenow SENT'})
    } catch (error) {
        return Responses._400({ message: 'onlinenow error', error: error })
    }

    return Responses._200({ message: 'onlinenow' })
}