// listInputDevicesMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';


exports.handler = async (event, context) => {
    console.log("[10] listInputDevicesMediaLive", event, context);

    var medialive = new AWS.MediaLive(OptionsMediaLive);
    var params = {
        MaxResults: 50
    };

    medialive.listInputDevices(params, function(err, data) {
        if (err) {
            console.log("[18] listInputDevicesMediaLive", err, err.stack);
            return Responses._400({ 'success': false, 'data': err });
        } else  {
            console.log("[21] listInputDevicesMediaLive", data);
            return Responses._200({ 'success': true, 'data': data.InputDevices });
        }
    });

};

// sls invoke local --function list-input-devices-media-live
