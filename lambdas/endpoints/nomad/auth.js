import Responses from "../../common/API_Responses"
import { NomadLoginUrl } from "../../common/constants"

exports.handler = async (event) => {
  try {
    const body = await JSON.parse(event.body)
    console.log("Nomad Auth-event ::", body)

    const { username, password } = body

    const {
      nomadToken,
      nomadRefreshToken,
      nomadClientId,
      nomadExpirationSeconds,
    } = await fetch(NomadLoginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log("Nomad Auth-data ::", data)
        return {
          nomadToken: data.token,
          nomadRefreshToken: data.refreshToken,
          nomadClientId: data.id,
          nomadExpirationSeconds: data.expirationSeconds,
        }
      })
      .catch((err) => console.log(err))

    const nomadObject = {
      nomadToken,
      nomadRefreshToken,
      nomadClientId,
      nomadExpirationSeconds,
    }

    return Responses._200(nomadObject)
  } catch (error) {
    console.log("Cancelled Subscription | Error |", error)
    return Responses._500({
      message: "Cancelled Subscription failed",
      success: false,
    })
  }
}
