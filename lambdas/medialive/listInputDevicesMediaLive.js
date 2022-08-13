// listInputDevicesMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';


exports.handler = async (event, context) => {
    console.log("[10] listInputDevicesMediaLive", event, context);

    var medialive = new AWS.MediaLive(OptionsMediaLive);
    var params = {
        MaxResults: 50
    };

    let successOpt = false;

    try {

        const resp = await medialive.listInputDevices(params, function(err, data) {
            if (err) {
                console.log("[18] listInputDevicesMediaLive", err, err.stack);
                return err;
            } else  {
                console.log("[21] listInputDevicesMediaLive", data);
                successOpt = true;
                return data;
            }
        }).promise();

        console.log("[32] listInputDevicesMediaLive", resp);
        return Responses._200({ success: successOpt, data: resp });

    } catch (error) {

        console.log("[37] listInputDevicesMediaLive", error)
        return Responses._404({
          message: "listInputDevicesMediaLive failed",
          success: successOpt,
        })
    }

};

// sls invoke local --function list-input-devices-media-live
