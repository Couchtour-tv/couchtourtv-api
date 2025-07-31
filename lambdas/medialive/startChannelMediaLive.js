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

    let successOpt = false;
    let dataOpt;

    try {

        const resp = await medialive.startChannel(params, function(err, data) {
            if (err) {
                console.log("[18] startChannelMediaLive", err, err.stack);
                return err;
            } else  {
                console.log("[21] startChannelMediaLive", data);
                successOpt = true;
                return data;
            }
        }).promise();

        if (successOpt) {
            dataOpt = { 'Id': resp.Id, 'State': resp.State };
        } else {
            dataOpt = resp;
        };
        console.log("[32] startChannelMediaLive", dataOpt);
        return Responses._200({ success: successOpt, data: dataOpt });

    } catch (error) {

        console.log("[37] startChannelMediaLive", error)
        return Responses._404({
          message: "startChannelMediaLive failed",
          success: false,
        })
    }

};

// sls invoke local --function start-channel-media-live --data '{"body":{"channelId":"7505832","userId":"cognitoUserId"}}'
