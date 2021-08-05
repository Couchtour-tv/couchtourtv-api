import { UserTableName } from '../../common/constants';
import Responses from '../../common/API_Responses';
// import Dynamo from '../common/Dynamo';
import DynamoDb from '../../../libs/dynamodb-lib';

exports.handler = async event => {
    try {
        const payload = JSON.parse(event.body);
        const userObj= await DynamoDb.query({
            TableName: UserTableName,
            KeyConditionExpression: 'emailAddress = :v1',
            ExpressionAttributeValues: { ':v1': payload.email}
        });
        return Responses._200({ 'success': true, 'user_meta': userObj });
    } catch (error) {
        console.log('\n', error.stack);
        return Responses._400({ 'success': false });
    }
};