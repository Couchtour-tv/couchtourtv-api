#### Example DynamoDb queries

list all tables and their name

``` javascript
dynamodb.listTables({}, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```

table scan / return all items, given tablename

``` javascript
var params = { TableName: 'ct-Users' };
dynamodb.scan(params, function(err, data) {
    if (err) ppJson(err); // an error occurred
    else ppJson(data); // successful response
});
```

delete table, given tablename

``` javascript
var params = { TableName: 'ct-Users' };
dynamodb.scan(params, function(err, data) {
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
})
```