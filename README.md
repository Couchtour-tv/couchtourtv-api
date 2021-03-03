#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` bash
$ npm install serverless -g
```

Clone this repo and install the NPM packages.

``` bash
$ git clone git@github.com:Couchtour-tv/ccouchtourtv-api.git
$ npm install
```

``` bash
LOCAL DEVELOPMENT

Go to /api

	setup - make a .env file out of .env.example
	1. launch the serverless local offline server on local machine
  		npm run dev
  			aka `sls offline start --stage dev`
		offline: Offline [http for websocket] listening on http://localhost:3001
		offline: [HTTP] server ready: http://localhost:3000 🚀X
	2. if dynamo does not launch with sls offline - launch the dynamodb-local server
  		sls dynamodb start --stage dev
	3. connect the socket via wscat to test
  		wscat -c ws://localhost:3001
```

``` bash
STAGING/QA DEPLOY

	1. serverless deploy --stage qa

	2. connect to wscat to test
		wscat -c QA_WEBSOCKET_URL
```


``` bash
PRODUCTION DEPLOY

	1. serverless deploy --stage prod

	2. connect to wscat to test
		wscat -c PRODUCTION_WEBSOCKET_WSS_URL
```


#### Example DynamoDb queries

list all tables + names 

``` javascript
dynamodb.listTables({}, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```

table scan / return all items

``` javascript
var params = { TableName: 'ct-Users' };
dynamodb.scan(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```

delete all tables 

``` javascript
var params = { TableName: 'ct-Users' };
dynamodb.scan(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```

dynamodb.listTables({}, function(err, data) {
  if (err) console.error(err, err.stack)
  for (tableName of data.TableNames) {
    dynamodb.deleteTable({TableName: tableName}, function(err, data) {
      if (err) console.error(err, err.stack)
      else console.log('Deleted', tableName)
    })
  }
})