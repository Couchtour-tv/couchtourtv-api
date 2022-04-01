import Responses from "../../common/API_Responses"
import {
  contentDefinitionID_Asset,
  nomadPublicFolderID,
  NomadSearchUrl,
} from "../../common/constants"
import { fetchNomadRefreshLogin } from "./fetchNomadRefreshToken"
const axios = require("axios")

async function queryPublicFolder(authToken, nomadRefreshToken, nomadClientId) {
  // Build the payload body
  try {
    let body = {
      filters: [
        {
          fieldName: "contentDefinitionId",
          operator: "Equals",
          values: contentDefinitionID_Asset,
        },
        {
          fieldName: "assetType",
          operator: "Equals",
          values: 2,
        },
        {
          fieldName: "parentId",
          operator: "Equals",
          values: nomadPublicFolderID,
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

    console.log("Nomad query-public-folder-response", response)

    // Check for success
    if (response.statusText === "OK") {
      // Get the response
      console.log("Nomad query-public-folder-response :: OK", response)

      // Return the response
      return response.data
    } else {
      const nomadNewToken = await fetchNomadRefreshLogin(
        nomadRefreshToken,
        nomadClientId
      )

      if (nomadNewToken) {
        queryPublicFolder(nomadNewToken, nomadRefreshToken, nomadClientId)
      }
    }
  } catch (error) {
    console.log("Nomad query-public-folder-error", error)
    return undefined
  }
}

exports.handler = async (event) => {
  try {
    const body = await JSON.parse(event.body)
    console.log("Nomad query-public-folder-event ::", body)

    const { nomadToken, nomadRefreshToken, nomadClientId } = body

    const queryPublicFolderResponse = await queryPublicFolder(
      nomadToken,
      nomadRefreshToken,
      nomadClientId
    )

    return Responses._200(queryPublicFolderResponse)
  } catch (error) {
    console.log("Nomad query public folder | Error |", error)
    return Responses._500({
      message: "Nomad query public folder failed",
      success: false,
    })
  }
}
