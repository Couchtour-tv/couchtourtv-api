import Responses from "../../common/API_Responses"
import { AppSyncUrlOriginal, GraphqlKeyOuput } from '../../common/constants';
const axios = require("axios");
import gql from "graphql-tag";
const graphql = require("graphql");
const { print } = graphql;

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
exports.handler = async (event) => {
  console.log('\n\n--Inside [ingestVODmerchandise.js]')
  try {
    const graphqlData = await axios({
      url: AppSyncUrlOriginal,
      method: "post",
      headers: {
        "x-api-key": GraphqlKeyOuput,
      },
      data: {
        query: print(listUsersEmailsAndUserNames),
      },
    });
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  } catch (error) {
    console.log("error posting to appsync: ", error)
    return Responses._500({
      success: false,
    })
  }
};