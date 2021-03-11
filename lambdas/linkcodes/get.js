import handler from '../../libs/handler-lib';
import dynamoDb from '../../libs/dynamodb-lib';
import { getIdString } from '../common/codes';

/* eslint-disable no-unused-vars */
export const main = handler(async (event, context) => {
    const ip = event.requestContext.identity.sourceIp;
    const ipv6 = '::1'; // AWS API Gateway doesn't do ipv6 (yet?)
    const uuid = event.queryStringParameters.uuid;
    const id = getIdString(ip, ipv6, uuid);
    const tableName = 'ct-codes';

    console.log(`Locating code for: ${id}`);

    const params = {
        TableName: tableName,
        Key: {
            identifier: id
        }
    };

    const result = await dynamoDb.get(params);
    let item = {};
    if (result.Item) {
        item = result.Item;
    } else {
        const code = generateLinkcode();
        const paramsPut =  {
            TableName: tableName,
            Item: {
                identifier: id,
                code,
                ip,
                ipv6,
                expires: Date.now() + (60 * 60 * 5),
                jwttoken: 'UNAUTHENTICATED'
            }
        };
        const res = await dynamoDb.put(paramsPut);
        item = paramsPut.Item;
    }

    const response = {
        linkcode: item.code,
        uuid
    };

    // Return the retrieved item
    return response;
});

function generateLinkcode()
{
    const a=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L',
             'M', 'N', 'P', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
             'Z'];
    a.sort(() => Math.random() - 0.5);
    const b = [];
    for(let i = 0; i < 6; i++) {
        b.push(a[Math.round(Math.random() * (a.length - 1))]);
    }
    return b.join('');
}
