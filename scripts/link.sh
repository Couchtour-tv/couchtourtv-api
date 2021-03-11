#!/bin/sh

APIKEY="d41d8cd98f00b204e9800998ecf8427e"
UUID=`uuidgen`
CODE=$1

# used when connecting to AWS
#APIID="hxuhwh0sd5"
#APIURL="https://$APIID.execute-api.us-east-1.amazonaws.com"

# connect to local serverless
APIURL=http://localhost:3000

# grab from CognitoUser.signInUserSession.idToken.jwtToken in web UI
IDTOKEN="thisIsADummyJWTToken"

# post the token (done from the website on the activation screen)
#  sls invoke local --function linkcodes-link --path mocks/link.json
curl -XPOST -H"x-api-key:$APIKEY" \
    -H"Authorization: $IDTOKEN" \
    -d'{"code":"'$CODE'"}' \
    "$APIURL/dev/linkcode"
echo
