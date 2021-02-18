// const tableName = "MoonMessages"
const tableName = "MoonSockets"
const Dynamo = require('../common/Dynamo')
const WebSocket = require('../common/WebsocketMessage')

const ChatModel = require('./ChatModel')
const SocketModel = require('./SocketModel')


const processMessage = async (connectionID, message, domainName, stage) => {
    console.log('\n\MESSAGEMODEL / processMessage.JS:11', connectionID, tableName)

	// const record = await Dynamo.get(connectionID, tableName)
 //    const { messages, domainName, stage } = record

	// console.log('\n\MESSAGEMODEL / processMessage.JS:17', record, '\n\n')

	/* createMessage with
		message, identityID, connectionID, pluginID, ProjectID */

    // messages.push(message)
    // const data = {
    //     ...record,
    //     messages,
    // }

    const sockets = await SocketModel.getLiveSockets(connectionID)
    console.log('\n\MESSAGEMODEL / processMessage.JS:29', sockets)

    // await Dynamo.write(data, tableName)


	// send message to other connected plugins
	// get chatId for connectionID
	// get other connectionIds for chatID
	// loop thru connections and send message


    const replyMessage = {
        message,
        connectionID,
        date: Date.now(),
    }

    // console.log(sockets)
	const aryPromises = sockets.map( (socket) => {
        // try {
            WebSocket.send({
                domainName,
                stage,
                connectionID: socket,
                replyMessage,
            })

        // } catch(error) {
        //     console.log("WEBSOCKET SEND ERROR", socket, error)
        // }
	})

    Promise.all(aryPromises)
    console.log('\n\MESSAGEMODEL / processMessage.JS:60 -> SENT SENT -------------!!!', '\n')
    return replyMessage
}



const createMessage = (connectionID, message) => {

}



module.exports = {
	processMessage
}