// listChannelsMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';


exports.handler = async (event, context) => {
    console.log("[10] listChannelsMediaLive", event, context);

    var medialive = new AWS.MediaLive(OptionsMediaLive);
    var params = {
        MaxResults: 50
    };
    console.log("[15] listChannelsMediaLive", medialive);
    let successOpt;

    const resp = await medialive.listChannels(params, function(err, data) {

        if (err) {
            console.log("[18] listChannelsMediaLive", err, err.stack);
            successOpt = false
            return err;
        } else  {
            console.log("[21] listChannelsMediaLive", data);
            successOpt = true
            return data;
        }
    });

    console.log("[32] listChannelsMediaLive", resp);
    return Responses._200({ success: successOpt, data: resp });
};

// sls invoke local --function list-channels-media-live