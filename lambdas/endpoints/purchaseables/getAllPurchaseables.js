import { EventsTableName } from '../../common/constants';
import Responses from '../../common/API_Responses';
// import Dynamo from '../common/Dynamo';
import DynamoDb from '../../../libs/dynamodb-lib';

exports.handler = async event => {
    try {
        const events = await DynamoDb.scan({ TableName: EventsTableName });
        return Responses._200({ 'success': true, 'events': events });
    } catch (error) {
        console.log('\n', error.stack);
        return Responses._400({ 'success': false });
    }
};