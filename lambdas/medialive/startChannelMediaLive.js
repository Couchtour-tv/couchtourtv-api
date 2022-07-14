// startChannelMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';
// import { startChannel } from '../../lib/meida-live-lib';


exports.handler = async (event, context) => {
    console.log("[10] startChannelMediaLive", event, context);

    let body;
    try {
        body = await JSON.parse(event.body);
    } catch (e) {
        body = event.body;
    }

    var medialive = new AWS.MediaLive(OptionsMediaLive);
    var params = {
        ChannelId: body.channelId.toString()
    };

    medialive.startChannel(params, function(err, data) {
        if (err) {
            console.log("[18] startChannelMediaLive", err, err.stack);
            return Responses._404({ 'success': false, 'data': err });
        } else  {
            console.log("[21] startChannelMediaLive", data);
            return Responses._200({ 'success': true, 'data': data.Channels });
        }
    });

};

// sls invoke local --function start-channel-media-live --data '{"body":{"channelId":"29337","userId":"cognitoUserId"}}'
