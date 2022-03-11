import Responses from "../../common/API_Responses"
import { NomadSearchUrl } from "../../common/constants"
import { fetchNomadRefreshLogin } from "./fetchNomadRefreshToken"
const axios = require("axios")

async function querySpecificItem(
  authToken,
  nomadRefreshToken,
  nomadClientId,
  contentDefinitionId,
  masterId
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
        {
          fieldName: "masterId",
          operator: "Equals",
          values: masterId,
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

    console.log("Nomad query-specific-item-response", response)

    // Check for success
    if (response.statusText === "OK") {
      // Get the response
      console.log("Nomad query-specific-item-response :: OK", response)

      // Return the response
      return response.data
    } else {
      const nomadNewToken = await fetchNomadRefreshLogin(
        nomadRefreshToken,
        nomadClientId
      )

      if (nomadNewToken) {
        querySpecificItem(
          nomadNewToken,
          nomadRefreshToken,
          nomadClientId,
          contentDefinitionId,
          masterId
        )
      }
    }
  } catch (error) {
    console.log("Nomad query-specific-item-error", error)
    return undefined
  }
}

exports.handler = async (event) => {
  try {
    const body = await JSON.parse(event.body)
    console.log("Nomad query-specific-item-event ::", body)

    const {
      nomadToken,
      nomadRefreshToken,
      nomadClientId,
      contentDefinitionId,
      masterId,
    } = body

    const querySpecificItemResponse = await querySpecificItem(
      nomadToken,
      nomadRefreshToken,
      nomadClientId,
      contentDefinitionId,
      masterId
    )

    return Responses._200(querySpecificItemResponse)
  } catch (error) {
    console.log("Nomad query specific item | Error |", error)
    return Responses._500({
      message: "Nomad query specific item failed",
      success: false,
    })
  }
}
