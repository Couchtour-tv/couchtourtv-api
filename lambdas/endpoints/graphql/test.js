import Responses from '../../common/API_Responses';
/*
	:: Example Integrations
		- https://docs.amplify.aws/guides/functions/graphql-from-lambda/q/platform/js/#signing-a-request-from-lambda
		- https://aws.amazon.com/blogs/mobile/appsync-direct-lambda/
		- https://cloudacademy.com/blog/how-to-write-graphql-apps-using-aws-lambda/
		- https://www.serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb/
*/
exports.handler = async event => {
	console.log('graphql/test-event ::', event);
	try {
		const body = await JSON.parse(event.body);
		console.log('\n\n--RequestBody ::', body);
		// Do GraphQL interfacing via appsync api 
		return Responses._200({
			success: true
		});
	} catch (error) {
		console.log('apiMap error:', error);
		return Responses._500({
			success: false
		});
	}
};