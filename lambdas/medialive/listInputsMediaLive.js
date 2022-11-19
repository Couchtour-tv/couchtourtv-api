// listInputsMediaLive.js

const AWS = require("aws-sdk")
import Responses from "../common/API_Responses"
import { OptionsMediaLive } from "../common/constants"

function sanitizeObject(obj) {
  return {
    Id: obj.Id,
    State: obj.State,
    Name: obj.Name,
    InputClass: obj.InputClass,
    Type: obj.Type,
  }
}

exports.handler = async (event, context) => {
  console.log("[10] listInputsMediaLive", event, context)

  var medialive = new AWS.MediaLive(OptionsMediaLive)
  var params = {
    MaxResults: 50,
  }

  let successOpt = false
  let dataOpt

  try {
    const resp = await medialive
      .listInputs(params, function (err, data) {
        if (err) {
          console.log("[18] listInputsMediaLive", err, err.stack)
          return err
        } else {
          console.log("[21] listInputsMediaLive", data)
          successOpt = true
          return data
        }
      })
      .promise()

    if (successOpt) {
      dataOpt = resp.Inputs.map(sanitizeObject)
    } else {
      dataOpt = resp
    }
    console.log("[32] listInputsMediaLive", dataOpt)
    return Responses._200({ "success": successOpt, "data": dataOpt })
  } catch (error) {
    console.log("[37] listInputsMediaLive", error)
    return Responses._404({
      "message": "listInputsMediaLive failed",
      "success": successOpt,
    })
  }
}

// sls invoke local --function list-inputs-media-live
