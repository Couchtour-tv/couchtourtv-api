// stopChannelMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';
// import { stopChannel } from '../../lib/meida-live-lib';


exports.handler = async (event, context) => {
    console.log("[10] stopChannelMediaLive", event, context);

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


    medialive.stopChannel(params, function(err, data) {
        if (err) {
            console.log("[18] stopChannelMediaLive", err, err.stack);
            return Responses._404({ 'success': false, 'data': err });
        } else  {
            console.log("[21] stopChannelMediaLive", data);
            return Responses._200({ 'success': true, 'data': { 'Id': data.Id, 'State': data.State } });
        }
    });

};

// sls invoke local --function stop-channel-media-live --data '{"body":{"channelId":"8634123","userId":"cognitoUserId"}}'
