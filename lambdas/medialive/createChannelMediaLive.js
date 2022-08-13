// createChannelMediaLive.js

const AWS = require('aws-sdk');
import Responses from '../common/API_Responses';
import { OptionsMediaLive } from '../common/constants';
// import channelParams from '../../libs/mediaLiveChannelBasic';

// { InputAttachmentName: "Elemental Link",
// InputId: "8329555",
// destinationId: "2022-Disco_Biscuits-Umphreys_McGee",
// destinationName: "2022-Disco_Biscuits-Umphreys_McGee"
// userId: "c3ea8cea-6398-4354-a646-b001e71726bf" }


exports.handler = async (event, context) => {
    console.log("[10] createChannelMediaLive", event, context);

    let body;
    try {
        body = await JSON.parse(event.body);
    } catch (e) {
        body = event.body;
    }

    let successOpt = false;
    let dataOpt;

    try {
        let getInputAttachments = channelCreateTemplateJSON.InputAttachments[0];
        getInputAttachments.InputId = body.InputId
        getInputAttachments.InputAttachmentName = body.InputAttachmentName
        let destinationId = body.destinationId

        let destinationData = {
            Id: destinationId.toString(),
            MediaPackageSettings: [
                {
                    ChannelId: destinationId.toString(),
                },
            ],
        };

        channelCreateTemplateJSON.Destinations = [destinationData];

        console.log("[45] createChannelMediaLive", channelCreateTemplateJSON);

        var medialive = new AWS.MediaLive(OptionsMediaLive);

        const resp = await medialive.createChannel(channelCreateTemplateJSON, function(err, data) {
            if (err) {
                console.log("[18] createChannelMediaLive", err, err.stack);
                return err;
            } else  {
                console.log("[21] createChannelMediaLive", data);
                successOpt = true;
                return data;
            }
        }).promise();

        if (successOpt) {
            dataOpt = { 'Id': resp.Id, 'State': resp.State };
        } else {
            dataOpt = resp;
        };
        console.log("[32] createChannelMediaLive", dataOpt);
        return Responses._200({ success: successOpt, data: dataOpt });

    } catch (error) {

        console.log("[37] createChannelMediaLive", error)
        return Responses._400({
          message: "createChannelMediaLive failed",
          success: successOpt,
        })
    }

};

// sls invoke local --function create-channel-media-live --data '{"body":{"InputId":"7505832","destinationId":"2022-Disco_Biscuits-Umphreys_McGee","userId":"cognitoUserId"}}'


var channelCreateTemplateJSON = {
    ChannelClass: 'SINGLE_PIPELINE',
    Destinations: [
        {
            // Id: '2022-Disco_Biscuits-Umphreys_McGee',
            MediaPackageSettings: [
                {
                    ChannelId: '2022-Disco_Biscuits-Umphreys_McGee',
                },
            ],
        },
    ],
    EncoderSettings: {
        AudioDescriptions: [ // REQUIRED
            {
                AudioSelectorName: 'Default', // REQUIRED
                CodecSettings: {
                    AacSettings: {
                        Bitrate: 320000,
                        CodingMode: 'CODING_MODE_2_0',
                        InputType: 'NORMAL',
                        Profile: 'LC',
                        RateControlMode: 'CBR',
                        RawFormat: 'NONE',
                        SampleRate: 48000,
                        Spec: 'MPEG4',
                    },
                },
                LanguageCodeControl: 'FOLLOW_INPUT',
                Name: 'audio_1', // REQUIRED
            },
            {
                AudioSelectorName: 'Default', // REQUIRED
                CodecSettings: {
                    AacSettings: {
                        Bitrate: 320000,
                        CodingMode: 'CODING_MODE_2_0',
                        InputType: 'NORMAL',
                        Profile: 'LC',
                        RateControlMode: 'CBR',
                        RawFormat: 'NONE',
                        SampleRate: 48000,
                        Spec: 'MPEG4',
                    },
                },
                LanguageCodeControl: 'FOLLOW_INPUT',
                Name: 'audio_2', // REQUIRED
            },
            {
                AudioSelectorName: 'Default', // REQUIRED
                CodecSettings: {
                    AacSettings: {
                        Bitrate: 128000,
                        CodingMode: 'CODING_MODE_2_0',
                        InputType: 'NORMAL',
                        Profile: 'LC',
                        RateControlMode: 'CBR',
                        RawFormat: 'NONE',
                        SampleRate: 48000,
                        Spec: 'MPEG4',
                    },
                },
                LanguageCodeControl: 'FOLLOW_INPUT',
                Name: 'audio_3', // REQUIRED
            },
            {
                AudioSelectorName: 'Default', // REQUIRED
                CodecSettings: {
                    AacSettings: {
                        Bitrate: 128000,
                        CodingMode: 'CODING_MODE_2_0',
                        InputType: 'NORMAL',
                        Profile: 'LC',
                        RateControlMode: 'CBR',
                        RawFormat: 'NONE',
                        SampleRate: 48000,
                        Spec: 'MPEG4',
                    },
                },
                LanguageCodeControl: 'FOLLOW_INPUT',
                Name: 'audio_4', // REQUIRED
            },
            // {
            //     LanguageCodeControl: 'FOLLOW_INPUT',
            //     Name: 'audio_ik0o8d', // REQUIRED
            // },
            // {
            //     LanguageCodeControl: 'FOLLOW_INPUT',
            //     Name: 'audio_mc0bjh', // REQUIRED
            // },
            // {
            //     LanguageCodeControl: 'FOLLOW_INPUT',
            //     Name: 'audio_xyjtcn', // REQUIRED
            // },
        ],
        CaptionDescriptions: [],
        FeatureActivations: {
            InputPrepareScheduleActions: 'ENABLED',
        },
        OutputGroups: [ // REQUIRED
            {
                Name: 'HD',
                OutputGroupSettings: { // REQUIRED
                    MediaPackageGroupSettings: {
                        Destination: { // REQUIRED
                            DestinationRefId: 'kvd3bh',
                        },
                    },
                },
                Outputs: [ // REQUIRED
                    {
                        AudioDescriptionNames: ['audio_1'],
                        CaptionDescriptionNames: [],
                        OutputName: '1080p30',
                        OutputSettings: { // REQUIRED
                            MediaPackageOutputSettings: [],
                        },
                        VideoDescriptionName: 'video_1080p30',
                    },
                    {
                        AudioDescriptionNames: ['audio_2'],
                        CaptionDescriptionNames: [],
                        OutputName: 'video_720p30',
                        OutputSettings: { // REQUIRED
                            MediaPackageOutputSettings: [],
                        },
                        VideoDescriptionName: 'video_720p30',
                    },
                    {
                        AudioDescriptionNames: ['audio_3'],
                        CaptionDescriptionNames: [],
                        OutputName: 'video_480p30',
                        OutputSettings: { // REQUIRED
                            MediaPackageOutputSettings: [],
                        },
                        VideoDescriptionName: 'video_480p30',
                    },
                    {
                        AudioDescriptionNames: ['audio_4'],
                        CaptionDescriptionNames: [],
                        OutputName: 'video_240p30',
                        OutputSettings: { // REQUIRED
                            MediaPackageOutputSettings: [],
                        },
                        VideoDescriptionName: 'video_240p30',
                    },
                ],
            },
        ],
        TimecodeConfig: { // REQUIRED
            Source: 'SYSTEMCLOCK', // REQUIRED
        },
        VideoDescriptions: [ // REQUIRED
            {
                CodecSettings: {
                    H264Settings: {
                        AdaptiveQuantization: 'HIGH',
                        AfdSignaling: 'NONE',
                        Bitrate: 6000000,
                        BufFillPct: 90,
                        BufSize: 12000000,
                        ColorMetadata: 'INSERT',
                        EntropyEncoding: 'CABAC',
                        FlickerAq: 'ENABLED',
                        ForceFieldPictures: 'DISABLED',
                        FramerateControl: 'SPECIFIED',
                        FramerateDenominator: 1,
                        FramerateNumerator: 30,
                        GopBReference: 'ENABLED',
                        GopClosedCadence: 1,
                        GopNumBFrames: 3,
                        GopSize: 60,
                        GopSizeUnits: 'FRAMES',
                        Level: 'H264_LEVEL_AUTO',
                        LookAheadRateControl: 'HIGH',
                        MaxBitrate: 6000000,
                        NumRefFrames: 3,
                        ParControl: 'SPECIFIED',
                        Profile: 'HIGH',
                        RateControlMode: 'QVBR',
                        ScanType: 'PROGRESSIVE',
                        SceneChangeDetect: 'ENABLED',
                        Slices: 1,
                        SpatialAq: 'ENABLED',
                        SubgopLength: 'FIXED',
                        Syntax: 'DEFAULT',
                        TemporalAq: 'ENABLED',
                        TimecodeInsertion: 'DISABLED',
                    },
                },
                Height: 1080,
                Name: 'video_1080p30', // REQUIRED
                RespondToAfd: 'NONE',
                ScalingBehavior: 'DEFAULT',
                Sharpness: 50,
                Width: 1920,
            },
            {
                CodecSettings: {
                    H264Settings: {
                        AdaptiveQuantization: 'HIGH',
                        AfdSignaling: 'NONE',
                        Bitrate: 4000000,
                        BufFillPct: 90,
                        BufSize: 8000000,
                        ColorMetadata: 'INSERT',
                        EntropyEncoding: 'CABAC',
                        FlickerAq: 'ENABLED',
                        ForceFieldPictures: 'DISABLED',
                        FramerateControl: 'SPECIFIED',
                        FramerateDenominator: 1,
                        FramerateNumerator: 30,
                        GopBReference: 'ENABLED',
                        GopClosedCadence: 1,
                        GopNumBFrames: 3,
                        GopSize: 60,
                        GopSizeUnits: 'FRAMES',
                        Level: 'H264_LEVEL_AUTO',
                        LookAheadRateControl: 'HIGH',
                        MaxBitrate: 4000000,
                        NumRefFrames: 3,
                        ParControl: 'SPECIFIED',
                        Profile: 'HIGH',
                        RateControlMode: 'QVBR',
                        ScanType: 'PROGRESSIVE',
                        SceneChangeDetect: 'ENABLED',
                        Slices: 1,
                        SpatialAq: 'ENABLED',
                        SubgopLength: 'FIXED',
                        Syntax: 'DEFAULT',
                        TemporalAq: 'ENABLED',
                        TimecodeInsertion: 'DISABLED',
                    },
                },
                Height: 720,
                Name: 'video_720p30', // REQUIRED
                RespondToAfd: 'NONE',
                ScalingBehavior: 'DEFAULT',
                Sharpness: 100,
                Width: 1280,
            },
            {
                CodecSettings: {
                    H264Settings: {
                        AdaptiveQuantization: 'HIGH',
                        AfdSignaling: 'NONE',
                        Bitrate: 1500000,
                        BufFillPct: 90,
                        BufSize: 3000000,
                        ColorMetadata: 'INSERT',
                        EntropyEncoding: 'CABAC',
                        FlickerAq: 'ENABLED',
                        ForceFieldPictures: 'DISABLED',
                        FramerateControl: 'SPECIFIED',
                        FramerateDenominator: 1,
                        FramerateNumerator: 30,
                        GopBReference: 'ENABLED',
                        GopClosedCadence: 1,
                        GopNumBFrames: 3,
                        GopSize: 60,
                        GopSizeUnits: 'FRAMES',
                        Level: 'H264_LEVEL_AUTO',
                        LookAheadRateControl: 'HIGH',
                        MaxBitrate: 1500000,
                        NumRefFrames: 3,
                        ParControl: 'SPECIFIED',
                        ParNumerator: 4,
                        ParDenominator: 3,
                        Profile: 'HIGH',
                        RateControlMode: 'QVBR',
                        ScanType: 'PROGRESSIVE',
                        SceneChangeDetect: 'ENABLED',
                        Slices: 1,
                        SpatialAq: 'ENABLED',
                        SubgopLength: 'FIXED',
                        Syntax: 'DEFAULT',
                        TemporalAq: 'ENABLED',
                        TimecodeInsertion: 'DISABLED',
                    },
                },
                Height: 480,
                Name: 'video_480p30', // REQUIRED
                RespondToAfd: 'NONE',
                ScalingBehavior: 'STRETCH_TO_OUTPUT',
                Sharpness: 100,
                Width: 640,
            },
            {
                CodecSettings: {
                    H264Settings: {
                        AdaptiveQuantization: 'HIGH',
                        AfdSignaling: 'NONE',
                        Bitrate: 750000,
                        BufFillPct: 90,
                        BufSize: 1500000,
                        ColorMetadata: 'INSERT',
                        EntropyEncoding: 'CABAC',
                        FlickerAq: 'ENABLED',
                        ForceFieldPictures: 'DISABLED',
                        FramerateControl: 'SPECIFIED',
                        FramerateDenominator: 1,
                        FramerateNumerator: 30,
                        GopBReference: 'ENABLED',
                        GopClosedCadence: 1,
                        GopNumBFrames: 3,
                        GopSize: 60,
                        GopSizeUnits: 'FRAMES',
                        Level: 'H264_LEVEL_AUTO',
                        LookAheadRateControl: 'HIGH',
                        MaxBitrate: 750000,
                        NumRefFrames: 3,
                        ParControl: 'SPECIFIED',
                        ParNumerator: 4,
                        ParDenominator: 3,
                        Profile: 'HIGH',
                        RateControlMode: 'QVBR',
                        ScanType: 'PROGRESSIVE',
                        SceneChangeDetect: 'ENABLED',
                        Slices: 1,
                        SpatialAq: 'ENABLED',
                        SubgopLength: 'FIXED',
                        Syntax: 'DEFAULT',
                        TemporalAq: 'ENABLED',
                        TimecodeInsertion: 'DISABLED',
                    },
                },
                Height: 240,
                Name: 'video_240p30', // REQUIRED
                RespondToAfd: 'NONE',
                ScalingBehavior: 'STRETCH_TO_OUTPUT',
                Sharpness: 100,
                Width: 320,
            },
        ],
    },
    InputAttachments: [
        // {
        //     InputAttachmentName: 'Elemental Link 1 - Supervoid',
        //     InputId: '7555031',
        //     InputSettings: {
        //         AudioSelectors: [],
        //         CaptionSelectors: [],
        //         DeblockFilter: 'DISABLED',
        //         DenoiseFilter: 'DISABLED',
        //         FilterStrength: 1,
        //         InputFilter: 'AUTO',
        //         Smpte2038DataPreference: 'PREFER',
        //         SourceEndBehavior: 'CONTINUE',
        //     },
        // },
        {
            InputAttachmentName: 'Elemental Link',
            InputId: '3576707',
            InputSettings: {
                AudioSelectors: [],
                CaptionSelectors: [],
                DeblockFilter: 'DISABLED',
                DenoiseFilter: 'DISABLED',
                FilterStrength: 1,
                InputFilter: 'AUTO',
                Smpte2038DataPreference: 'IGNORE',
                SourceEndBehavior: 'CONTINUE',
            },
        },
    ],
    InputSpecification: {
        Codec: 'AVC',
        MaximumBitrate: 'MAX_20_MBPS',
        Resolution: 'HD',
    },
    LogLevel: 'WARNING',
    Name: '2021-07-14-test',
    RoleArn: 'arn:aws:iam::570573558182:role/MediaLiveAccessRole'
};