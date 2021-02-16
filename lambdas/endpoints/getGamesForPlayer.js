const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo');

const { withHooks } = require('../common/hooks');

const tableName = "SNSMessages";

const handler = async event => {
    if (!event.pathParameters.ID) {
        // failed without a ID
        return Responses._400({ message: 'missing the ID from the path' });
    }

    const ID = event.pathParameters.ID;

    // let filterExpression = `ID = :ID`;
    let filterExpression = `score >= :score`;
    let expressionAttributes = {
        ':score': Number(ID),
    };

    // if (event.queryStringParameters && event.queryStringParameters.minScore) {
    //     const minScore = event.queryStringParameters.minScore;
    //     // filterExpression = `ID = :ID and score >= :minScore`;
    //     filterExpression = `ID = :ID and score >= :minScore`;
    //     expressionAttributes = {
    //         ':ID': ID,
    //         ':minScore': Number(minScore),
    //     };
    // }

    const games = await Dynamo.scan({
        TableName: tableName,
        filterExpression,
        expressionAttributes,
    });

    return Responses._200(games);
};

exports.handler = withHooks(handler);