import Responses from "../../common/API_Responses"
import { NomadSearchUrl } from "../../common/constants"
const axios = require("axios")

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

    async function querySpecificItem(
      authToken,
      nomadRefreshToken,
      nomadClientId,
      contentDefinitionId,
      masterId
    ) {
      // Create header for the request
      const headers = new Headers()
      headers.append("Content-Type", "application/json")
      headers.append("Authorization", `Bearer ${authToken}`)

      // Build the payload body
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
        headers: headers,
        data: body,
      })

      console.log("Nomad query-specific-item-response", response)

      // Check for success
      if (response.ok) {
        // Get the response
        console.log("Nomad query-specific-item-response :: OK", response)

        // Return the response
        return response
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
    }

    const querySpecificItemResponse = querySpecificItem(
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
