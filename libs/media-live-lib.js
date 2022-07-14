// media-live-lib.js
const AWS = require('aws-sdk');
import { OptionsMediaLive } from '../lambdas/common/constants';

export const stopChannel = function(channelId, callback) {
	var medialive = new AWS.MediaLive(OptionsMediaLive);
    var params = {
        ChannelId: channelId
    };

    medialive.stopChannel(params, function(err, data) {
    	callback(err,data);
    });
};