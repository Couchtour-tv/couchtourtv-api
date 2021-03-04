import handler from '../../libs/handler-lib';
import dynamoDb from '../../libs/dynamodb-lib';

/* eslint-disable no-unused-vars */
export const main = handler(async (event, context) => {
    const claims = event.requestContext.authorizer.claims;

    const subject = claims.sub; // user ID
    const email = claims.email;

    const tableName = `${process.env.deployStage}-movies`;

    // TODO: filter video list based on user
    const params = {
        TableName: tableName
    };

    const result = await dynamoDb.scan(params);

    return result.Items;
});
