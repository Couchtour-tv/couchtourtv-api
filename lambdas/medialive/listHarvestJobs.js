// listChannelsMediaPackage.js

const AWS = require("aws-sdk")
import Responses from "../common/API_Responses"
import { OptionsMediaPackage } from "../common/constants"

// function sanitizeObject(obj) {
//     return { Id: obj.Id, Description: obj.Description };
// }

exports.handler = async (event, context) => {
  console.log("[10] listHarvestJobs", event, context)
  var mediapackage = new AWS.MediaPackage(OptionsMediaPackage)
  var params = {
    // IncludeChannelId: 'STRING_VALUE',
    // IncludeStatus: 'STRING_VALUE',
    MaxResults: 50,
    // NextToken: 'STRING_VALUE'
  }

  let successOpt = false
  let dataOpt

  try {
    const resp = await mediapackage
      .listHarvestJobs(params, function (err, data) {
        if (err) {
          console.log("[18] listHarvestJobs", err, err.stack)
          return err
        } else {
          console.log("[21] listHarvestJobs", data)
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

    console.log("[32] listHarvestJobs", resp)
    return Responses._200({ success: true, data: dataOpt })
  } catch (error) {
    console.log("[37] listHarvestJobs", error)
    return Responses._404({
      message: "listHarvestJobs failed",
      success: successOpt,
    })
  }
}

// sls invoke local --function list-harvest-jobs
