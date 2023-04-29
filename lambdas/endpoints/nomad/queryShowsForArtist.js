import Responses from "../../common/API_Responses"
import {
  contentDefinitionID_Show,
  NomadSearchUrl,
} from "../../common/constants"
import { fetchNomadRefreshLogin } from "./fetchNomadRefreshToken"
const axios = require("axios")

async function queryShowsForArtist(
  authToken,
  nomadRefreshToken,
  nomadClientId,
  primaryArtistLookupId
) {
  // Build the payload body
  try {
    let body = {
      filters: [
        {
          fieldName: "contentDefinitionId",
          operator: "Equals",
          values: contentDefinitionID_Show, // this is the content definition ID for show
        },
        {
          fieldName: "primaryArtist.lookupId",
          operator: "Equals",
          values: primaryArtistLookupId, // this is the artist ID
        },
      ],
      pageOffset: 0,
      pageSize: 100, // pagination
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

    console.log("Nomad query-show-for-artist-response", response)

    // Check for success
    if (response.statusText === "OK") {
      // Get the response
      console.log("Nomad query-show-for-artist-response :: OK", response)

      // Return the response
      return response.data
    } else {
      const nomadNewToken = await fetchNomadRefreshLogin(
        nomadRefreshToken,
        nomadClientId
      )

      if (nomadNewToken) {
        queryShowsForArtist(
          nomadNewToken,
          nomadRefreshToken,
          nomadClientId,
          primaryArtistLookupId
        )
      }
    }
  } catch (error) {
    console.log("Nomad query-show-for-artist-error", error)
    return undefined
  }
}

exports.handler = async (event) => {
  try {
    const body = await JSON.parse(event.body)
    console.log("Nomad query-show-for-artist-event ::", body)

    const {
      nomadToken,
      nomadRefreshToken,
      nomadClientId,
      primaryArtistLookupId,
    } = body

    const queryShowsForArtistResponse = await queryShowsForArtist(
      nomadToken,
      nomadRefreshToken,
      nomadClientId,
      primaryArtistLookupId
    )

    return Responses._200(queryShowsForArtistResponse)
  } catch (error) {
    console.log("Nomad query show for artist | Error |", error)
    return Responses._500({
      message: "Nomad query show for artist failed",
      success: false,
    })
  }
}
