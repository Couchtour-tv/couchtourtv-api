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

	Setup:
        1. Make a .env file out of .env.example
        2. Make sure serverless dynamoDB is installed
           (this fixes the error "Error: spawn java ENOENT" on launch).
                sls dynamodb install

        Run:
	1. launch the serverless local offline server on local machine
  		npm run dev
  			aka `sls offline start --stage dev`
		offline: Offline [http for websocket] listening on http://localhost:3001
		offline: [HTTP] server ready: http://localhost:3000 🚀X
	2. if dynamo does not launch with sls offline - launch the dynamodb-local server
  		sls dynamodb start --stage dev
	3. connect the socket via wscat to test
  		wscat -c ws://localhost:3001

        Forward (needed to connect android emulator):
        1. The emulator can't easily connect to localhost, so the easiest way
           is to connect it is to use ngrok:
               ngrok start -config ./ngrok.yml api
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
