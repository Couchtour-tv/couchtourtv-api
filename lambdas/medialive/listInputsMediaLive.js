// listInputsMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';


exports.handler = async (event, context) => {
    console.log("[10] listInputsMediaLive", event, context);

    var medialive = new AWS.MediaLive(OptionsMediaLive);
    var params = {
        MaxResults: 50
    };

    medialive.listInputs(params, function(err, data) {
        if (err) {
            console.log("[18] listInputsMediaLive", err, err.stack);
            return Responses._400({ 'success': false, 'data': err });
        } else  {
            console.log("[21] listInputsMediaLive", data);
            return Responses._200({ 'success': true, 'data': data.Inputs });
        }
    });

};

// serverless invoke local --function list-inputs-media-live
