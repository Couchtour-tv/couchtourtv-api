/*

MoonSocket Socket Whoami

    > {"action": "whoami"}
    < {"action":"whoami",
        "connectionID":"ckjw05ngl0009dyij8no89l28",
        "domainName":"localhost",
        "commands":["whoami","message"]}

*/

const Responses = require('../common/API_Responses')
const WebSocket = require('../common/WebsocketMessage')

exports.handler = async event => {
    console.log('\n', '\n', '\n', '--------------------  WHOAMI  ---------------------','\n', '\n', '\n')
    console.log('WEBSOCKETS/WHOAMI.JS:7', event)

	const { connectionId: connectionID, domainName, stage } = event.requestContext

    const availableCommands = [
        "whoami",
        "sendmessage",
        "echo",
        "onlinenow",
        "audio",
        "midi",
    ]

    const replyMessage = {
        action: 'whoami',
        connectionID,
        domainName,
        commands: availableCommands,
    }

        // console.log('WEBSOCKETS/WHOAMI.JS:34', replyMessage)

    try {
        await WebSocket.send({
            domainName,
            stage,
            connectionID,
            replyMessage
        })

        return Responses._200({ message: 'whoami SENT'})
    } catch (error) {
        return Responses._400({ message: 'message could not be received', error: error })
    }

    return Responses._200({ message: 'got a message' })
}