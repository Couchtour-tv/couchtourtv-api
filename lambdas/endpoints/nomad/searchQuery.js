import Responses from "../../common/API_Responses"
import { NomadSearchUrl } from "../../common/constants"
import { fetchNomadRefreshLogin } from "./fetchNomadRefreshToken"
const axios = require("axios")

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
