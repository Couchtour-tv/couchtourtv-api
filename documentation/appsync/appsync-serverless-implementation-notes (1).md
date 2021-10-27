# IMPLEMENTATION NOTES 

### DOCUMENTATION

```bash

-- SERVERLESS DOCS:

https://www.npmjs.com/package/serverless-appsync-offline
https://github.com/sid88in/serverless-appsync-plugin#configuring-the-plugin
https://www.serverless.com/plugins/serverless-appsync-plugin


-- AMPLIFY SERVERLESS PLUGIN
https://www.serverless.com/plugins/aws-amplify-serverless-plugin
https://medium.com/@jrheling/using-serverless-framework-with-the-amplify-client-library-9f3a1e2ee24f

```

### DEPLOYMENT

```bash

```

### CONFIGURATION

    Below is serverless.yml file from below links: 
    https://github.com/mavi888/sls-appsync-backend/blob/master/serverless.yml
    https://www.youtube.com/watch?v=eTUYqI_LCQ4&ab_channel=FooBarServerless

```yml
# service: sls-appsync-backend

plugins:
   - serverless-appsync-plugin
  #  - serverless-pseudo-parameters # All functionalities as provided by this plugin are now supported by Serverless Framework natively https://www.serverless.com/plugins/serverless-pseudo-parameters

provider:
  name: aws #already exists in couchtourtv-api serverless.yml
  runtime: nodejs8.10 #already exists in couchtourtv-api serverless.yml
  profile: student1 # not sure what profile we need or if we need one at all

functions:
  graphql:
    handler: handler.graphql # new path is already in serverless.yml file

custom:
  accountId: ${aws:accountId}
  appSync:
    name: sls-appsync-graphql
    authenticationType: AMAZON_COGNITO_USER_POOLS
    userPoolConfig:
      awsRegion:  us-east-1
      defaultAction: ALLOW
      userPoolId:  { Ref: CognitoUserPool } 
    mappingTemplates:
      - dataSource: awsLambdaDataSource
        type: Query, Mutation, Subscription
        field: helloWorld
        request: "helloWorld-request-mapping-template.txt"
        response: "helloWorld-response-mapping-template.txt"
    schema: # defaults schema.graphql
    serviceRole: "AppSyncServiceRole"
    dataSources:
      - type: AWS_LAMBDA
        name: awsLambdaDataSource
        description: 'Lambda DataSource'
        config:
          lambdaFunctionArn: { Fn::GetAtt: [GraphqlLambdaFunction, Arn] } # Where GraphqlLambdaFunction is the lambda function cloudformation resource created by serverless for the serverless function named graphql
          serviceRoleArn: { Fn::GetAtt: [AppSyncLambdaServiceRole, Arn] }

resources:
  Resources: # most of these resources are already in our resources folder in couchtourtv-api
    # # Cognito - User pool
    # CognitoUserPool:
    #   Type: AWS::Cognito::UserPool
    #   Properties:
    #     UserPoolName: cognito_sls_appsync_user_pool
    # # Cognito - Client
    # CognitoUserPoolClient:
    #   Type: AWS::Cognito::UserPoolClient
    #   Properties:
    #     ClientName: cognito_sls_appsync_client
    #     UserPoolId:
    #       Ref: CognitoUserPool
    # # Cognito - Identity
    # CognitoIdentityPool:
    #   Type: AWS::Cognito::IdentityPool
    #   Properties:
    #     IdentityPoolName: cognito_sls_appsync_identity_pool
    #     AllowUnauthenticatedIdentities: false
    #     CognitoIdentityProviders:
    #       - ClientId:
    #           Ref: CognitoUserPoolClient
    #         ProviderName:
    #           Fn::GetAtt: [CognitoUserPool, ProviderName]
    # Cognito roles
    # CognitoIdentityPoolRoles:
    #   Type: AWS::Cognito::IdentityPoolRoleAttachment
    #   Properties:
    #     IdentityPoolId:
    #       Ref: CognitoIdentityPool
    #     Roles:
    #       authenticated:
    #         Fn::GetAtt: [CognitoAuthRole, Arn]
    #       unauthenticated:
    #         Fn::GetAtt: [CognitoUnauthRole, Arn]
    # CognitoAuthRole:
    #   Type: AWS::IAM::Role
    #   Properties:
    #     RoleName: cognito_sls_appsync_appAuthRole
    #     Path: /
    #     AssumeRolePolicyDocument:
    #       Version: "2012-10-17"
    #       Statement:
    #         - Effect: "Allow"
    #           Principal:
    #             Federated: "cognito-identity.amazonaws.com"
    #           Action:
    #             - "sts:AssumeRoleWithWebIdentity"
    #           Condition:
    #             StringEquals:
    #               "cognito-identity.amazonaws.com:aud":
    #                 Ref: CognitoIdentityPool
    #             "ForAnyValue:StringLike":
    #               "cognito-identity.amazonaws.com:amr": authenticated
    #     Policies:
    #       - PolicyName: "CognitoAuthorizedPolicy"
    #         PolicyDocument:
    #           Version: "2012-10-17"
    #           Statement:
    #             - Effect: "Allow"
    #               Action:
    #                 - "mobileanalytics:PutEvents"
    #                 - "cognito-sync:*"
    #                 - "cognito-identity:*"
    #               Resource: "*"
    #             - Effect: "Allow"
    #               Action:
    #                 - "execute-api:Invoke"
    #               Resource: "*"
    # CognitoUnauthRole:
    #   Type: AWS::IAM::Role
    #   Properties:
    #     RoleName: cognito_sls_appsync_appUnauthRole
    #     Path: /
    #     AssumeRolePolicyDocument:
    #       Version: "2012-10-17"
    #       Statement:
    #         - Effect: "Allow"
    #           Principal:
    #             Federated: "cognito-identity.amazonaws.com"
    #           Action:
    #             - "sts:AssumeRoleWithWebIdentity"
    #           Condition:
    #             StringEquals:
    #               "cognito-identity.amazonaws.com:aud":
    #                 Ref: CognitoIdentityPool
    #             "ForAnyValue:StringLike":
    #               "cognito-identity.amazonaws.com:amr": unauthenticated
    #     Policies:
    #       - PolicyName: "CognitoUnauthorizedPolicy"
    #         PolicyDocument:
    #           Version: "2012-10-17"
    #           Statement:
    #             - Effect: "Allow"
    #               Action:
    #                 - "mobileanalytics:PutEvents"
    #                 - "cognito-sync:*"
    #                 - "cognito-identity:*"
    #               Resource: "*"
    # AppSync lambda role
    AppSyncLambdaServiceRole:
      Type: "AWS::IAM::Role"
      Properties:
        RoleName: "Lambda-${self:custom.appSync.serviceRole}"
        AssumeRolePolicyDocument:
          Version: "2012-10-17"
          Statement:
            - Effect: "Allow"
              Principal:
                Service:
                  - "appsync.amazonaws.com"
              Action:
                - "sts:AssumeRole"
        Policies:
          - PolicyName: "Lambda-${self:custom.appSync.serviceRole}-Policy"
            PolicyDocument:
              Version: "2012-10-17"
              Statement:
                - Effect: "Allow"
                  Action:
                    - "lambda:invokeFunction"
                  Resource:
                    - "arn:aws:lambda:#{AWS::Region}:#{AWS::AccountId}:function:${self:service}-dev-graphql"
                    - "arn:aws:lambda:#{AWS::Region}:#{AWS::AccountId}:function:${self:service}-dev-graphql:*"
```