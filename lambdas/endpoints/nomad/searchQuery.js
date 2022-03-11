import Responses from "../../common/API_Responses"
import { NomadSearchUrl } from "../../common/constants"
const axios = require("axios")

async function fetchNomadRefreshLogin(refreshToken, clientId) {
  // Build the POST payload body
  let body = {
    refreshToken: refreshToken,
  }

  try {
    // Post
    const response = await axios({
      url: `https://admin-app2.${clientId}.nomad-cms.com/api/account/refresh-token`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    })

    console.log("fetch nomad refresh login response", response)
    // Check for success
    if (response.statusText === "OK") {
      // Get the JSON from the response
      console.log("fetch nomad refresh login response :: OK", response)

      // Return the token
      if (response) {
        return response.token
      }
    }

    // There was an error
    return undefined
  } catch (error) {
    console.log("fetch nomad refresh login error", error)
    return undefined
  }
}

async function retrieveSearchQuery(
  authToken,
  nomadRefreshToken,
  nomadClientId,
  searchQuery
) {
  // Build the payload body
  let body = {
    searchQuery,
    filters: [
      {
        fieldName: "contentType",
        operator: "Equals",
        values: "video/mp4",
        // values: CONTENT_DEFINITION_ID,
      },
    ],
  }

  try {
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

    console.log("Nomad search query response", response)

    // Check for success
    if (response.statusText === "OK") {
      // Get the response

      console.log("Nomad search query response :: OK", response)
      // Return the movies
      return response.data
    } else {
      const nomadNewToken = await fetchNomadRefreshLogin(
        nomadRefreshToken,
        nomadClientId
      )

      if (nomadNewToken) {
        retrieveSearchQuery(
          nomadNewToken,
          nomadRefreshToken,
          nomadClientId,
          searchQuery
        )
      }
    }
  } catch (error) {
    console.log("Nomad search query error", error)
  }
}

exports.handler = async (event) => {
  try {
    const body = await JSON.parse(event.body)
    console.log("Nomad search-query-body ::", body)

    const { nomadToken, nomadRefreshToken, nomadClientId, searchQuery } = body

    const retrieveSearchQueryResponse = await retrieveSearchQuery(
      nomadToken,
      nomadRefreshToken,
      nomadClientId,
      searchQuery
    )

    return Responses._200(retrieveSearchQueryResponse)
  } catch (error) {
    console.log("Nomad search query | Error |", error)
    return Responses._500({
      message: "Nomad search query failed",
      success: false,
    })
  }
}
