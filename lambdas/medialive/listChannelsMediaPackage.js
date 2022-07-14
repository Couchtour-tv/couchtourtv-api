// listChannelsMediaPackage.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaPackage } from '../common/constants';

// const fake_data = [
//     {
//       Arn: 'arn:aws:mediapackage:us-east-1:570573558182:channels/df6ad700ea8642e1a85c285e18f3284a',
//       Description: '2022-Disco_Biscuits-Umphreys_McGee',
//       EgressAccessLogs: [Object],
//       HlsIngest: [Object],
//       Id: '2022-Disco_Biscuits-Umphreys_McGee',
//       IngressAccessLogs: [Object],
//       Tags: {}
//     },
//     {
//       Arn: 'arn:aws:mediapackage:us-east-1:570573558182:channels/0922bb37682a4fb9a33b4595f01f00e5',
//       Description: 'Saturday Night Streams on Couchtour.tv',
//       EgressAccessLogs: [Object],
//       HlsIngest: [Object],
//       Id: 'CouchtourTV-Saturdays',
//       IngressAccessLogs: [Object],
//       Tags: {}
//     },
//     {
//       Arn: 'arn:aws:mediapackage:us-east-1:570573558182:channels/daea7540428d42449f5e93e80ee52c85',
//       Description: '2022-The-Disco-Biscuits',
//       EgressAccessLogs: [Object],
//       HlsIngest: [Object],
//       Id: '2022-The-Disco-Biscuits',
//       IngressAccessLogs: [Object],
//       Tags: {}
//     },
//     {
//       Arn: 'arn:aws:mediapackage:us-east-1:570573558182:channels/17bd3b979f0548bf978815d4752ec411',
//       Description: 'KnewConscious-HLS-Output',
//       EgressAccessLogs: [Object],
//       HlsIngest: [Object],
//       Id: 'KnewConscious-HLS-Output',
//       IngressAccessLogs: [Object],
//       Tags: {}
//     },
//     {
//       Arn: 'arn:aws:mediapackage:us-east-1:570573558182:channels/96752ea6f2454d5eaf20a547345e5ff8',
//       Description: '2022-City_Bisco',
//       EgressAccessLogs: [Object],
//       HlsIngest: [Object],
//       Id: '2022-City_Bisco',
//       IngressAccessLogs: [Object],
//       Tags: {}
//     },
//     {
//       Arn: 'arn:aws:mediapackage:us-east-1:570573558182:channels/ed33ac8ab3804e5982a8be76ea5354a8',
//       Description: '2022-Port-Chester',
//       EgressAccessLogs: [Object],
//       HlsIngest: [Object],
//       Id: '2022-Port-Chester',
//       IngressAccessLogs: [Object],
//       Tags: {}
//     }
//   ];


exports.handler = async (event, context) => {
    console.log("[10] listChannelsMediaPackage", event, context);
    var mediapackage = new AWS.MediaPackage(OptionsMediaPackage);
    var params = {
        MaxResults: 50
    };
    mediapackage.listChannels(params, function(err, data) {
        if (err) {
            console.log("[18] listChannelsMediaPackage", err, err.stack);
            return Responses._400({ 'success': false, 'data': err });
        } else  {
            console.log("[21] listChannelsMediaPackage", data);
            return Responses._200({ 'success': true, 'data': data.Channels });
        }
    });

    // return Responses._200({ 'success': true, 'data': fake_data});
};

// serverless invoke local --function list-channels-media-package
