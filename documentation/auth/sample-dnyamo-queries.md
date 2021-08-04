## Example DynamoDb queries

#### -------------------------------------------------------------------
#### working / stable

list all tables and their name

``` javascript
dynamodb.listTables({}, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```

delete all tables

``` javascript
dynamodb.listTables({}, function(err, data) {
  if (err) console.error(err, err.stack)
  for (tableName of data.TableNames) {
    dynamodb.deleteTable({TableName: tableName}, function(err, data) {
      if (err) console.error(err, err.stack)
      else console.log('Deleted', tableName)
    })
  }
});
```

table scan / return all items, given tablename

``` javascript
var params = { TableName: 'ct-Events' };
// var params = { TableName: 'ct-MediaMeta' };
dynamodb.scan(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```

return user given user emailaddress

``` javascript
// var params = {
//   ExpressionAttributeValues: { ':v1': { 'S': 'carrot@top.com' } },
//   KeyConditionExpression: 'emailAddress = :v1',
//   TableName: 'ct-Users'
// };
var params = {
  ExpressionAttributeValues: { ':v1': 'carrot@top.com' },
  KeyConditionExpression: 'emailAddress = :v1',
  TableName: 'ct-Users'
};
docClient.query(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
````

update item, given keys
``` javascript
let params = {
  TableName: UserTableName,
  Key: {
      "emailAddress": emailAddress,
      "cogId": cogId
  },
  UpdateExpression: `set loggedIn = :x`,
  ExpressionAttributeValues: {
      ":x": value

  }
};
docClient.update(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});
````


get item given emailAddress

``` javascript
var params = {
  TableName: 'ct-Users',
  Key: { emailAddress: 'carrot@top.com' }
};
docClient.get(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```

#### -------------------------------------------------------------------
#### delete item

``` javascript
var params = {
  TableName: 'ct-Users',
  Key: { emailAddress: 'stuheadz@gmail.com' }
};
docClient.get(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```

```javascript
var params = {
  ExpressionAttributeValues: { ':v1': 'stuheadz@gmail.com' },
  KeyConditionExpression: 'emailAddress = :v1',
  TableName: 'ct-Users'
};
docClient.delete(params, function(err, data) {
  if (err) ppJson(err);
  else ppJson(data); 
});
```

```javascript
var params = {
  TableName: 'ct-Users',
  Key: { emailAddress: 'stuheadz@gmail.com' }
};
docClient.delete(params, function(err, data) {
  if (err) ppJson(err);
  else ppJson(data); 
});
```

#### -------------------------------------------------------------------
#### revist / edit

update item // Not Working (?)

``` javascript
var params = {
  TableName: 'ct-Users',
  Key: { emailAddress: 'carrot@top.com' },
  UpdateExpression: 'set #a = :x',
  ExpressionAttributeNames: { '#a': 'emailVerified' },
  ExpressionAttributeValues: { ':x': false }
}
docClient.update(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```

query syntax for keys (search not using ID)

``` javascript
var params = {
    TableName: 'ct-Users',
    IndexName: 'emailAddress', // optional (if querying an index)
    KeyConditionExpression: 'attribute_name = :value', // a string representing a constraint on the attribute
    ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
        //'#name': 'attribute name'
    },
    ExpressionAttributeValues: { // a map of substitutions for all attribute values
      ':value': 'STRING_VALUE'
    }
};


let params = {
   IndexName : "user_id-index",
   ExpressionAttributeValues: {
       ":v1": {
           N: 1234
       },
       ":v2": {
           S: "OTHER"
       }
   },
   ExpressionAttributeNames: {
       "#userId": "user_id",
       "#prodType": "prod_type"
   }
   TableName: table,
   KeyConditionExpression: "#userId = :v1 and #prodType = :v2"
};


let params = {
   IndexName : "emailAddress",
   // ExpressionAttributeValues: {
   //    ":email": {
   //         S: 'carrot@top.com'
   //     }
   // },
   // ExpressionAttributeNames: {
   //     "#emailAddress": "emailAddress"
   // },

   TableName: 'ct-Users',
   KeyConditionExpression: "emailAddress = :email",
   // ExpressionAttributeValues: { ":email": { 'S': 'carrot@top.com' } }
   ExpressionAttributeValues: { ":email": 'carrot@top.com' }
};

docClient.query(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
````
