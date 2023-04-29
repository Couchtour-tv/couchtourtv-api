// playerAnaltyics.js

// PURPOSE

//  to create DB records when player events occur

// EVENTS

//  EVENT_ENUM
//      MEDIA_START
//      MEDIA_STOP

//  DATA
//      ID: player_event_id (Primary Key Id)
//      action: EVENT_ENUM
//      currentSliderTime:  (media playtime slider in seconds (float in string aka "8.53"))
//      timestamp createdAt
//      userId
//      mediaId:  videoId|audioId
//      entitlementId

// { ID: player_event_id, action: MEDIA_START, currentSliderTime, userId: cognitoUserId, mediaId, entitlementId }
// { ID: player_event_id, action: MEDIA_STOP, currentSliderTime, userId: cognitoUserId, mediaId, entitlementId }

// const AWS = require('aws-sdk');
import Dynamo from '../common/Dynamo';
import { PlayerAnalyticsTable } from '../common/constants';
import * as uuid from "uuid";
import Responses from '../common/API_Responses';

exports.handler = async (event, context) => {
    console.log("[37] Player Analytic Data", event, context);
    let body;
    try {
        body = await JSON.parse(event.body);
    } catch (e) {
        body = event.body;
    }

    const { action, currentSliderTime, userId, mediaId, entitlementId } = body;
    const ID = uuid.v1();

    const Item = {
        ID,
        action,
        currentSliderTime,
        userId,
        mediaId,
        entitlementId
    };
    console.log("[35] Player Analytic Data", Item);

    try {
        const dynamoResponse = await Dynamo.write(Item, PlayerAnalyticsTable);
        console.log("[49] Player Analytic Data", dynamoResponse);
    } catch(error) {
        console.log('error', error);
    };

    return Responses._200({ 'success': true, 'action': "ACK", "ConnectionId": context.awsRequestId });
};

// { "body": { action: "MEDIA_STOP", currentSliderTime: "8.53", userId: "cognitoUserId", mediaId: "me_2389fh13", entitlementId: "tix_h2398fg13" }}
// json '{"action":"MEDIA_STOP","currentSliderTime":"8.53","userId":"cognitoUserId","mediaId":"me_2389fh13","entitlementId":"tix_h2398fg13"}'

// serverless invoke local --function player-analytics --data '{"body":{"action":"MEDIA_STOP","currentSliderTime":"8.53","userId":"cognitoUserId","mediaId":"me_2389fh13","entitlementId":"tix_h2398fg13"}}'
