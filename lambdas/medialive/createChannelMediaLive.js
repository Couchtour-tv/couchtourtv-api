// createChannelMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';
import channelParams from '../../libs/mediaLiveChannelBasic';


exports.handler = async (event, context) => {
    console.log("[10] createChannelMediaLive", event, context);

    var medialive = new AWS.MediaLive(OptionsMediaLive);

    medialive.createChannel(channelParams, function(err, data) {
        if (err) {
            console.log("[18] createChannelMediaLive", err, err.stack);
            return Responses._400({ 'success': false, 'data': err });
        } else  {
            console.log("[21] createChannelMediaLive", data);
            return Responses._200({ 'success': true, 'data': data});
        }
    });

};

// serverless invoke local --function create-channel-media-live
