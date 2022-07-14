mediaLive.md

var AWS = require('aws-sdk');
----------------
var medialive = new AWS.MediaLive({apiVersion: '2017-10-14'});
----------------
AWS.config.apiVersions = {
  medialive: '2017-10-14',
  // other service API versions
};
var medialive = new AWS.MediaLive();
----------------


var mPackage = AWS.MediaPackage.MediaPackageClient(
	{'profile': 'couchtour','region':'us-east-1','version':'latest'}
);

var result =  mPackage.listChannels();