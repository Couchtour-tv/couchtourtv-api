const AWS = require('aws-sdk');
// Note, make sure you have proper credentials, uncomment following code to set credentials if running file locally
// var myConfig = new AWS.Config({
//     credentials: {
//         accessKeyId: "XXXXXXXXXXXXX",
//         secretAccessKey: "XXXXXXXXXXXXXXXXXXXXXXX"
//     }
// });

// Set proper region
let cognitoClient = new AWS.CognitoIdentityServiceProvider({ region: 'us-east-1' });

// Event object is the event passed to Lambda
export async function getUserOfAuthenticatedUser(event) {
    // Get the unique ID given by cognito for this user, it is passed to lambda as part of a large string in event.requestContext.identity.cognitoAuthenticationProvider
    let userSub = event.requestContext.identity.cognitoAuthenticationProvider.split(':CognitoSignIn:')[1];
    let request = {
        UserPoolId: "us-east-1_szavMf6eG", // Set your cognito user pool id
        Filter: `sub = "${userSub}"`,
        Limit: 1
    };
    let users = await cognitoClient.listUsers(request).promise();
    console.log("getUserOfAuthenticatedUser got user:", users);
    return users[0];
}

export async function getCognitoUser(userId) {
    const user = await cognitoClient.getUser(userId);
    console.log("[29] getCognitoUser got user: ", user);
    return user;
}

// Example with a dummy event object, change the 'YOURUSERSUB' part of the string for which ever user you want to test with
// let event = {
//     requestContext: {
//         identity: {
//             cognitoAuthenticationProvider: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx:CognitoSignIn:YOURUSERSUB"
//         }
//     }
// }
// getUserOfAuthenticatedUser(event);