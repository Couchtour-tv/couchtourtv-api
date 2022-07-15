// deleteChannelMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';
// import { deleteChannel } from '../../lib/meida-live-lib';


exports.handler = async (event, context) => {
    console.log("[10] deleteChannelMediaLive", event, context);

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


    medialive.deleteChannel(params, function(err, data) {
        if (err) {
            console.log("[18] deleteChannelMediaLive", err, err.stack);
            return Responses._404({ 'success': false, 'data': err });
        } else  {
            console.log("[21] deleteChannelMediaLive", data);
            return Responses._200({ 'success': true, 'data': { 'Id': data.Id, 'State': data.State } });
        }
    });

};

// sls invoke local --function delete-channel-media-live --data '{"body":{"channelId":"7505832","userId":"cognitoUserId"}}'
