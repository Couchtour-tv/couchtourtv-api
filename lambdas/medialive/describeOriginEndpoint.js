// describeChannelsMediaLive.js

const AWS = require("aws-sdk")
import Responses from "../common/API_Responses"
import { OptionsMediaPackage } from "../common/constants"

exports.handler = async (event, context) => {
  console.log("[10] describe origin endpoint", event, context)

  var mediapackage = new AWS.MediaPackage(OptionsMediaPackage)
  // var params = {
  //     ChannelId: event.pathParameters.channelId
  // };

  var params = {
    Id: event.pathParameters.channelId,
  }

  let successOpt = false
  let dataOpt

  try {
    const resp = await mediapackage
      .describeOriginEndpoint(params, function (err, data) {
        if (err) {
          console.log("[18] describe origin endpoint ERROR", err, err.stack)
          return err
        } else {
          console.log("[21] describe origin endpoint SUCCESS", data)
          successOpt = true
          return data
        }
      })
      .promise()

    if (successOpt) {
      dataOpt = { Id: resp.Id, State: resp.State, Response: resp }
    } else {
      dataOpt = resp
    }
    console.log("[32] describe origin endpoint SUCCESS dataOpt", dataOpt)
    return Responses._200({ success: successOpt, data: dataOpt })
  } catch (error) {
    console.log("[37] describe origin endpoint ERROR", error)
    return Responses._404({
      message: "describe origin endpoint failed",
      success: successOpt,
    })
  }
}

// sls invoke local --function describe-channel-media-live --data '{ "pathParameters": {"channelId":"8634123"}}'
// sls invoke local --function describe-channel-media-live --data '{ "pathParameters": {"channelId":"7505832"}}'
