const AWS = require("aws-sdk")
import Responses from "../common/API_Responses"
import { OptionsMediaPackage } from "../common/constants"

// function sanitizeObject(obj) {
//     return { Id: obj.Id, Description: obj.Description };
// }

// var params = {
//     EndTime: 'STRING_VALUE', /* required */
//     Id: 'STRING_VALUE', /* required */
//     OriginEndpointId: 'STRING_VALUE', /* required */
//     S3Destination: { /* required */
//       BucketName: 'STRING_VALUE', /* required */
//       ManifestKey: 'STRING_VALUE', /* required */
//       RoleArn: 'STRING_VALUE' /* required */
//     },
//     StartTime: 'STRING_VALUE' /* required */
//   };

exports.handler = async (event, context) => {
  console.log("[10] createHarvestJob", event, context)
  let body
  try {
    body = await JSON.parse(event.body)
  } catch (e) {
    body = event.body
  }
  var mediapackage = new AWS.MediaPackage(OptionsMediaPackage)
  var params = {
    EndTime: body.EndTime,
    Id: body.Id,
    OriginEndPoint: body.OriginEndPoint,
    S3Destination: {
      BucketName: body.S3Destination.BucketName,
      ManifestKey: body.S3Destination.ManifestKey,
      RoleArn: body.S3Destination.RoleArn,
    },
    StartTime: body.StartTime,
  }

  let successOpt = false
  let dataOpt

  try {
    const resp = await mediapackage
      .createHarvestJob(params, function (err, data) {
        if (err) {
          console.log("[18] createHarvestJob", err, err.stack)
          return err
        } else {
          console.log("[21] createHarvestJob", data)
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

    console.log("[32] createHarvestJob", resp)
    return Responses._200({ success: true, data: dataOpt })
  } catch (error) {
    console.log("[37] createHarvestJob", error)
    return Responses._404({
      message: "createHarvestJob failed",
      success: successOpt,
    })
  }
}

// sls invoke local --function create-harvest-job
