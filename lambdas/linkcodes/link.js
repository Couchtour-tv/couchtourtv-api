import handler from '../../libs/handler-lib';
import dynamoDb from '../../libs/dynamodb-lib';

/* eslint-disable no-unused-vars */
export const main = handler(async (event, context) => {
    // NOTE: the info of the user making the call is in
    // event.requestContext.authorizer.claims
    // but we only need the token:
    const jwttoken = event.headers.Authorization;

    if (!jwttoken) {
        throw new Error('Execution without token');
    }

    const tableName = `${process.env.deployStage}-codes`;
    const body = JSON.parse(event.body);
    const code = body.code;

    if (!code) {
        throw new Error('Bad Request: no code');
    }

    const getParams = {
        TableName: tableName,
        IndexName: 'ix0lookup',
        KeyConditionExpression: 'code = :code',
        ExpressionAttributeValues: {
            ':code': code.toUpperCase()
        },
        ProjectionExpression: 'identifier',
    };
    const result = await dynamoDb.query(getParams);

    if (!(result && result.Count === 1)) {
        throw new Error(`Item not found with code ${code}`);
    }

    const params = {
        TableName: tableName,
        Key: { 'identifier': result.Items[0].identifier },
        UpdateExpression: 'set jwttoken=:t',
        ExpressionAttributeValues: {
            ':t': jwttoken
        }
    };
    const res = await dynamoDb.update(params);

    console.log('WOW');
    console.log(res);
});
