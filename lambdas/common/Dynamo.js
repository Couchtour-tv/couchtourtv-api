const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
    async get(ID, TableName) {
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
        console.log(data);

        return data.Item;
    },

    async write(data, TableName) {
        if (!data.ID) {
            throw Error('no ID on the data');
        }

        const params = {
            TableName,
            Item: data,
        };

        const res = await documentClient.put(params).promise();

        if (!res) {
            throw Error(`There was an error inserting ID of ${data.ID} in table ${TableName}`);
        }

        return data;
    },

    async delete(ID, TableName) {
        const params = {
            TableName,
            Key: {
                ID,
            },
        };

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
        const params = {
            TableName,
            FilterExpression: filterExpression,
            ExpressionAttributeValues: expressionAttributes
        };
        console.log(params);

        const res = await documentClient.scan(params).promise();

        return res.Items || [];
    }
};

export default Dynamo;





