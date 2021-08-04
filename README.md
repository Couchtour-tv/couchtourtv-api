#### Installation / Dependencies : 

To use this repo locally you need to have the [Serverless framework](https://serverless.com) installed :

``` bash
$ npm install serverless -g
```

.. And the Additional Serverless Plugins Used In this Project : 

``` bash
$ npm install serverless -g
$ npm install serverless-bundle -g
$ npm install serverless-offline -g
$ npm install serverless-dotenv-plugin -g
$ npm install serverless-dynamodb-local -g
$ npm install serverless-dynamodb-seed -g
$ npm install serverless-vpc-plugin -g
```

.. Make Sure To Have Java RunTime Installed Locally : 

```bash
Web Download: 
https://www.java.com/en/download/

Brew: 
https://mkyong.com/java/how-to-install-java-on-mac-osx/#homebrew-install-latest-java-on-macos
```

.. Make Sure To Have Dynamo Installed Locally : 

```bash
https://www.serverless.com/plugins/serverless-dynamodb-local

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html
java -Djava.library.path=./DynamoDBLocal_lib -jar ~/Downloads/dynamodb_local_latest/DynamoDBLocal.jar -sharedDb
```

Clone this repo and install the NPM packages.

``` bash
$ git clone git@github.com:Couchtour-tv/ccouchtourtv-api.git
$ npm install
```

#### Usage : 

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
		wscat -c QA_WEBSOCKET_WSS_URL
```


``` bash
PRODUCTION DEPLOY

	1. serverless deploy --stage prod

	2. connect to wscat to test
		wscat -c PRODUCTION_WEBSOCKET_WSS_URL
```

#### Local Testing w Python:

``` bash
python

--create virtualenv and install websocket requirements::
	cd test/local_sockets
	python3 -m venv env-socket-test
	source env-socket-test/bin/activate
	pip install -r env-socket-test-requirements.txt

-- Run:
	python socket_local_sync.py
	python socket_local_async.py

--deactivate
	deactivate
```

#### DyanomDb / Databse Seeding :

```bash
aws dynamodb list-tables --endpoint-url http://localhost:8000 >> resources/seeds/tables.json
aws dynamodb scan --table-name ct-CreditCards --endpoint-url http://localhost:8000 >> resources/seeds/creditCards.json
aws dynamodb scan --table-name ct-Users --endpoint-url http://localhost:8000 >> resources/seeds/users.json
```


