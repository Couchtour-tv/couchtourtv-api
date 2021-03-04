#!/bin/sh

APIID="hxuhwh0sd5"
APIKEY="f0sIqouYPR4iNbfbMZFhx1FP4HpXRAhA9RIXPsJa"
UUID=`uuidgen`
CODE=$1

# grab from CognitoUser.signInUserSession.idToken.jwtToken in web UI
IDTOKEN="eyJraWQiOiI3TDhnWkp4WWNScUtJXC9WYWRLU1wvYTA3U3ZGNHhVeVwveEhxZDl1aVBpMTdBPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJkZWNlOWZjNi0zMjIxLTRmNDEtYjU3Ny04ZWQyY2ZhNTIxMjciLCJhdWQiOiI0MHJkZmlqYWdjbTJyYXQwNW1tcGZ1MXZuIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImV2ZW50X2lkIjoiNWM1MzY2ODctYjRhZC00ZDVhLWEzNzMtMDMxMDU0YTk1YTFlIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MDU4ODU4MTcsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0s1dGlaQ3Z4TSIsImNvZ25pdG86dXNlcm5hbWUiOiJkYXZla0A2dGhzdHJlZXRyYWRpby5vcmciLCJleHAiOjE2MDU5NDM0NDQsImlhdCI6MTYwNTkzOTg0NCwiZW1haWwiOiJkYXZla0A2dGhzdHJlZXRyYWRpby5vcmcifQ.RPSWTA_M17dW-hhhXxdiF2HU2n_glByXrCuBvrjmAvRM06qp3PRxJI9Jvgh6XR5hlWKxC42fweJ8iLId6TRhe-_Gs4s-4Vtv7lgUvkWVoVnOskuMg1x1CM52jt6Bf5w3sTypORWfyx9hKU_mffQGa8Kq3z469XrWGN-qkXRPzVI3dhwunKm65BC-tYDof24WBeN3JvsBUbG6s70sVDGoS2xOdEJuv6dBXWPAcw1AEg63UDdLW2su7P1e1Q397yD9ovVoEgLhcaJU-5OhhG_fXPWegPj7wBkC_sdXM0Is5cvKdwpmZ3SkAeN-LogprUnmoXB5HNdUFtPG0VzPGD5WTg"

# post the token (done from the website on the activation screen)
#  sls invoke local --function linkcodes-link --path mocks/link.json
curl -XPOST -H"x-api-key:$APIKEY" \
    -H"Authorization: $IDTOKEN" \
    -d'{"code":"'$CODE'"}' \
    "https://$APIID.execute-api.us-east-1.amazonaws.com/dev/linkcode"
echo
