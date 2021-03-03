// constants

// API Gateway
export const OptionsAPIGateway = {
	apiVersion: process.env.APIGATEWAY_APIVERSION,
    endpoint: process.env.WS_ENDPOINT
};

// AWS SNS - text messages
export const OptionsSNS = {
	apiVersion: process.env.SNS_APIVERSION,
};
export const SNSTableName = process.env.SNS_MESSAGES_TABLE;

// DynamoDB  initializer
export const OptionsDynamoDB = {
	apiVersion: process.env.DYNAMODB_APIVERSION,
	region: process.env.AWS_REGION,
	endpoint: process.env.DYNAMODB_ENDPOINT
};

// DynamoDB  TableNames
export const SocketTableName = process.env.SOCKETS_TABLE;
export const NotesTableName = process.env.NOTES_TABLE;
export const MediaMetaTableName = process.env.MEDIA_META_TABLE;
export const DevicesTableName = process.env.DEVICES_TABLESss;
export const UserTableName = process.env.USER_TABLE;

// User Pool
export const UserPoolId = process.env.USER_POOL_ID;

// Cognito
export const OptionsCognito = {
	region: process.env.COGNITO_REGION
};

// Credit card processing
export const StripeSecretKey = process.env.STRIPE_SECRET_KEY;