import Responses from "../../common/API_Responses"
import { NomadPublicServerUrl } from "../../common/constants"
const axios = require("axios")

async function embedPublicVideo(assetId) {
  // Build the payload body
  try {
    // Send POST request
    let response = await axios({
      url: `${NomadPublicServerUrl}/embedded/video/${assetId}`,
      method: "get",
    })

    console.log("Nomad public-embedded-video-response", response)

    // Check for success
    if (response.statusText === "OK") {
      // Get the response
      console.log("Nomad public-embedded-video-response :: OK", response)

      // Return the response
      return response
    } else {
      console.error(
        `Embdded-video-response:: Video Asset with ID ${assetId} was not found`,
        response
      )
      return null
    }
  } catch (error) {
    console.log("Nomad public-embedded-video-error", error)
    return undefined
  }
}

exports.handler = async (event) => {
  try {
    const body = await JSON.parse(event.body)
    console.log("Nomad public-embedded-video-event ::", body)

    const { assetId } = body

    const embedPublicVideoResponse = await embedPublicVideo(assetId)

    return Responses._200(embedPublicVideoResponse)
  } catch (error) {
    console.log("Nomad public embedded video | Error |", error)
    return Responses._500({
      message: "Nomad public embedded video failed",
      success: false,
    })
  }
}
