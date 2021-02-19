const AWS = require('aws-sdk');

import { OptionsDynamoDB } from './constants';
const documentClient = new AWS.DynamoDB.DocumentClient(OptionsDynamoDB);

const Dynamo = {
    get: async (ID, TableName) => {
        const params = {
            TableName,
            Key: {
                ID,
            },
        };

        const data = await documentClient.get(params).promise();

        if (!data || !data.Item) {
            throw Error(`There was an error fetching the data for ID of ${ID} from ${TableName}`);
        }
        console.log("DYNAMO-GET[27]", data, '\n');

        return data.Item;
    },
    write: async (data, TableName) => {
        console.log("DYNAMO-WRITE[33] -> ", TableName, '\n', data, '\n');
        if (!data.ID) {
            throw Error('no ID on the data');
        }

        data.date = Date.now();

        const params = {
            TableName,
            Item: data,
        };

        console.log("DYNAMO-WRITE[33] PARAMS", params);
        const res = await documentClient.put(params).promise();
        if (!res) {
            throw Error(`There was an error inserting ID of ${data.ID} in table ${TableName}`);
        }

        return res;
    },
    update: async (objectId, tableName, columnName, value) => {

        const params = {
            TableName: tableName,
            Key: { ID: objectId },
            UpdateExpression: 'set #a = :x',
            ExpressionAttributeNames: { '#a' : columnName },
            ExpressionAttributeValues: {
                ':x' : value,
            }
        };

        console.log("DYNAMO-UPDATE[66]", params, '\n');
        const res = await documentClient.update(params).promise();

        if (!res) {
            throw Error(`There was an error updating ${params.Key.ID} in table ${params.TableName} on request ${params.UpdateExpression} ${params.ExpressionAttributeNames} ${params.ExpressionAttributeValues}`);
        }

        return res;
    },
    delete: async (value, TableName) => {
        const params = {
            TableName,
            Key: { ID: value }
        };
        console.log("DYNAMO-DELETE[73] -> ", TableName, '\n', params, '\n');
        return documentClient.delete(params).promise();
    },
    query: async ({ TableName, index, queryKey, queryValue }) => {
        const params = {
            TableName,
            IndexName: index,
            KeyConditionExpression: `${queryKey} = :hkey`,
            ExpressionAttributeValues: {
                ':hkey': queryValue
            }
        };

        const res = await documentClient.query(params).promise();

        return res.Items || [];
    },
    scan: async ({ TableName, filterExpression, expressionAttributes }) => {
        try {
            const params = {
                TableName,
                FilterExpression: filterExpression,
                ExpressionAttributeValues: expressionAttributes
            };
            console.log("DYNAMO-SCAN-108", params);

            const res = await documentClient.scan(params).promise();

            console.log("DYNAMO-SCAN-112", res);

            return res.Items || [];
        } catch(e) {
            console.log("DYNAMO-SCAN-117", e);
            return [];
        }
    }
};
export default Dynamo;