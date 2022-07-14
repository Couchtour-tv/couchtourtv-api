// listChannelsMediaPackage.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaPackage } from '../common/constants';

function sanitizeObject(obj) {
    return { Id: obj.Id, Description: obj.Description };
}

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
            const sanitizeData = data.Channels.map(sanitizeObject);
            return Responses._200({ 'success': true, 'data': sanitizeData });
        }
    });

};

// sls invoke local --function list-channels-media-package
