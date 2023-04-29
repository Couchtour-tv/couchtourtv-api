// const AWS = require('aws-sdk');

import Responses from "../../common/API_Responses"
import {
  AppSyncUrlOriginal,
  GraphqlKeyOutputOriginal,
} from "../../common/constants"
const axios = require("axios")
import gql from "graphql-tag"
const graphql = require("graphql")
const { print } = graphql

const listVOD = gql`
  query ListVOD {
    listMerchandises(filter: { type: { eq: vod } }) {
      items {
        bandMerchandise {
          items {
            bandId
            id
            merchandiseId
            band {
              bandName
              id
              logo {
                name
              }
              pictureId
              socialMediaLinks {
                facebookLink
                instagramLink
                tiktokLink
                twitchLink
                twitterLink
                youtubeLink
              }
              website
            }
          }
        }
        version
        type
        name
        platformFee
        VODMetaData {
          band
          date
          description
          location
          price
          videoURL
          venue
        }
        active
        id
        image {
          name
          file {
            key
          }
        }
      }
    }
  }
`

exports.handler = async (event) => {
  try {
    console.log("Get all VOD ::", event)

    const vod = await axios({
      url: AppSyncUrlOriginal,
      method: "post",
      headers: {
        "x-api-key": GraphqlKeyOutputOriginal,
      },
      data: {
        query: print(listVOD),
      },
    })
    console.log("Get all VOD | Succeeded |:", vod.data.data.listMerchandises)
    return Responses._200(vod.data.data.listMerchandises)
  } catch (error) {
    console.log("Get all VOD | Error |", error)
    return Responses._500({
      message: "Get all VOD failed",
      success: false,
      error: JSON.stringify(error),
    })
  }
}

// sls invoke local --function get-all-vod
