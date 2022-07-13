// importing AWS sdk
const AWS = require('aws-sdk');
// import request from 'request';


// Instatiating the SES from AWS SDK
let ses = new AWS.SES();

// Structure of sendMail params structure:

// var params = {
//   Destination: {  / required /
//     BccAddresses: [
//       'STRING_VALUE',
//       / more items /
//     ],
//     CcAddresses: [
//       'STRING_VALUE',
//       / more items /
//     ],
//     ToAddresses: [
//       'STRING_VALUE',
//       / more items /
//     ]
//   },
//   Message: { / required /
//     Body: { / required /
//       Html: {
//         Data: 'STRING_VALUE', / required /
//         Charset: 'STRING_VALUE'
//       },
//       Text: {
//         Data: 'STRING_VALUE', / required /
//         Charset: 'STRING_VALUE'
//       }
//     },
//     Subject: { / required /
//       Data: 'STRING_VALUE', / required /
//       Charset: 'STRING_VALUE'
//     }
//   },
//   Source: 'STRING_VALUE', / required /
//   ConfigurationSetName: 'STRING_VALUE',
//   ReplyToAddresses: [
//     'STRING_VALUE',
//     / more items /
//   ],
//   ReturnPath: 'STRING_VALUE',
//   ReturnPathArn: 'STRING_VALUE',
//   SourceArn: 'STRING_VALUE',
//   Tags: [
//     {
//       Name: 'STRING_VALUE', / required /
//       Value: 'STRING_VALUE' / required /
//     },
//     / more items /
//   ]
// };
// ses.sendEmail(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });


// The function to send SES email message
exports.handler  = (event, context, callback) => {

  // let bccEmailAddresses = event.body.bccEmailAddresses;
  let ccEmailAddresses = ["jon.gutwillig@couchtour.tv"];
  let toEmailAddresses = ["info@couchtour.tv"];
  let bodyData = "test email";
  // let bodyCharset = event.body.bodyCharset;
  let subjectdata = "Initial email test";
  // let subjectCharset = event.body.subjectCharset;
  let sourceEmail = "cs@couchtour.tv";
  // let replyToAddresses = event.body.replyToAddresses;

// Building the slack message
  // var options = {
  //   text: 'We have got a customer support from ' + replyToAddresses + ' Log into <https://privateemail.com/appsuite/> to answer their query.',
  // }

// The parameters for sending mail using ses.sendEmail()
  let emailParams = {
    Destination: {
      // BccAddresses: bccEmailAddresses,
      CcAddresses: ccEmailAddresses,
      ToAddresses: toEmailAddresses
    },
    Message: {
      Body: {
        Text: {
          Data: bodyData,
          // Charset: bodyCharset
        }
      },
      Subject: {
        Data: subjectdata,
        // Charset: subjectCharset
      }
    },
    Source: sourceEmail,
    // ReplyToAddresses: replyToAddresses
  };

// the response to send back after email success.
  // const response = {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     message: 'Mail sent successfully'
  //   }),
  // };

// The sendEmail function taking the emailParams and sends the email requests.
  ses.sendEmail(emailParams, function (err, data) {
      if (err) {
          console.log(err, err.stack);
          callback(err);
      } else {
        console.log("SES successful");
        console.log(data);

        // request.post(config.slackWebhook, { body: JSON.stringify(options)}, function (err, httpResponse, body) {
        //   if (err) {
        //     console.error('Slack webhook failed:', err);
        //     callback(err);
        //   }
        //   console.log('Post to slack bot successful!!');
        //   console.log(httpResponse);
        //   console.log('Post to slack bot replied with:', body);
        //   callback(null, response);
        // });
      }
  });
};