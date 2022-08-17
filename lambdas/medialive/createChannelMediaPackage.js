// createChannelMediaPackage.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaPackage } from '../common/constants';

// var params = {
//   Id: 'STRING_VALUE', /* required */
//   Description: 'STRING_VALUE',
//   Tags: {
//     '<__string>': 'STRING_VALUE',
//     /* '<__string>': ... */
//   }
// };

exports.handler = async (event, context) => {
    console.log("[10] createChannelMediaPackage", event, context);

    let body;
    try {
        body = await JSON.parse(event.body);
    } catch (e) {
        body = event.body;
    }

    let successOpt = false;
    let dataOpt;

    let channelCreateTemplateJSON = {
        Id: '2022-08-15-TEST_TEST',
        Description: '2022-08-15-TEST_TEST_Descrption',
    };

    console.log("[34] createChannelMediaPackage", body, channelCreateTemplateJSON);

    try {

        var mediapackage = new AWS.MediaPackage(OptionsMediaPackage);

        const resp = await mediapackage.createChannel(channelCreateTemplateJSON, function(err, data) {
            if (err) {
                console.log("[18] createChannelMediaPackage", err, err.stack);
                return err;
            } else  {
                console.log("[21] createChannelMediaPackage", data);
                successOpt = true;
                return data;
            }
        }).promise();

        if (successOpt) {
            dataOpt = { 'Id': resp.Id, 'State': resp.State };
        } else {
            dataOpt = resp;
        };
        console.log("[32] createChannelMediaPackage", dataOpt);
        return Responses._200({ success: successOpt, data: dataOpt });

    } catch (error) {

        console.log("[37] createChannelMediaPackage", error)
        return Responses._400({
          message: "createChannelMediaPackage failed",
          success: successOpt,
        })
    }

};

// sls invoke local --function create-channel-media-package
// --data '{"body":{"InputId":"7505832","destinationId":"2022-Disco_Biscuits-Umphreys_McGee","userId":"cognitoUserId"}}'
