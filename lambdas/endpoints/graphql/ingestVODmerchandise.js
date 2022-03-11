import Responses from "../../common/API_Responses"
const axios = require("axios");
import gql from "graphql-tag";
const graphql = require("graphql");
const { print } = graphql;

exports.handler = async (event) => {

  console.log('\n\n--Inside [ingestVODmerchandise.js]');

  console.log('event: \n\n', event);
  console.log('event.body: \n\n', event.body);
  console.log('event.body type: \n\n', typeof(event.body));

  const body = JSON.parse(event.body);
  console.log('body: \n\n', body);

  try {
    console.log('--Creating gql object..');
    const _location = await body.Location.split(',')[0];
    var addOneVODmerchandise = gql`
      mutation addOneVODmerchandise {
        createMerchandise(input: {
          type: vod,
          VODMetaData: {
            band: "${body.band}", date: "${body.date}", description: "Set: ${body.set}",
            location: "${_location}", price: "999", venue: "${body.Venue}", videoURL: "${body.url}"
          },
          date: "${body.date}",
          description: "${body.Venue}",
          name: "${body.band}",
          price: ""
        }
      ) { id }
    }`;

    console.log('--Executing API/gql call..');
    console.log('addOneVODmerchandise:\n\n');
    console.log(addOneVODmerchandise);

    const query = await print(addOneVODmerchandise);
    console.log('query:\n\n');
    console.log(query);

    const graphqlData = await axios({
      url: "https://p2d32ns7mnhhjogwd365jrnzdq.appsync-api.us-east-1.amazonaws.com/graphql",
      method: "post",
      headers: {
        "x-api-key": "da2-w3fua4opgzaxjgfkfjxs7xvh7m",
      },
      data: {
        query: query,
        // query: print(addOneVODmerchandise),
      },
    });
    console.log('\n\n--RespAppSync: ', graphqlData);
    return {
      statusCode: 200,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (error) {
    console.log('error:', error);
    return Responses._500({
      success: false,
      message: error
    });
  }
};