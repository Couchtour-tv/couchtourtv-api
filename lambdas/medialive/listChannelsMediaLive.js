// listChannelsMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';


exports.handler = async (event, context) => {
    console.log("[10] listChannelsMediaLive", event, context);

    var medialive = await new AWS.MediaLive(OptionsMediaLive);
    var params = {
        MaxResults: 50
    };

    let successOpt = false;

    try {

        const resp = await medialive.listChannels(params, function(err, data) {

            if (err) {
                console.log("[18] listChannelsMediaLive", err, err.stack);
                return err;
            } else  {
                console.log("[21] listChannelsMediaLive", data);
                successOpt = true;
                return data;
            }

        }).promise();

        console.log("[32] listChannelsMediaLive", resp);
        return Responses._200({ success: successOpt, data: resp });

    } catch (error) {

        console.log("[37] listChannelsMediaLive", error)
        return Responses._500({
          message: "listChannelsMediaLive failed",
          success: false,
        })
    }
};

// sls invoke local --function list-channels-media-live