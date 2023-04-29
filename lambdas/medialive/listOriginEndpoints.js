// listChannelsMediaPackage.js

const AWS = require("aws-sdk")
import Responses from "../common/API_Responses"
import { OptionsMediaPackage } from "../common/constants"

// function sanitizeObject(obj) {
//     return { Id: obj.Id, Description: obj.Description };
// }

exports.handler = async (event, context) => {
  console.log("[10] listOriginEndpoints", event, context)
  var mediapackage = new AWS.MediaPackage(OptionsMediaPackage)
  var params = {
    // ChannelId: 'STRING_VALUE',
    MaxResults: 50,
    // NextToken: 'STRING_VALUE'
  }

  let successOpt = false
  let dataOpt

  try {
    const resp = await mediapackage
      .listOriginEndpoints(params, function (err, data) {
        if (err) {
          console.log("[18] listOriginEndpoints", err, err.stack)
          return err
        } else {
          console.log("[21] listOriginEndpoints", data)
          successOpt = true
          return data
        }
      })
      .promise()

    if (successOpt) {
      dataOpt = resp
      // dataOpt = resp.Channels.map(sanitizeObject);
    } else {
      dataOpt = resp
    }

    console.log("[32] listOriginEndpoints", resp)
    return Responses._200({ success: true, data: dataOpt })
  } catch (error) {
    console.log("[37] listOriginEndpoints", error)
    return Responses._404({
      message: "listOriginEndpoints failed",
      success: successOpt,
    })
  }
}

// sls invoke local --function list-origin-endpoints
