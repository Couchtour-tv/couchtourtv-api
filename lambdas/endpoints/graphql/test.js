import Responses from "../../common/API_Responses"

const axios = require("axios")
// const gql = require("graphql-tag")
import gql from "graphql-tag"
const graphql = require("graphql")
const { print } = graphql

// REACT_APP_API_GATEWAY_NAME = "stg-branchdna-api"

// const apiName = "stg-branchdna-api"

// const apiName = process.env.REACT_APP_API_GATEWAY_NAME

// export default async function apiPost(path, myInit) {
//   const initWithBody = { body: myInit }
//   return await API.post(apiName, path, initWithBody)
// }

/*
	:: Example Integrations
		- https://docs.amplify.aws/guides/functions/graphql-from-lambda/q/platform/js/#signing-a-request-from-lambda
		- https://aws.amazon.com/blogs/mobile/appsync-direct-lambda/
		- https://cloudacademy.com/blog/how-to-write-graphql-apps-using-aws-lambda/
		- https://www.serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb/
*/

const listUsersEmailsAndUserNames = gql`
  query listUsersEmailsAndUserNames {
    listUsers {
      items {
        id
        username
        email
      }
    }
  }
`
const REACT_APP_API_APPSYNC_URL =
  "https://p2d32ns7mnhhjogwd365jrnzdq.appsync-api.us-east-1.amazonaws.com/graphql"
// "http://localhost:3000/stg/api/v1/graphql-test"
// "https://2ygrym23r3.execute-api.us-east-1.amazonaws.com/stg"
// REACT_APP_API_GATEWAY_REGION = "us-east-1"
// const REACT_APP_API_GATEWAY_NAME = "stg-branchdna-api"
// const API_APPSYNC_NAME_GRAPHQLAPIKEYOUTPUT = "oghrbdggl5e53jkhdrau2kzz4e"
const API_APPSYNC_NAME_GRAPHQLAPIKEYOUTPUT = "da2-w3fua4opgzaxjgfkfjxs7xvh7m"
// const API_APPSYNC_NAME_GRAPHQLAPIKEYOUTPUT = "couchtourtvamplify-ctqa"
//  /stg/api/v1/graphql-test

exports.handler = async (event) => {
  console.log("hello world")
  console.log(
    "graphql/test-event ::",
    event,
    "______________________________",
    "END TEST EVENT",
    "______________________________"
  )
  try {
    const graphqlData = await axios({
      url: REACT_APP_API_APPSYNC_URL,
      method: "post",
      headers: {
        "x-api-key": API_APPSYNC_NAME_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(listUsersEmailsAndUserNames),
      },
    })

    const body = {
      graphqlData: graphqlData.data.data.listUsers,
    }

    // const requestBody = await JSON.parse(event.body)
    // console.log("\n\n--RequestBody ::", requestBody)
    console.log("\n\n--ResponseBody ::", JSON.stringify(body))
    // Do GraphQL interfacing via appsync api
    // return Responses._200({
    //   success: true,
    // })
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  } catch (error) {
    // console.log("apiMap error:", error)
    console.log("error posting to appsync: ", error)
    return Responses._500({
      success: false,
    })
  }
}
