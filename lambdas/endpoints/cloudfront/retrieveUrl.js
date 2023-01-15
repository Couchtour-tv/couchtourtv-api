import Responses from "../../common/API_Responses"

const cloudfrontUrl =
  "https://d2yjg8b3twxdr5.cloudfront.net/out/v1/48de41ca45e94755957a6f43ea856894/index.m3u8"

exports.handler = async (event) => {
  console.log("retrieve-cloudfront-url-event ::", event)
  try {
    const body = await JSON.parse(event.body)
    const { key, value } = body
    console.log("retrieve-cloudfront-url-body ::", body)

    return Responses._200({ cloudfrontUrl })
  } catch (error) {
    console.log("retrieve-cloudfront-url | Error |", error)

    return Responses._500({
      message: "Retrieve cloudfront url failed",
      success: false,
    })
  }
}
