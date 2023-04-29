const axios = require("axios")

export async function fetchNomadRefreshLogin(refreshToken, clientId) {
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
