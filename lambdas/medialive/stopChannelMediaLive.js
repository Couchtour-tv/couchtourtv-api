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

    let successOpt = false;
    let dataOpt;

    try {

        const resp = await medialive.stopChannel(params, function(err, data) {
            if (err) {
                console.log("[18] stopChannelMediaLive", err, err.stack);
                return err;
            } else  {
                console.log("[21] stopChannelMediaLive", data);
                successOpt = true;
                return data;
            }
        }).promise();

        if (successOpt) {
            dataOpt = { 'Id': resp.Id, 'State': resp.State };
        } else {
            dataOpt = resp;
        };
        console.log("[32] stopChannelMediaLive", dataOpt);
        return Responses._200({ success: successOpt, data: dataOpt });

    } catch (error) {

        console.log("[37] stopChannelMediaLive", error)
        return Responses._404({
          message: "stopChannelMediaLive failed",
          success: false,
        })
    }


};

// sls invoke local --function stop-channel-media-live --data '{"body":{"channelId":"7505832","userId":"cognitoUserId"}}'
