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

    let successOpt = false;
    let dataOpt;

    try {
        const resp = await medialive.describeChannel(params, function(err, data) {
            if (err) {
                console.log("[18] describeChannelsMediaLive", err, err.stack);
                return err;
            } else  {
                console.log("[21] describeChannelsMediaLive", data);
                successOpt = true;
                return data;
            }
        }).promise();

        if (successOpt) {
            dataOpt = { 'Id': resp.Id, 'State': resp.State };
        } else {
            dataOpt = resp;
        };
        console.log("[32] describeChannelsMediaLive", dataOpt);
        return Responses._200({ success: successOpt, data: dataOpt });

    } catch (error) {

        console.log("[37] describeChannelsMediaLive", error)
        return Responses._404({
          message: "describeChannelsMediaLive failed",
          success: successOpt,
        })
    }
};

// sls invoke local --function describe-channel-media-live --data '{ "pathParameters": {"channelId":"8634123"}}'
// sls invoke local --function describe-channel-media-live --data '{ "pathParameters": {"channelId":"7505832"}}'

