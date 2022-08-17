// createOriginEndpointMediaPackage.js

const AWS = require("aws-sdk")
import Responses from "../common/API_Responses"
import { OptionsMediaPackage } from "../common/constants"

// var params = {
//   Id: 'STRING_VALUE', /* required */
//   Description: 'STRING_VALUE',
//   Tags: {
//     '<__string>': 'STRING_VALUE',
//     /* '<__string>': ... */
//   }
// };

exports.handler = async (event, context) => {
  console.log("[10] createOriginEndpointMediaPackage", event, context)

  let body
  try {
    body = await JSON.parse(event.body)
  } catch (e) {
    body = event.body
  }

  let successOpt = false
  let dataOpt

  console.log("[34] createOriginEndpointMediaPackage", body, originEndpointJSON)

  try {
    const params = {
      ChannelId: body.ChannelId,
      ...originEndpointJSON,
    }

    var mediapackage = new AWS.MediaPackage(OptionsMediaPackage)

    const resp = await mediapackage
      .createOriginEndpoint(params, function (err, data) {
        if (err) {
          console.log("[18] createOriginEndpointMediaPackage", err, err.stack)
          return err
        } else {
          console.log("[21] createOriginEndpointMediaPackage", data)
          successOpt = true
          return data
        }
      })
      .promise()

    if (successOpt) {
      dataOpt = { Id: resp.Id, State: resp.State }
    } else {
      dataOpt = resp
    }
    console.log("[32] createOriginEndpointMediaPackage", dataOpt)
    return Responses._200({ success: successOpt, data: dataOpt })
  } catch (error) {
    console.log("[37] createOriginEndpointMediaPackage", error)
    return Responses._400({
      message: "createOriginEndpointMediaPackage failed",
      success: successOpt,
    })
  }
}

// sls invoke local --function create-origin-endpoint-media-package
// --data '{"body":{"InputId":"7505832","destinationId":"2022-Disco_Biscuits-Umphreys_McGee","userId":"cognitoUserId"}}'

var originEndpointJSON = {
  //   ChannelId: '2022-08-15-TEST_TEST', /* required */
  Id: "2022-08-15-TEST_TEST-STREAMCHECK2" /* required */,
  // Authorization: {
  //   CdnIdentifierSecret: 'STRING_VALUE',  required
  //   SecretsRoleArn: 'STRING_VALUE' /* required */
  // },
  // CmafPackage: {
  //   Encryption: {
  //     SpekeKeyProvider: { /* required */
  //       ResourceId: 'STRING_VALUE', /* required */
  //       RoleArn: 'STRING_VALUE', /* required */
  //       SystemIds: [ /* required */
  //         'STRING_VALUE',
  //         /* more items */
  //       ],
  //       Url: 'STRING_VALUE', /* required */
  //       CertificateArn: 'STRING_VALUE',
  //       EncryptionContractConfiguration: {
  //         PresetSpeke20Audio: PRESET-AUDIO-1 | PRESET-AUDIO-2 | PRESET-AUDIO-3 | SHARED | UNENCRYPTED, /* required */
  //         PresetSpeke20Video: PRESET-VIDEO-1 | PRESET-VIDEO-2 | PRESET-VIDEO-3 | PRESET-VIDEO-4 | PRESET-VIDEO-5 | PRESET-VIDEO-6 | PRESET-VIDEO-7 | PRESET-VIDEO-8 | SHARED | UNENCRYPTED /* required */
  //       }
  //     },
  //     ConstantInitializationVector: 'STRING_VALUE',
  //     KeyRotationIntervalSeconds: 'NUMBER_VALUE'
  //   },
  //   HlsManifests: [
  //     {
  //       Id: 'STRING_VALUE', /* required */
  //       AdMarkers: NONE | SCTE35_ENHANCED | PASSTHROUGH | DATERANGE,
  //       AdTriggers: [
  //         SPLICE_INSERT | BREAK | PROVIDER_ADVERTISEMENT | DISTRIBUTOR_ADVERTISEMENT | PROVIDER_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_PLACEMENT_OPPORTUNITY | PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY,
  //         /* more items */
  //       ],
  //       AdsOnDeliveryRestrictions: NONE | RESTRICTED | UNRESTRICTED | BOTH,
  //       IncludeIframeOnlyStream: true || false,
  //       ManifestName: 'STRING_VALUE',
  //       PlaylistType: NONE | EVENT | VOD,
  //       PlaylistWindowSeconds: 'NUMBER_VALUE',
  //       ProgramDateTimeIntervalSeconds: 'NUMBER_VALUE'
  //     },
  //     /* more items */
  //   ],
  //   SegmentDurationSeconds: 'NUMBER_VALUE',
  //   SegmentPrefix: 'STRING_VALUE',
  //   StreamSelection: {
  //     MaxVideoBitsPerSecond: 'NUMBER_VALUE',
  //     MinVideoBitsPerSecond: 'NUMBER_VALUE',
  //     StreamOrder: ORIGINAL | VIDEO_BITRATE_ASCENDING | VIDEO_BITRATE_DESCENDING
  //   }
  // },
  // DashPackage: {
  //   // AdTriggers: [
  //   //   SPLICE_INSERT | BREAK | PROVIDER_ADVERTISEMENT | DISTRIBUTOR_ADVERTISEMENT | PROVIDER_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_PLACEMENT_OPPORTUNITY | PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY,
  //   //   /* more items */
  //   // ],
  //   // AdsOnDeliveryRestrictions: NONE | RESTRICTED | UNRESTRICTED | BOTH,
  //   // Encryption: {
  //   //   SpekeKeyProvider: { /* required */
  //   //     ResourceId: 'STRING_VALUE', /* required */
  //   //     RoleArn: 'STRING_VALUE', /* required */
  //   //     SystemIds: [ /* required */
  //   //       'STRING_VALUE',
  //   //       /* more items */
  //   //     ],
  //   //     Url: 'STRING_VALUE', /* required */
  //   //     CertificateArn: 'STRING_VALUE',
  //   //     EncryptionContractConfiguration: {
  //   //       PresetSpeke20Audio: PRESET-AUDIO-1 | PRESET-AUDIO-2 | PRESET-AUDIO-3 | SHARED | UNENCRYPTED,  required
  //   //       PresetSpeke20Video: PRESET-VIDEO-1 | PRESET-VIDEO-2 | PRESET-VIDEO-3 | PRESET-VIDEO-4 | PRESET-VIDEO-5 | PRESET-VIDEO-6 | PRESET-VIDEO-7 | PRESET-VIDEO-8 | SHARED | UNENCRYPTED /* required */
  //   //     }
  //   //   },
  //   //   KeyRotationIntervalSeconds: 'NUMBER_VALUE'
  //   // },
  //   // IncludeIframeOnlyStream: true || false,
  //   // ManifestLayout: FULL | COMPACT,
  //   // ManifestWindowSeconds: 'NUMBER_VALUE',
  //   // MinBufferTimeSeconds: 'NUMBER_VALUE',
  //   // MinUpdatePeriodSeconds: 'NUMBER_VALUE',
  //   // PeriodTriggers: [
  //   //   ADS,
  //   //   /* more items */
  //   // ],
  //   Profile: NONE | HBBTV_1_5 | HYBRIDCAST | DVB_DASH_2014,
  //   SegmentDurationSeconds: 'NUMBER_VALUE',
  //   SegmentTemplateFormat: NUMBER_WITH_TIMELINE | TIME_WITH_TIMELINE | NUMBER_WITH_DURATION,
  //   StreamSelection: {
  //     MaxVideoBitsPerSecond: 'NUMBER_VALUE',
  //     MinVideoBitsPerSecond: 'NUMBER_VALUE',
  //     StreamOrder: ORIGINAL | VIDEO_BITRATE_ASCENDING | VIDEO_BITRATE_DESCENDING
  //   },
  //   SuggestedPresentationDelaySeconds: 'NUMBER_VALUE',
  //   UtcTiming: NONE | HTTP-HEAD | HTTP-ISO | HTTP-XSDATE,
  //   UtcTimingUri: 'STRING_VALUE'
  // },
  Description: "mpackage endpoint",
  HlsPackage: {
    // AdMarkers: NONE | SCTE35_ENHANCED | PASSTHROUGH | DATERANGE,
    // AdTriggers: [
    //   SPLICE_INSERT | BREAK | PROVIDER_ADVERTISEMENT | DISTRIBUTOR_ADVERTISEMENT | PROVIDER_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_PLACEMENT_OPPORTUNITY | PROVIDER_OVERLAY_PLACEMENT_OPPORTUNITY | DISTRIBUTOR_OVERLAY_PLACEMENT_OPPORTUNITY,
    //   /* more items */
    // ],
    // AdsOnDeliveryRestrictions: NONE | RESTRICTED | UNRESTRICTED | BOTH,
    // Encryption: {
    //   SpekeKeyProvider: { /* required */
    //     ResourceId: 'STRING_VALUE', /* required */
    //     RoleArn: 'STRING_VALUE', /* required */
    //     SystemIds: [ /* required */
    //       'STRING_VALUE',
    //       /* more items */
    //     ],
    //     Url: 'STRING_VALUE', /* required */
    //     CertificateArn: 'STRING_VALUE',
    //     EncryptionContractConfiguration: {
    //       PresetSpeke20Audio: PRESET-AUDIO-1 | PRESET-AUDIO-2 | PRESET-AUDIO-3 | SHARED | UNENCRYPTED, /* required */
    //       PresetSpeke20Video: PRESET-VIDEO-1 | PRESET-VIDEO-2 | PRESET-VIDEO-3 | PRESET-VIDEO-4 | PRESET-VIDEO-5 | PRESET-VIDEO-6 | PRESET-VIDEO-7 | PRESET-VIDEO-8 | SHARED | UNENCRYPTED /* required */
    //     }
    //   },
    //   ConstantInitializationVector: 'STRING_VALUE',
    //   EncryptionMethod: AES_128 | SAMPLE_AES,
    //   KeyRotationIntervalSeconds: 'NUMBER_VALUE',
    //   RepeatExtXKey: true || false
    // },
    // IncludeDvbSubtitles: true || false,
    // IncludeIframeOnlyStream: true || false,
    PlaylistType: "EVENT",
    PlaylistWindowSeconds: 300,
    ProgramDateTimeIntervalSeconds: 60,
    SegmentDurationSeconds: 6,
    // StreamSelection: {
    //   MaxVideoBitsPerSecond: 'NUMBER_VALUE',
    //   MinVideoBitsPerSecond: 'NUMBER_VALUE',
    //   StreamOrder: ORIGINAL | VIDEO_BITRATE_ASCENDING | VIDEO_BITRATE_DESCENDING
    // },
    // UseAudioRenditionGroup: true || false
  },
  ManifestName: "index",
  // MssPackage: {
  //   Encryption: {
  //     SpekeKeyProvider: { /* required */
  //       ResourceId: 'STRING_VALUE', /* required */
  //       RoleArn: 'STRING_VALUE', /* required */
  //       SystemIds: [ /* required */
  //         'STRING_VALUE',
  //         /* more items */
  //       ],
  //       Url: 'STRING_VALUE', /* required */
  //       CertificateArn: 'STRING_VALUE',
  //       EncryptionContractConfiguration: {
  //         PresetSpeke20Audio: PRESET-AUDIO-1 | PRESET-AUDIO-2 | PRESET-AUDIO-3 | SHARED | UNENCRYPTED, /* required */
  //         PresetSpeke20Video: PRESET-VIDEO-1 | PRESET-VIDEO-2 | PRESET-VIDEO-3 | PRESET-VIDEO-4 | PRESET-VIDEO-5 | PRESET-VIDEO-6 | PRESET-VIDEO-7 | PRESET-VIDEO-8 | SHARED | UNENCRYPTED /* required */
  //       }
  //     }
  //   },
  // ManifestWindowSeconds: 'NUMBER_VALUE',
  // SegmentDurationSeconds: 'NUMBER_VALUE',
  // StreamSelection: {
  //   MaxVideoBitsPerSecond: 'NUMBER_VALUE',
  //   MinVideoBitsPerSecond: 'NUMBER_VALUE',
  //   StreamOrder: ORIGINAL | VIDEO_BITRATE_ASCENDING | VIDEO_BITRATE_DESCENDING
  // }
  // },
  // Origination: ALLOW | DENY,
  StartoverWindowSeconds: 1209600,
  TimeDelaySeconds: 0,
  // Whitelist: [
  //   'STRING_VALUE',
  //   /* more items */
  // ]
}
