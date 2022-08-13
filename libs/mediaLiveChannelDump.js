import { GlobalMediaLiveARN, MediaLiveAccessRoleARN } from '../lambdas/common/constants';

const channelName = "Livestream HIDEF";
const egressEndpointSourceIP = "44.207.111.61";
const inputAttachments = [
  {
    "InputId": "4655713",
    "InputAttachmentName": "Couchtourtv - Logo",
    "InputSettings": {
      "SourceEndBehavior": "CONTINUE",
      "InputFilter": "AUTO",
      "FilterStrength": 1,
      "DeblockFilter": "DISABLED",
      "DenoiseFilter": "DISABLED",
      "Smpte2038DataPreference": "IGNORE",
      "AudioSelectors": [],
      "CaptionSelectors": []
    }
  },
  {
    "InputId": "6857570",
    "InputAttachmentName": "RTMP - Supervoid",
    "InputSettings": {
      "SourceEndBehavior": "CONTINUE",
      "InputFilter": "AUTO",
      "FilterStrength": 1,
      "DeblockFilter": "DISABLED",
      "DenoiseFilter": "DISABLED",
      "Smpte2038DataPreference": "IGNORE",
      "AudioSelectors": [],
      "CaptionSelectors": []
    }
  },
  {
    "InputId": "9813791",
    "InputAttachmentName": "Elemental Link - A",
    "InputSettings": {
      "SourceEndBehavior": "CONTINUE",
      "InputFilter": "AUTO",
      "FilterStrength": 1,
      "DeblockFilter": "DISABLED",
      "DenoiseFilter": "DISABLED",
      "Smpte2038DataPreference": "PREFER",
      "AudioSelectors": [],
      "CaptionSelectors": []
    }
  }
];

const destinationOptions = [
  {
    "Id": "kvd3bh",
    "Settings": [],
    "MediaPackageSettings": [
      {
        "ChannelId": "2022-The-Disco-Biscuits"
      }
    ]
  },
  {
    "Id": "clmtwp",
    "Settings": [
      {
        "url": "s3ssl://couchtour-media-live-archive/archive/[RENAME]/index"
      }
    ],
    "MediaPackageSettings": []
  }
];

const channelParams = {
  "Name": channelName,
  "Id": "1400131",
  "Arn": GlobalMediaLiveARN,
  "InputAttachments": inputAttachments,
  "State": "IDLE",
  "PipelinesRunningCount": 0,
  "Destinations": destinationOptions,
  "EgressEndpoints": [
    {
      "sourceIp": egressEndpointSourceIP
    }
  ],
  "EncoderSettings": {
    "audioDescriptions": [
      {
        "audioSelectorName": "Default",
        "codecSettings": {
          "aacSettings": {
            "inputType": "NORMAL",
            "bitrate": 320000,
            "codingMode": "CODING_MODE_2_0",
            "rawFormat": "NONE",
            "spec": "MPEG4",
            "profile": "LC",
            "rateControlMode": "CBR",
            "sampleRate": 48000
          }
        },
        "audioTypeControl": "FOLLOW_INPUT",
        "languageCodeControl": "FOLLOW_INPUT",
        "name": "audio_1"
      },
      {
        "audioSelectorName": "Default",
        "codecSettings": {
          "aacSettings": {
            "inputType": "NORMAL",
            "bitrate": 320000,
            "codingMode": "CODING_MODE_2_0",
            "rawFormat": "NONE",
            "spec": "MPEG4",
            "profile": "LC",
            "rateControlMode": "CBR",
            "sampleRate": 48000
          }
        },
        "audioTypeControl": "FOLLOW_INPUT",
        "languageCodeControl": "FOLLOW_INPUT",
        "name": "audio_2"
      },
      {
        "audioSelectorName": "Default",
        "codecSettings": {
          "aacSettings": {
            "inputType": "NORMAL",
            "bitrate": 128000,
            "codingMode": "CODING_MODE_2_0",
            "rawFormat": "NONE",
            "spec": "MPEG4",
            "profile": "LC",
            "rateControlMode": "CBR",
            "sampleRate": 48000
          }
        },
        "audioTypeControl": "FOLLOW_INPUT",
        "languageCodeControl": "FOLLOW_INPUT",
        "name": "audio_3"
      },
      {
        "audioSelectorName": "Default",
        "codecSettings": {
          "aacSettings": {
            "inputType": "NORMAL",
            "bitrate": 128000,
            "codingMode": "CODING_MODE_2_0",
            "rawFormat": "NONE",
            "spec": "MPEG4",
            "profile": "LC",
            "rateControlMode": "CBR",
            "sampleRate": 48000
          }
        },
        "audioTypeControl": "FOLLOW_INPUT",
        "languageCodeControl": "FOLLOW_INPUT",
        "name": "audio_4"
      },
      {
        "audioTypeControl": "FOLLOW_INPUT",
        "languageCodeControl": "FOLLOW_INPUT",
        "name": "audio_ik0o8d"
      }
    ],
    "captionDescriptions": [],
    "featureActivations": {
      "inputPrepareScheduleActions": "ENABLED"
    },
    "outputGroups": [
      {
        "outputGroupSettings": {
          "mediaPackageGroupSettings": {
            "destination": {
              "destinationRefId": destinationOptions[0]["Id"]
            }
          }
        },
        "name": "HD",
        "outputs": [
          {
            "outputSettings": {
              "mediaPackageOutputSettings": {}
            },
            "outputName": "1080p30",
            "videoDescriptionName": "video_1080p30",
            "audioDescriptionNames": [
              "audio_1"
            ],
            "captionDescriptionNames": []
          },
          {
            "outputSettings": {
              "mediaPackageOutputSettings": {}
            },
            "outputName": "720p30",
            "videoDescriptionName": "video_720p30",
            "audioDescriptionNames": [
              "audio_2"
            ],
            "captionDescriptionNames": []
          },
          {
            "outputSettings": {
              "mediaPackageOutputSettings": {}
            },
            "outputName": "480p30",
            "videoDescriptionName": "video_480p30",
            "audioDescriptionNames": [
              "audio_3"
            ],
            "captionDescriptionNames": []
          },
          {
            "outputSettings": {
              "mediaPackageOutputSettings": {}
            },
            "outputName": "240p30",
            "videoDescriptionName": "video_240p60",
            "audioDescriptionNames": [
              "audio_4"
            ],
            "captionDescriptionNames": []
          }
        ]
      },
      {
        "outputGroupSettings": {
          "archiveGroupSettings": {
            "destination": {
              "destinationRefId": destinationOptions[1]["Id"]
            },
            "rolloverInterval": 300
          }
        },
        "name": "[RENAME]",
        "outputs": [
          {
            "outputSettings": {
              "archiveOutputSettings": {
                "nameModifier": "-$dt$",
                "containerSettings": {
                  "m2tsSettings": {
                    "ccDescriptor": "DISABLED",
                    "ebif": "NONE",
                    "nielsenId3Behavior": "NO_PASSTHROUGH",
                    "programNum": 1,
                    "patInterval": 100,
                    "pmtInterval": 100,
                    "pcrControl": "PCR_EVERY_PES_PACKET",
                    "pcrPeriod": 40,
                    "timedMetadataBehavior": "NO_PASSTHROUGH",
                    "bufferModel": "MULTIPLEX",
                    "rateMode": "CBR",
                    "audioBufferModel": "ATSC",
                    "audioStreamType": "DVB",
                    "audioFramesPerPes": 2,
                    "segmentationStyle": "MAINTAIN_CADENCE",
                    "segmentationMarkers": "NONE",
                    "ebpPlacement": "VIDEO_AND_AUDIO_PIDS",
                    "ebpAudioInterval": "VIDEO_INTERVAL",
                    "esRateInPes": "EXCLUDE",
                    "arib": "DISABLED",
                    "aribCaptionsPidControl": "AUTO",
                    "absentInputAudioBehavior": "ENCODE_SILENCE",
                    "pmtPid": "480",
                    "videoPid": "481",
                    "audioPids": "482-498",
                    "dvbTeletextPid": "499",
                    "dvbSubPids": "460-479",
                    "scte27Pids": "450-459",
                    "scte35Pid": "500",
                    "scte35Control": "NONE",
                    "klv": "NONE",
                    "klvDataPids": "501",
                    "timedMetadataPid": "502",
                    "etvPlatformPid": "504",
                    "etvSignalPid": "505",
                    "aribCaptionsPid": "507"
                  }
                }
              }
            },
            "outputName": "zwkefj",
            "videoDescriptionName": "video_7391db",
            "audioDescriptionNames": [
              "audio_ik0o8d"
            ],
            "captionDescriptionNames": []
          }
        ]
      }
    ],
    "timecodeConfig": {
      "source": "SYSTEMCLOCK"
    },
    "videoDescriptions": [
      {
        "codecSettings": {
          "h264Settings": {
            "afdSignaling": "NONE",
            "colorMetadata": "INSERT",
            "adaptiveQuantization": "HIGH",
            "bitrate": 6000000,
            "bufSize": 12000000,
            "bufFillPct": 90,
            "entropyEncoding": "CABAC",
            "flickerAq": "ENABLED",
            "forceFieldPictures": "DISABLED",
            "framerateControl": "SPECIFIED",
            "framerateNumerator": 30000,
            "framerateDenominator": 1001,
            "gopBReference": "ENABLED",
            "gopClosedCadence": 1,
            "gopNumBFrames": 3,
            "gopSize": 60,
            "gopSizeUnits": "FRAMES",
            "subgopLength": "FIXED",
            "scanType": "PROGRESSIVE",
            "level": "H264_LEVEL_AUTO",
            "lookAheadRateControl": "HIGH",
            "maxBitrate": 6000000,
            "numRefFrames": 3,
            "parControl": "SPECIFIED",
            "profile": "HIGH",
            "rateControlMode": "QVBR",
            "syntax": "DEFAULT",
            "sceneChangeDetect": "ENABLED",
            "slices": 1,
            "spatialAq": "ENABLED",
            "temporalAq": "ENABLED",
            "timecodeInsertion": "DISABLED"
          }
        },
        "height": 1080,
        "name": "video_1080p30",
        "respondToAfd": "NONE",
        "sharpness": 50,
        "scalingBehavior": "DEFAULT",
        "width": 1920
      },
      {
        "codecSettings": {
          "h264Settings": {
            "afdSignaling": "NONE",
            "colorMetadata": "INSERT",
            "adaptiveQuantization": "HIGH",
            "bitrate": 4000000,
            "bufSize": 8000000,
            "bufFillPct": 90,
            "entropyEncoding": "CABAC",
            "flickerAq": "ENABLED",
            "forceFieldPictures": "DISABLED",
            "framerateControl": "SPECIFIED",
            "framerateNumerator": 30000,
            "framerateDenominator": 1001,
            "gopBReference": "ENABLED",
            "gopClosedCadence": 1,
            "gopNumBFrames": 3,
            "gopSize": 60,
            "gopSizeUnits": "FRAMES",
            "subgopLength": "FIXED",
            "scanType": "PROGRESSIVE",
            "level": "H264_LEVEL_AUTO",
            "lookAheadRateControl": "HIGH",
            "maxBitrate": 4000000,
            "numRefFrames": 3,
            "parControl": "SPECIFIED",
            "profile": "HIGH",
            "rateControlMode": "QVBR",
            "syntax": "DEFAULT",
            "sceneChangeDetect": "ENABLED",
            "slices": 1,
            "spatialAq": "ENABLED",
            "temporalAq": "ENABLED",
            "timecodeInsertion": "DISABLED"
          }
        },
        "height": 720,
        "name": "video_720p30",
        "respondToAfd": "NONE",
        "sharpness": 100,
        "scalingBehavior": "DEFAULT",
        "width": 1280
      },
      {
        "codecSettings": {
          "h264Settings": {
            "afdSignaling": "NONE",
            "colorMetadata": "INSERT",
            "adaptiveQuantization": "HIGH",
            "bitrate": 1500000,
            "bufSize": 3000000,
            "bufFillPct": 90,
            "entropyEncoding": "CABAC",
            "flickerAq": "ENABLED",
            "forceFieldPictures": "DISABLED",
            "framerateControl": "SPECIFIED",
            "framerateNumerator": 30000,
            "framerateDenominator": 1001,
            "gopBReference": "ENABLED",
            "gopClosedCadence": 1,
            "gopNumBFrames": 3,
            "gopSize": 60,
            "gopSizeUnits": "FRAMES",
            "subgopLength": "FIXED",
            "scanType": "PROGRESSIVE",
            "level": "H264_LEVEL_AUTO",
            "lookAheadRateControl": "HIGH",
            "maxBitrate": 1500000,
            "numRefFrames": 3,
            "parControl": "SPECIFIED",
            "parNumerator": 4,
            "parDenominator": 3,
            "profile": "MAIN",
            "rateControlMode": "QVBR",
            "syntax": "DEFAULT",
            "sceneChangeDetect": "ENABLED",
            "slices": 1,
            "spatialAq": "ENABLED",
            "temporalAq": "ENABLED",
            "timecodeInsertion": "DISABLED"
          }
        },
        "height": 480,
        "name": "video_480p30",
        "respondToAfd": "NONE",
        "sharpness": 100,
        "scalingBehavior": "STRETCH_TO_OUTPUT",
        "width": 640
      },
      {
        "codecSettings": {
          "h264Settings": {
            "afdSignaling": "NONE",
            "colorMetadata": "INSERT",
            "adaptiveQuantization": "HIGH",
            "bitrate": 750000,
            "bufSize": 1500000,
            "bufFillPct": 90,
            "entropyEncoding": "CABAC",
            "flickerAq": "ENABLED",
            "forceFieldPictures": "DISABLED",
            "framerateControl": "SPECIFIED",
            "framerateNumerator": 30000,
            "framerateDenominator": 1001,
            "gopBReference": "ENABLED",
            "gopClosedCadence": 1,
            "gopNumBFrames": 3,
            "gopSize": 60,
            "gopSizeUnits": "FRAMES",
            "subgopLength": "FIXED",
            "scanType": "PROGRESSIVE",
            "level": "H264_LEVEL_AUTO",
            "lookAheadRateControl": "HIGH",
            "maxBitrate": 750000,
            "numRefFrames": 3,
            "parControl": "SPECIFIED",
            "parNumerator": 4,
            "parDenominator": 3,
            "profile": "MAIN",
            "rateControlMode": "QVBR",
            "syntax": "DEFAULT",
            "sceneChangeDetect": "ENABLED",
            "slices": 1,
            "spatialAq": "ENABLED",
            "temporalAq": "ENABLED",
            "timecodeInsertion": "DISABLED"
          }
        },
        "height": 240,
        "name": "video_240p60",
        "respondToAfd": "NONE",
        "sharpness": 100,
        "scalingBehavior": "STRETCH_TO_OUTPUT",
        "width": 320
      },
      {
        "name": "video_7391db",
        "respondToAfd": "NONE",
        "sharpness": 50,
        "scalingBehavior": "DEFAULT"
      }
    ]
  },
  "RoleArn": MediaLiveAccessRoleARN,
  "InputSpecification": {
    "codec": "AVC",
    "resolution": "HD",
    "maximumBitrate": "MAX_20_MBPS"
  },
  "LogLevel": "WARNING",
  "Tags": {},
  "ChannelClass": "SINGLE_PIPELINE",
  "PipelineDetails": [],
  "MaintenanceWindow": "TUESDAY_1100",
  "MaintenanceStatus": "",
  "Maintenance": {
    "MaintenanceDay": "TUESDAY",
    "MaintenanceStartTime": "11:00"
  }
};

export default channelParams;
