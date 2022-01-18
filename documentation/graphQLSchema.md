Command Description

amplify configure -Configures the AWS access credentials, AWS Region and sets up a new AWS User Profile

amplify init -Initializes a new project, sets up deployment resources in the cloud and prepares your project for Amplify.

amplify configure project -Updates configuration settings used to setup the project during the init step.

amplify add <category> -Adds cloud features to your app.

amplify update <category> -Updates existing cloud features in your app.

amplify push [--no-gql-override] -Provisions cloud resources with the latest local developments. The 'no-gql-override' flag does not
automatically compile your annotated GraphQL schema and will override your local AppSync resolvers and templates.

amplify pull -Fetch upstream backend environment definition changes from the cloud and updates the local environment to
match that definition.

amplify publish -Runs amplify push, publishes a static assets to Amazon S3 and Amazon CloudFront (\*hosting category is
required).

amplify status [ <category>...] -Displays the state of local resources that haven't been pushed to the cloud (Create/Update/Delete).

amplify status -v [ <category>...] -Verbose mode - Shows the detailed verbose diff between local and deployed resources, including
cloudformation-diff

amplify serve -Runs amplify push, and then executes the project's start command to test run the client-side application.

amplify delete -Deletes resources tied to the project.

amplify help | amplify <category> help -Displays help for the core CLI.

amplify codegen add | generate -Performs generation of strongly typed objects using a GraphQL schema.

amplify env add | list | remove | get | pull | import | checkout See the multienv docs. https://docs.amplify.aws/cli/teams/overview/

==================================================================================================
amplify cli github: (very helpful)
https://github.com/aws-amplify/amplify-cli

amplify team environments:
https://docs.amplify.aws/cli/teams/overview/

multiple front-ends
https://docs.amplify.aws/cli/teams/multi-frontend/

---

---

i have a working appsync/graphsql ecosystem described in code
-- i want to push it to a fresh cloud environment
-- what are the commands i need to run ?

## ========================== Possible Solution # 1 ==========================

```bash
amplify configure
```

## Description: Configures the AWS access credentials, AWS Region and sets up a new AWS User Profile

```bash
amplify init
```

## Description: Initializes a new project, sets up deployment resources in the cloud and prepares your project for Amplify.

```bash
amplify add codegen --apiId hdjajmu3szeexlkvvmfcnugjaq
```

Description: Performs generation of strongly typed objects using a GraphQL schema.
Note: 'hdjajmu3szeexlkvvmfcnugjaq' is the apiId for appsync found in appsync/ APIs in the aws console

---

==========================================================================

========================== Possible Solution # 2 =========================
You would do this from your existing amplify project, and add another api that points to the cloud.

```bash
amplify add api
amplify push
```

# Description: Adds cloud features to your app and pushes to the cloud.

========================== Possible Solution # 3 ========================

```bash
amplify update api
amplify push
```

# Description: Updates existing cloud features in your app and pushes to the cloud.

========================== Possible Solution # 4 ========================

```bash
amplify configure project
amplify push
```

# Description: Updates configuration settings used to setup the project during the init step and pushes to the cloud.

---

---

i have a working appsync/graphsql ecosystem described in code
-- i want to edit the schema and update the datastore on an existing cloud envirtonment
-- what are the commands i need to run ?

After you edit the schema

```bash
amplify push --y
```

Note: the '--y' sets the script to automatically answer 'yes' to the questions asked when executing 'amplify push'

---

---

i have a working appsync/graphsql ecosystem described in code
-- i want to edit and update the apiroutes on an existing cloud envirtonment
-- what are the commands i need to run ?

========================== Possible Solution # 1 ========================

```bash
amplify update api
amplify push
```

# Description: Updates existing cloud features in your app and pushes to the cloud.

========================== Possible Solution # 2 ========================

```bash
amplify configure project
amplify push
```

# Description: Updates configuration settings used to setup the project during the init step and pushes to the cloud.

---

---

i have a working appsync/graphsql ecosystem described in code
-- i want to edit and update the auth configuration on an existing cloud envirtonment
-- what are the commands i need to run ?

---

```bash
amplify auth remove
amplify push
```

## Description: Removes Auth resource from your local backend. The resource is removed from the cloud on the next push command.

```bash
amplify auth add
```

## Description: Takes you through steps in the CLI to add an Auth resource to your backend.

First, configure your aws profile:
In the command line type "aws configure"

```bash
aws configure
```

       Configure  AWS  CLI  options. If this command is run with no arguments,
       you will be prompted for configuration values such as your  AWS  Access
       Key  Id and your AWS Secret Access Key.  You can configure a named pro-
       file using the --profile argument.  If your config file does not  exist
       (the default location is ~/.aws/config), the AWS CLI will create it for
       you.  To keep an existing value, hit enter when prompted for the value.
       When  you  are prompted for information, the current value will be dis-
       played in [brackets].  If the config item has no value, it be displayed
       as [None].  Note that the configure command only works with values from
       the config file.  It does not use any configuration values  from  envi-
       ronment variables or the IAM role.

Second, run 'npm i -g @aws-amplify/cli' to install the amplify cli

```bash
npm i -g @aws-amplify/cli
```

or

```bash
curl -sL https://aws-amplify.github.io/amplify-cli/install | bash && $SHELL
```

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

- https://docs.amplify.aws/cli/start/install/
  ```bash
  amplify configure
  ```
  > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

- Infrastructure-as-code with amplify
  https://docs.amplify.aws/cli/#infrastructure-as-code
  > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

- https://docs.amplify.aws/cli/start/workflows/#initialize-new-project

```bash
amplify init
```

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

- https://docs.amplify.aws/cli/graphql-transformer/overview/
  ```bash
  amplify add api
  ```
  > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

- use amplify status to check status of amplify auth, api, and storage

```bash
amplify status
```

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

- https://docs.amplify.aws/cli/storage/overview/
- https://docs.amplify.aws/cli/storage/import/
  ```bash
  amplify add storage
  amplify import storage
  ```
  > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

- https://docs.amplify.aws/cli/auth/overview/
- https://docs.amplify.aws/cli/auth/import/
  ```bash
  amplify add auth
  amplify import auth
  ```
  > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

WORKFLOW:
We work on the schema (amplify/backend/api/couchtourtvamplify/schema.graphql) from couchtourtv-api using the 'amplify mock' amplify CLI command.
Once schema queries and mutations work the way we want them to, we run 'amplify push' in command line to push schema to cloud so we can pull the
resources from the cloud into our frontend react project.

Then run 'amplify codegen' from react project directory to generage graphql functions.
The first time you do this you need to run 'amplify codegen <ApiId>'

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > run command amplify mock

```
amplify mock
```

to mock an amplify push command

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > >

https://docs.aws.amazon.com/appsync/latest/devguide/provision-from-schema.html#aws-appsync-provision-from-schema
https://docs.amplify.aws/cli/graphql-transformer/model

nested schemas
https://stackoverflow.com/questions/53950885/graphql-how-nested-to-make-schema

https://docs.aws.amazon.com/appsync/latest/devguide/scalars.html#aws-appsync-scalars

```
GraphQL defines the following default scalars:

ID
A unique identifier for an object. This scalar is serialized like a String but isn't meant to be human-readable.

String
A UTF-8 character sequence.

Int
An integer value between -(231) and 232-1.

Float
An IEEE 754 floating point value.

Boolean
A Boolean value, either true or false.

AWS AppSync defines the following scalars:

AWSDate
An extended ISO 8601 date string in the format YYYY-MM-DD.

AWSTime
An extended ISO 8601 time string in the format hh:mm:ss.sss.

AWSDateTime
An extended ISO 8601 date and time string in the format YYYY-MM-DDThh:mm:ss.sssZ.
```

# Schema

GraphQL Schema => schema
Built-in scalar types
=====================
GraphQL Int => Int
GraphQL Float => Float
GraphQL String => String
GraphQL Boolean => Boolean
GraphQL ID => ID
Type Definitions
================
Scalar Type => scalar
Object Type => type
Interface Type => interface
Union Type => union
Enum Type => enum
Input Object Type => input
Type Markers
============
Non-null Type => <type>! e.g String!
List Type => [<type>] e.g [String]
List of Non-null Types => [<type>!] e.g [String!]
Non-null List Type => [<type>]! e.g [String]!
Non-null List of Non-null Types => [<type>!]! e.g [String!]!

Model directive automatically adds createdAt and updatedAt timestamps to each entities.
The timestamp field names can be changed by passing timestamps attribute to the directive

```
type Post @model(timestamps:{createdAt: "createdOn", updatedAt: "updatedOn"}) {
  id: ID!
  title: String!
  tags: [String!]!
}
```

---

    example:
        Please view this next immediate section on a wide screen. "Index Name", "Partition Key", "Sort Key",
        and "GraphQL Query Name" are labels for the syntax directly below them.

```
type PostEditor
  @model        Index Name            Partition Key   Sort Key              GraphQL Query Name
  @key(name: "categoryIndex", fields: ["category",  "priority"], queryField: "todosByCategory"){
  id: ID!
  name: String!
  description: String
  category: String
  priority: Int
  }
```

---

@connection
The @connection directive enables you to specify relationships between @model types.
Currently, this supports one-to-one, one-to-many, and many-to-one relationships.
You may implement many-to-many relationships using two one-to-many connections and a joining @model type.
See the usage section for details.

https://docs.amplify.aws/cli/graphql-transformer/connection

    Note: After you have pushed a @connection directive you should not try to change it. If you try to change it,
    the DynamoDB UpdateTable operation will fail. Should you need to change a @connection, you should add a new @connection
    that implements the new access pattern, update your application to use the new @connection, and then delete the old @connection
    when it’s no longer needed.

> > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > > https://www.youtube.com/watch?v=VG2XWoD-rS0&ab_channel=NaderDabit

Data access patterns
In the DynamoDB documentation for modeling relational data in a NoSQL database, there is an in depth example of 17 access patterns from the
First Steps for Modeling Relational Data in DynamoDB page.
https://docs.amplify.aws/cli/graphql-transformer/dataaccess

---

---

Has One
Simplest:

```
type Project @model {
  id: ID!
  name: String
  team: Team @connection
}

type Team @model {
  id: ID!
  name: String!
}
```

---

Has One
You can also define the field you would like to use for the connection by populating the first argument to the fields array and matching it to a field on the type:

```
type Project @model { merch
  id: ID!
  name: String
  teamID: ID!
  team: Team @connection(fields: ["teamID"])
}

type Team @model { submodel
  id: ID!
  name: String!
}
```

---

---

Has Many

```
type Post @model {merchandise
  id: ID!
  title: String!
  comments: [Comment] @connection(keyName: "byPost", fields: ["id"])
}

type Comment @model //band
  @key(name: "byPost", fields: ["postID", "content"]) {
  id: ID!
  postID: ID!
  content: String!
}
```

---

Belongs to
You can make a connection bi-directional by adding a many-to-one connection to types that already have a one-to-many connection. In this case you add a connection from Comment to Post since each comment belongs to a post:

```
type Post @model { user
  id: ID!
  title: String!
  comments: [Comment] @connection(keyName: "byPost", fields: ["id"])
}

type Comment @model purchases
  @key(name: "byPost", fields: ["postID", "content"]) {
  id: ID!
  postID: ID!
  content: String!
  post: Post @connection(fields: ["postID"])
}
```

---

Many-to-many connections
You can implement many to many using two 1-M @connections, an @key, and a joining @model. For example:

```
type Post @model { //merchandise
  id: ID!
  title: String!
  editors: [PostEditor] @connection(keyName: "byPost", fields: ["id"])
}

# Create a join model and disable queries as you don't need them
# and can query through Post.editors and User.posts
type PostEditor // merchandisePackage
  @model(queries: null)
  @key(name: "byPost", fields: ["postID", "editorID"])
  @key(name: "byEditor", fields: ["editorID", "postID"]) {
  id: ID!
  postID: ID!
  editorID: ID!
  post: Post! @connection(fields: ["postID"])
  editor: User! @connection(fields: ["editorID"])
}

type User @model {  //band
  id: ID!
  username: String!
  posts: [PostEditor] @connection(keyName: "byEditor", fields: ["id"])
}
```

---

    How to send a GraphQL query to AWS AppSync from the commandline?
    https://stackoverflow.com/questions/60068428/how-to-send-a-graphql-query-to-aws-appsync-from-the-commandline

```python
#!/usr/bin/env python3
import os

cmd = """curl -i -H 'Content-Type: application/json' -H "x-api-key: <ENTER YOUR API KEY FROM THE APPSYNC SETTINGS PAGE>" -H "Host: <ENTER YOUR HOST ENDPOINT FROM THE APPSYNC API SETTINGS PAGE >" -X POST -d '{"query": "query {listEvents {items {id}}}"}' https://<ENTER YOUR HOST ENDPOINT FROM THE APPSYNC API SETTINGS PAGE>/graphql"""

def doGraphqlRequest():
    os.system(cmd)

print("Starting request to Appsync endpoint")
doGraphQLRequest()
print("Finsihed request to Appsync endpoint")
```

Time Stamps
https://stackoverflow.com/questions/58144742/unable-to-serialise-awsdate-from-rds-in-appsync-response-mapping-template

Add a nested JSON data item to the DynamoDB table
https://aws.amazon.com/premiumsupport/knowledge-center/appsync-nested-json-data-in-dynamodb/

https://www.youtube.com/watch?v=A91naQavlIU&ab_channel=AmazonWebServices

# @auth

https://docs.amplify.aws/cli/graphql-transformer/auth/#auth
https://docs.amplify.aws/cli/graphql-transformer/auth/#static-group-authorization
{ allow: groups, groups: ["Admin"], operations: [create, update, read] }
{ allow: groups, groups: ["Admin"], }

```graphql
@model
@auth(rules: [
  {allow: groups, groups: ["Admin"], queries: null, mutations: [create, get, list, update, delete]},
  {allow: groups, groups: ["User"], queries: [get,list], mutations: null}
])
```

## Public

### The simplest case

```
type Post @model @auth(rules: [{ allow: public }]) {
  id: ID!
  title: String!
}
```

## Public

### public authorization with provider override

```
type Post @model @auth(rules: [{ allow: public, provider: iam }]) {
  id: ID!
  title: String!
}
```

## Private

### The simplest case

```
type Post @model @auth(rules: [{ allow: private }]) {
  id: ID!
  title: String!
}
```

## Private

### private authorization with provider override

```
type Post @model @auth(rules: [{ allow: private, provider: iam }]) {
  id: ID!
  title: String!
}
```

                owner	        groups	      public	      private

userPools ✅ ✅ ✅
oidc ✅ ✅
apiKey ✅
iam ✅ ✅

https://docs.amplify.aws/lib/graphqlapi/query-data/q/platform/js/#simple-query

```javascript
import { API } from "aws-amplify"
import * as queries from "./graphql/queries"

const todos = await API.graphql({
  query: queries.listTodos,
  authMode: "AWS_IAM",
})
```

---

    (https://medium.com/@jan.hesters/sorting-queries-with-aws-amplifys-key-directive-4c7fd14420cb)

        This generates a new list query called contactsByName. Amplify still sets up the old listContacts query. We generated a global secondary index. To generate a local secondary index, you would have to set up a composite primary key and generate a secondary index with the same partition key as your primary key.
    [artist, title]

### Primary Keys:

    partition key: primary index's hash key, uses single attribute
      - ie SongId
      - determines the location for where its stored


    composite primary keys: using two attributes
      - ie Artist and Title
      - first attribute is the partition key
      - second attribute is the sort key



    If you use two attributes like Artist and Title, you are using composite primary keys. The first attribute is the partition key, and the second attribute is the sort key. Just like with one key, the partition key determines the physical location. Using composite primary keys, items with the same partition key are stored together, but they can be distinguished because they are sorted in order by the sort key. Sort keys are sometimes referred to as the range key.

### Secondary Keys:

    - let you do queries against other attributes in addition to the primary key
    - The table which the secondary index is associated with is called the base table.

    Two types of secondary indexes: global and local

      - Global:
        * have both a different partition key and a different sort key from the base table


      There are two types of secondary indexes: global and local. Global secondary indexes have both a different partition key and a different sort key from the base table, while secondary indexes have the same partition key, but a different sort key. Their naming comes from the fact that global indexes can query data across all partitions, whereas local indexes are scoped to it’s partition key. It follows that local secondary indexes must always be composite.



      Note: In the following, if you would also specify an id field, you would have to populate that id yourself. Also, note that changing the partition key might require you to rename your table or to create a new table.

---

```bash
type Contact @model @key(fields: ["lastName"]) {
  lastName: String!
  firstName: String!
  age: Int!
}
```

    This enables us to query by lastName instead of by id. Since we omitted @key's name argument lastName is now the primary key.

---

    But this previous schema would prohibit two contacts with the same last name. Let’s use a composite primary key instead to identify by firstName and lastName uniquely. We'll pick lastName as the partition key and firstName as the sort key.

```bash
type Contact @model @key(fields: ["lastName", "firstName"]) {
  lastName: String!
  firstName: String!
  age: Int!
}
```

```javascript
const data = await API.graphql(
  graphqlOperation(getContact, { lastName, firstName })
)
```

---

    We can take it even further. What if we also wanted to sort and query the contacts by age? Just add it to the @key field.

```bash
type Contact @model @key(fields: ["lastName", "firstName", "age"]) {
  lastName: String!
  firstName: String!
  age: Int!
}
```

```javascript
const data = await API.graphql(
  graphqlOperation(getContact, { firstName, lastName, age })
)
```

---

    If you want to do list query now, your first instinct might be to stick age alongside lastName and firstName into graphqlOperation, but that won't work because DynamoDB limits queries to two attributes. If you use @key with more than two attributes, the first becomes the partition key (as always), and the sort key will be a composite key made of the rest of the attributes. The new sort key is named by camel casing and adding the attributes used. In our case, we get firstNameAge. This change is reflected in the list query.

```javascript
const listData = await API.graphql(
  graphqlOperation(listContacts, {
    lastName: "Hesters",
    firstNameAge: {
      beginsWith: { firstName, age: 2 },
    },
  })
)
```

---

    You can still filter queries

```javascript
const listData = await API.graphql(
  graphqlOperation(listContacts, {
    lastName: "Hesters",
    filter: { firstName: { eq: firstName } },
  })
)
```

---

    And you can even combine querying using the sort key with filtering.

```javascript
const listData = await API.graphql(
  graphqlOperation(listContacts, {
    lastName: "Hesters",
    filter: { age: { eq: 25 } },
    firstNameAge: {
      beginsWith: { firstName, age: 2 },
    },
  })
)
```

---

    Lastly, if you give @key a name and a queryField value, you automatically use secondary indexes instead of primary keys.

```bash

type Contact
  @model
  @key(
    name: "ByName"
    fields: ["lastName", "firstName"]
    queryField: "contactsByName"
  ) {
  id: ID!
  lastName: String!
  firstName: String!
  age: Int!
}
```

    This generates a new list query called contactsByName. Amplify still sets up the old listContacts query. We generated a global secondary index. To generate a local secondary index, you would have to set up a composite primary key and generate a secondary index with the same partition key as your primary key.

```javascript
const data = await API.graphql(graphqlOperation(contactsByName, { lastName }))
```

    The new query filters all contacts by the given last name and then sorts them by last name and first name.

---

#### Example:

```bash
type Contact
  @model
  @key(
    name: "ByOwnerLastNameFirstName"
    fields: ["owner", "lastName", "firstName"]
    queryField: "contactsByOwner"
  )
  @auth(rules: [{ allow: owner }]) {
  id: ID!
  firstName: String
  lastName: String
  age: Int
  owner: String
}
```

```bash
mutation create {
  createContact(
    input: { firstName: "Alice", lastName: "Zebra", age: 30 }
  ) {
    firstName
    lastName
    age
  }
}
```

```javascript
import React, { useEffect, useState } from "react"
import { StyleSheet } from "react-native"
import {
  createAppContainer,
  createStackNavigator,
  SafeAreaView,
} from "react-navigation"
import { ListItem, Button } from "react-native-elements"
import Amplify, { API, graphqlOperation, Auth } from "aws-amplify"

import { contactsByOwner } from "./src/graphql/queries"
import config from "./aws-exports"

Amplify.configure(config)

function App() {
  useEffect(() => {
    async function login() {
      try {
        await Auth.signIn("key@tutorial.com", "password")
      } catch (error) {
        console.log(error)
      }
    }

    login()
  }, [])

  const [contacts, setContacts] = useState([])
  const [nextToken, setNextToken] = useState(null)
  const [loading, setLoading] = useState(false)

  async function fetchContacts() {
    setLoading(true)
    try {
      const { username: owner } = await Auth.currentAuthenticatedUser()
      const data = await API.graphql(
        graphqlOperation(contactsByOwner, { limit: 3, nextToken, owner })
      )
      setContacts([...contacts, ...data.data.contactsByOwner.items])
      setNextToken(data.data.contactsByOwner.nextToken)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const buttonProps =
    contacts.length === 0
      ? { title: "Fetch Contacts" }
      : nextToken
      ? { title: "Fetch More Contacts" }
      : { title: "All Contacts Fetched", disabled: true }

  return (
    <SafeAreaView style={styles.container}>
      {contacts.map(({ id, firstName, lastName, age }) => (
        <ListItem
          key={id}
          title={`${firstName} ${lastName}`}
          subtitle={age.toString()}
        />
      ))}
      <Button
        disabled={loading}
        onPress={fetchContacts}
        loading={loading}
        {...buttonProps}
      />
    </SafeAreaView>
  )
}

App.navigationOptions = {
  title: "Contacts",
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
})

export default createAppContainer(createStackNavigator({ ContactsScreen: App }))
```
