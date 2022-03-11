import Responses from "../../common/API_Responses"
import { AppSyncUrlOriginal, GraphqlKeyOuput } from '../../common/constants';
const axios = require("axios");
import gql from "graphql-tag";
const graphql = require("graphql");
const { print } = graphql;

const listUsersEmailsAndUserNames = gql`
  mutation MyMutation {
    deleteMerchandise(input: {id: ""}) {
      id
    }
  }
`
exports.handler = async (event) => {
  console.log('\n\n--Inside [deleteVODmerchandiseById.js]')
  try {
    await axios({
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
      body: JSON.stringify({
        'sucess': true
      }),
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