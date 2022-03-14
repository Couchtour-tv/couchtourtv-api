import Responses from "../../common/API_Responses"
import {
  contentDefinitionID_Asset,
  NomadSearchUrl,
} from "../../common/constants"
import { fetchNomadRefreshLogin } from "./fetchNomadRefreshToken"
const axios = require("axios")

async function queryVideoForShow(
  authToken,
  nomadRefreshToken,
  nomadClientId,
  nomadShowId
) {
  // Build the payload body
  try {
    let body = {
      filters: [
        {
          fieldName: "contentDefinitionId",
          operator: "Equals",
          values: contentDefinitionID_Asset, // this is the content definition ID for asset
        },
        {
          fieldName: "uuidSearchField", // this is a special searching field you can use for all metadata relationships like tags and related content
          operator: "Equals",
          values: nomadShowId, // this is the show ID you want the videos for
        },
      ],
      pageOffset: 0,
      pageSize: 100,
      SearchResultFields: [
        {
          name: "previewImageFullUrl",
        },
        {
          name: "thumbnailImageFullUrl",
        },
        {
          name: "relatedVideos", // inside here is the list of videos. The one with with format of hls is the one you want – use the fullUrl field.
        },
      ],
    }

    // Send POST request
    let response = await axios({
      url: NomadSearchUrl,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      data: body,
    })

    console.log("Nomad query-video-for-show-response", response)

    // Check for success
    if (response.statusText === "OK") {
      // Get the response
      console.log("Nomad query-video-for-show-response :: OK", response)

      // Return the response
      return response.data
    } else {
      const nomadNewToken = await fetchNomadRefreshLogin(
        nomadRefreshToken,
        nomadClientId
      )

      if (nomadNewToken) {
        queryVideoForShow(
          nomadNewToken,
          nomadRefreshToken,
          nomadClientId,
          nomadShowId
        )
      }
    }
  } catch (error) {
    console.log("Nomad query-video-for-show-error", error)
    return undefined
  }
}

exports.handler = async (event) => {
  try {
    const body = await JSON.parse(event.body)
    console.log("Nomad query-video-for-show-event ::", body)

    const { nomadToken, nomadRefreshToken, nomadClientId, nomadShowId } = body

    const queryVideoForShowResponse = await queryVideoForShow(
      nomadToken,
      nomadRefreshToken,
      nomadClientId,
      nomadShowId
    )

    return Responses._200(queryVideoForShowResponse)
  } catch (error) {
    console.log("Nomad query video for show | Error |", error)
    return Responses._500({
      message: "Nomad query video for show failed",
      success: false,
    })
  }
}
