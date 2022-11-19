// listChannelsMediaPackage.js

const AWS = require("aws-sdk")
import Responses from "../common/API_Responses"
import { OptionsMediaPackage } from "../common/constants"

function sanitizeObject(obj) {
  return { Id: obj.Id, Description: obj.Description }
}

exports.handler = async (event, context) => {
  console.log("[10] listChannelsMediaPackage", event, context)
  var mediapackage = new AWS.MediaPackage(OptionsMediaPackage)
  var params = {
    MaxResults: 50,
  }

  let successOpt = false
  let dataOpt

  try {
    const resp = await mediapackage
      .listChannels(params, function (err, data) {
        if (err) {
          console.log("[18] listChannelsMediaPackage", err, err.stack)
          return err
        } else {
          console.log("[21] listChannelsMediaPackage", data)
          successOpt = true
          return data
        }
      })
      .promise()

    if (successOpt) {
      dataOpt = resp.Channels.map(sanitizeObject)
    } else {
      dataOpt = resp
    }

    console.log("[32] listChannelsMediaPackage", resp)
    return Responses._200({ success: true, data: dataOpt })
  } catch (error) {
    console.log("[37] listChannelsMediaPackage", error)
    return Responses._404({
      message: "listChannelsMediaPackage failed",
      success: successOpt,
    })
  }
}

// sls invoke local --function list-channels-media-package
