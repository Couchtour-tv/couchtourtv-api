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

async function queryAllItemsDefined(
  authToken,
  nomadRefreshToken,
  nomadClientId,
  contentDefinitionId
) {
  // Build the payload body
  try {
    let body = {
      filters: [
        {
          fieldName: "contentDefinitionId",
          operator: "Contains",
          values: contentDefinitionId,
        },
      ],
      SearchResultFields: [
        {
          name: "liveChannel",
          SearchResultFields: [
            {
              name: "outputLiveVideoUrl",
            },
          ],
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

    console.log("Nomad query-all-items-defined-response", response)

    // Check for success
    if (response.statusText === "OK") {
      // Get the response
      console.log("Nomad query-all-items-defined-response :: OK", response)

      // Return the response
      return response.data
    } else {
      const nomadNewToken = await fetchNomadRefreshLogin(
        nomadRefreshToken,
        nomadClientId
      )

      if (nomadNewToken) {
        queryAllItemsDefined(
          nomadNewToken,
          nomadRefreshToken,
          nomadClientId,
          contentDefinitionId
        )
      }
    }
  } catch (error) {
    console.log("Nomad query-all-items-defined-error", error)
    return undefined
  }
}

exports.handler = async (event) => {
  try {
    const body = await JSON.parse(event.body)
    console.log("Nomad query-all-items-defined-event ::", body)

    const {
      nomadToken,
      nomadRefreshToken,
      nomadClientId,
      contentDefinitionId,
    } = body

    const queryAllItemsDefinedResponse = await queryAllItemsDefined(
      nomadToken,
      nomadRefreshToken,
      nomadClientId,
      contentDefinitionId
    )

    return Responses._200(queryAllItemsDefinedResponse)
  } catch (error) {
    console.log("Nomad query specific item | Error |", error)
    return Responses._500({
      message: "Nomad query specific item failed",
      success: false,
    })
  }
}
