import Responses from "../../common/API_Responses"
import { AppSyncUrlOriginal, GraphqlKeyOuputOirginal } from '../../common/constants';
const axios = require("axios");
import gql from "graphql-tag";
const graphql = require("graphql");
const { print } = graphql;

exports.handler = async (event) => {
  console.log('\n\n--Inside [ingestVODmerchandise.js]');
  console.log('event: \n\n', event);
  console.log('event.body: \n\n', event.body);
  console.log('event.body type: \n\n', typeof(event.body));
  // const body = JSON.parse(event.body);
  const body = JSON.parse(JSON.stringify(event.body));
  console.log('body: \n\n', body);

  try {
      
    console.log('--Creating gql object..')
    var addOneVODmerchandise = gql`
      mutation addOneVODmerchandise {
        createMerchandise(input: {
          type: vod, 
          VODMetaData: {
            band: ${body.band}, date: ${body.date}, description: "Set: ${body.set}",
            location: ${body.Location}, price: "999", venue: ${body.Venue}, videoURL: ${body.url}
          }, 
          date: "", 
          description: "", 
          name: "", 
          price: ""
        }
      ) {
        date
        name
        platformFee
        price
        description
        VODMetaData {
          band
          date
          description
          location
          price
          venue
          videoURL
        }
      }
    }`

  } catch (error) {

    const _message = "error creating gql: ";
    console.log(_message, error);
    return Responses._500({
      success: false,
      message: _message
    });
  
  }

  try {
    console.log('--Executing API/gql call..');
    console.log('addOneVODmerchandise:\n\n');
    console.log(addOneVODmerchandise);

    const graphqlData = await axios({
      url: "https://p2d32ns7mnhhjogwd365jrnzdq.appsync-api.us-east-1.amazonaws.com/graphql",
      method: "post",
      headers: {
        "x-api-key": "da2-w3fua4opgzaxjgfkfjxs7xvh7m",
      },
      data: {
        query: print(addOneVODmerchandise),
        // query: addOneVODmerchandise
      },
    });

    const gqlResp = graphqlData;
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

  } catch (error) {

    const _message = "error posting to appsync: ";
    console.log(_message, error)
    return Responses._500({
      success: false,
      message: _message
    });
  
  }
};