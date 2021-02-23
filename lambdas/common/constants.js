// constants

export const OptionsDynamoDB = {
	apiVersion: process.env.DYNAMODB_APIVERSION,
	region: process.env.AWS_REGION,
	endpoint: process.env.DYNAMODB_ENDPOINT
};

export const OptionsAPIGateway = {
	apiVersion: process.env.APIGATEWAY_APIVERSION,
    endpoint: process.env.WS_ENDPOINT
};

export const OptionsSNS = {
	apiVersion: process.env.SNS_APIVERSION,
};

export const SNSTableName = process.env.SNS_MESSAGES_TABLE;
export const SocketTableName = process.env.SOCKET_TABLE;
// Stubbed out For Protoytyping
export const MediaMetaTableName = process.env.MEDIA_META_TABLE;
export const NewMediaMetaTableName = process.env.NEW_MEDIA_META_TABLE;