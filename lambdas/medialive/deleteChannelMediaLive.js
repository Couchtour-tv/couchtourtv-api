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

    var params = {
        ChannelId: body.channelId.toString()
    };

    let successOpt = false;
    let dataOpt;

    var medialive = new AWS.MediaLive(OptionsMediaLive);
    try {

        const resp = await medialive.deleteChannel(params, function(err, data) {
            if (err) {
                console.log("[18] deleteChannelMediaLive", err, err.stack);
                return err;
            } else  {
                console.log("[21] deleteChannelMediaLive", data);
                successOpt = true;
                return data;
            }
        }).promise();

        if (successOpt) {
            dataOpt = { 'Id': resp.Id, 'State': resp.State };
        } else {
            dataOpt = resp;
        };
        console.log("[32] deleteChannelMediaLive", dataOpt);
        return Responses._200({ success: successOpt, data: dataOpt });

    } catch (error) {

        console.log("[37] deleteChannelMediaLive", error)
        return Responses._404({
          message: "deleteChannelMediaLive failed",
          success: successOpt,
        })
    }
};

// sls invoke local --function delete-channel-media-live --data '{"body":{"channelId":"7505832","userId":"cognitoUserId"}}'
