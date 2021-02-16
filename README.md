#### Usage

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed.

``` bash
$ npm install serverless -g
```

Clone this repo and install the NPM packages.

``` bash
$ git clone git@github.com:Couchtour-tv/couchtourtv-aws-api.git
$ npm install
```

``` bash
LOCAL DEVELOPMENT

Go to /api

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
PRODUCTION DEPLOY

	1. serverless deploy

	2. connect to wscat to test
		wscat -c wss://9m77tq4a3j.execute-api.us-east-1.amazonaws.com/prod
```
