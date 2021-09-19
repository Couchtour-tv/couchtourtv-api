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
	region: process.env.CODE_AWS_REGION,
	endpoint: process.env.DYNAMODB_ENDPOINT
};

// DynamoDB  TableNames
export const SocketTableName = process.env.SOCKETS_TABLE;
export const NotesTableName = process.env.NOTES_TABLE;
export const MediaMetaTableName = process.env.MEDIA_META_TABLE;
export const DevicesTableName = process.env.DEVICES_TABLES;
export const UserTableName = process.env.USER_TABLE;
export const NewPurchasesTableName = process.env.NEW_PURCHASES_TABLE;
export const CreditCardTableName = process.env.CREDIT_CARD_TABLE;
export const TransactionsTableName = process.env.TRANSACTIONS_TABLE;
export const EventsTableName = process.env.EVENTS_TABLE;
export const TicketsTableName = process.env.TICKETS_TABLE;
export const AcquisitionsTableName = process.env.ACQUISITIONS_TABLE;
export const StripeSuccessfulCheckoutTableName = process.env.STRIPE_WEBHOOK_SUCCESS_CHECKOUT;
export const RequestResponses = process.env.REQUEST_RESPONSES;
export const MoviesTable = process.env.MOVIES_TABLE;
export const PurchasesTable = process.env.PURCHASES_TABLE;
export const MaestroEventsTable = process.env.MAESTRO_EVENTS;
export const MaestroSalesTable = process.env.MAESTRO_SALES;

// User Pool
export const UserPoolId = process.env.USER_POOL_ID;

// Cognito
export const OptionsCognito = {
	region: process.env.COGNITO_REGION
};

// Credit card processing
export const StripeSecretKey = process.env.STRIPE_SECRET_KEY;
export const StripeCurrency = process.env.STRIPE_CURRENCY;
export const StripeCustomerDescirption = process.env.STRIPE_CUSTOMER_DESCRIPTION;
export const StripeIntentDescirption = process.env.STRIPE_INTENT_DESCRIPTION;
export const StripeReoccuringPaymentInterval = process.env.STRIPE_REOCCURING_PAYMENT;
export const StripeApiMap = {
	apiMap: 'api/v1/stripe-api-map',
	createPaymentIntent: 'api/v1/stripe-create-payment-intent',
	createCustomer: 'api/v1/stripe-create-customer',
	attachPaymentMethod: 'api/v1/stripe-attach-payment-method',
	detachPaymentMethod: 'api/v1/stripe-detach-payment-method',
	updatePaymentMethod: 'api/v1/stripe-update-payment-method',
	updatePaymentMethod: 'api/v1/stripe-update-payment-method',
	createPriceObj: 'api/v1/stripe-create-price',
	createReoccuringPriceObj: 'api/v1/stripe-create-reoccuring-price',
	createProduct: 'api/v1/stripe-create-product',
	retrieveProduct: 'api/v1/stripe-retrieve-product',
	listProducts: 'api/v1/stripe-list-products',
	updateProducts: 'api/v1/stripe-update-product',
	createSubsription: 'api/v1/stripe-create-subscription',
	updateSubscription: 'api/v1/stripe-update-subscription',
	cancelSubscription: 'api/v1/stripe-cancel-subscription'
};