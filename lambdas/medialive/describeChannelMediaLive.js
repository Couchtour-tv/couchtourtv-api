// describeChannelsMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';


exports.handler = async (event, context) => {
    console.log("[10] describeChannelsMediaLive", event, context);

    var medialive = new AWS.MediaLive(OptionsMediaLive);
    var params = {
        ChannelId: event.pathParameters.channelId
    };

    medialive.describeChannel(params, function(err, data) {
        if (err) {
            console.log("[18] describeChannelsMediaLive", err, err.stack);
            return Responses._400({ 'success': false, 'data': err });
        } else  {
            console.log("[21] describeChannelsMediaLive", data);
            return Responses._200({ 'success': true, 'data': { 'Id': data.Id, 'State': data.State }});
        }
    });

};

// sls invoke local --function describe-channel-media-live --data '{ "pathParameters": {"channelId":"8634123"}}'
