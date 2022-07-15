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
    let response;
    let successOpt;

    medialive.listChannels(params, function(err, data) {

        if (err) {
            console.log("[18] listChannelsMediaLive", err, err.stack);
            response = err;
            successOpt = false
        } else  {
            console.log("[21] listChannelsMediaLive", data);
            response = data;
            successOpt = true
        }
    });

    return Responses._200({ success: successOpt, data: response });
};

// sls invoke local --function list-channels-media-live