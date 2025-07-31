// listChannelsMediaPackage.js

const AWS = require("aws-sdk")
import Responses from "../common/API_Responses"
import { OptionsMediaPackage } from "../common/constants"

// function sanitizeObject(obj) {
//   return { Id: obj.Id, Description: obj.Description }
// }

exports.handler = async (event, context) => {
  console.log("[10] describeHarvestJob", event, context)
  var mediapackage = new AWS.MediaPackage(OptionsMediaPackage)
  var params = {
    Id: event.pathParameters.jobId,
  }

  let successOpt = false
  let dataOpt

  try {
    const resp = await mediapackage
      .describeHarvestJob(params, function (err, data) {
        if (err) {
          console.log("[18] describeHarvestJob", err, err.stack)
          return err
        } else {
          console.log("[21] describeHarvestJob", data)
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

    console.log("[32] describeHarvestJob", resp)
    return Responses._200({ success: true, data: dataOpt })
  } catch (error) {
    console.log("[37] describeHarvestJob", error)
    return Responses._404({
      message: "describeHarvestJob failed",
      success: successOpt,
    })
  }
}

// sls invoke local --function describe-harvest-job --data '{ "pathParameters": {"jobId":"2022-06-12-Biscuits"}}'
