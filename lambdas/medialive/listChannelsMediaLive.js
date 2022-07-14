// listChannelsMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
// import Dynamo from '../common/Dynamo';

exports.handler = async (event, context) => {
    console.log("[10] listChannelsMediaLive", event, context);

    var medialive = new AWS.MediaLive({apiVersion: '2017-10-14'});
    var params = {
        MaxResults: 10
    };

    medialive.listChannels(params, function(err, data) {
        if (err) {
            console.log("[18] listChannelsMediaLive", err, err.stack);
            return Responses._400({ 'success': true, 'data': err });
        } else  {
            console.log("[21] listChannelsMediaLive", data);
            return Responses._200({ 'success': true, 'data': data.Channels });
        }
    });

};

// serverless invoke local --function list-channels-media-live
