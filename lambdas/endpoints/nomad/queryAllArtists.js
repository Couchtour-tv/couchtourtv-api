import Responses from "../../common/API_Responses"
import {
  contentDefinitionID_AllArtists,
  NomadSearchUrl,
} from "../../common/constants"
import { fetchNomadRefreshLogin } from "./fetchNomadRefreshToken"
const axios = require("axios")

async function queryAllArtists(
  authToken,
  nomadRefreshToken,
  nomadClientId
) {
  // Build the payload body
  try {
    let body = {
      filters: [
        {
          fieldName: "contentDefinitionId",
          operator: "Equals",
          values: contentDefinitionID_AllArtists,
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

    console.log("Nomad query-all-artist-response", response)

    // Check for success
    if (response.statusText === "OK") {
      // Get the response
      console.log("Nomad query-all-artist-response :: OK", response)

      // Return the response
      return response.data
    } else {
      const nomadNewToken = await fetchNomadRefreshLogin(
        nomadRefreshToken,
        nomadClientId
      )

      if (nomadNewToken) {
        queryAllArtists(nomadNewToken, nomadRefreshToken, nomadClientId)
      }
    }
  } catch (error) {
    console.log("Nomad query-all-artist-error", error)
    return undefined
  }
}

exports.handler = async (event) => {
  try {
    const body = await JSON.parse(event.body)
    console.log("Nomad query-all-artist-event ::", body)

    const { nomadToken, nomadRefreshToken, nomadClientId } = body

    const queryAllArtistsResponse = await queryAllArtists(
      nomadToken,
      nomadRefreshToken,
      nomadClientId
    )

    return Responses._200(queryAllArtistsResponse)
  } catch (error) {
    console.log("Nomad query all artist | Error |", error)
    return Responses._500({
      message: "Nomad query all artist failed",
      success: false,
    })
  }
}
