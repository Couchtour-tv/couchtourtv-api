#!/bin/sh

APIID="hxuhwh0sd5"
APIKEY="f0sIqouYPR4iNbfbMZFhx1FP4HpXRAhA9RIXPsJa"
UUID=`uuidgen`

# grab from CognitoUser.signInUserSession.idToken.jwtToken in web UI
IDTOKEN="eyJraWQiOiI3TDhnWkp4WWNScUtJXC9WYWRLU1wvYTA3U3ZGNHhVeVwveEhxZDl1aVBpMTdBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkZWNlOWZjNi0zMjIxLTRmNDEtYjU3Ny04ZWQyY2ZhNTIxMjciLCJhdWQiOiI0MHJkZmlqYWdjbTJyYXQwNW1tcGZ1MXZuIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV2ZW50X2lkIjoiNWM1MzY2ODctYjRhZC00ZDVhLWEzNzMtMDMxMDU0YTk1YTFlIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDU4ODU4MTcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0s1dGlaQ3Z4TSIsImNvZ25pdG86dXNlcm5hbWUiOiJkYXZla0A2dGhzdHJlZXRyYWRpby5vcmciLCJleHAiOjE2MDU5MzU2NjcsImlhdCI6MTYwNTkzMjA2NywiZW1haWwiOiJkYXZla0A2dGhzdHJlZXRyYWRpby5vcmcifQ.Bo0n-1jG9maAYSb1R66zT9pBa5CNVbsRzXPW4fk9JYTN7U16O9AAMR7_yLlorspz7X0kjF0zR7lcdG-2EHBmjVvieuhJyT3v5JHmnAcTZFH66dDmPohx9nTmaHXWNNusH1gLhCeN9cKyiVTpXJZhsGQvoNG6U5TS0RS8VTpjBxlYOuPcsSSbgzQ8K7b6vP2PkbDXr0F1kJLLbOXmE-3i1ogYfVi2c9MjrzD5a2N50xKQ_yMlUT-LjiVLFktj0-96tNdQx4ulH3Tn3Xt2Al7pIGlFSEXInR2rmMa0SLP0L8giRQk6A7Zow3-1HiIo2SbzMYl2mG8ro0L87pse21wB1g"

_t=`mktemp`

set -x

# get code
#  sls invoke local --function linkcodes --path mocks/get-event.json
curl -XGET -H"x-api-key:$APIKEY" \
    "https://$APIID.execute-api.us-east-1.amazonaws.com/dev/linkcode?uuid=$UUID" \
    -o $_t
echo
json_pp < $_t
code=`perl -MJSON::PP=decode_json -ne'print decode_json($_)->{linkcode};' < $_t`

# post the token (done from the website on the activation screen)
#  sls invoke local --function linkcodes-link --path mocks/link.json
curl -XPOST -H"x-api-key:$APIKEY" \
    -H"Authorization: $IDTOKEN" \
    -d'{"code":"'$code'"}' \
    "https://$APIID.execute-api.us-east-1.amazonaws.com/dev/linkcode"
echo

# get token once code is activated
# local equiv:
#  sls invoke local --function linkcodes-linklogin --path mocks/linklogin.json
curl -XPATCH -H'Contet-Type:text/json' -H"x-api-key:$APIKEY" \
    -d'{"uuid":"'$UUID'","code":"'$code'"}' \
    "https://$APIID.execute-api.us-east-1.amazonaws.com/dev/linkcode"
echo
