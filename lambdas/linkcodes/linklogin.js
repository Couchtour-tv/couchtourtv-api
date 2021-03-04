import handler from '../../libs/handler-lib';
import dynamoDb from '../../libs/dynamodb-lib';
import { getIdString } from '../common/codes';

/* eslint-disable no-unused-vars */
export const main = handler(async (event, context) => {
    console.log('EVENT:');
    console.log(event);

    const ip = event.requestContext.identity.sourceIp;
    const ipv6 = '::1'; // AWS API Gateway doesn't do ipv6 (yet?)
    const tableName = `${process.env.deployStage}-codes`;
    const body = JSON.parse(event.body);

    const uuid = body.uuid;
    const code = body.code;
    const id = getIdString(ip, ipv6, uuid);

    console.log(`Locating code for: ${id}`);

    const params = {
        TableName: tableName,
        Key: {
            identifier: id,
        },
        ExpressionAttributes: {
            code
        }
    };

    const result = await dynamoDb.get(params);
    if (!result.Item) {
        return {
            found: false,
            token: ''
        };
    }

    const item = result.Item;
    let token = item.jwttoken;
    if (typeof(token) === 'undefined' ||
        token === 'UNAUTHENTICATED')
    {
        token = '';
    }

    return {
        found: token.length !== 0,
        token
    };
});

