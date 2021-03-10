## SignUp WorkFlow


#### --------------------------------------------------------------------------------------------------
####  Docs

* Sign Up [AWS Amplify AUTH](https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#sign-up)
	* Confirm Sign Up [AWS Amplify AUTH](https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#confirm-sign-up)
	* Session Mgmt [AWS Amplify AUTH](https://docs.amplify.aws/lib/auth/manageusers/q/platform/js#retrieve-current-session)
	* functionality made available to the [ **CognitoUser**](https://github.com/aws-amplify/amplify-js/blob/4644b4322ee260165dd756ca9faeb235445000e3/packages/amazon-cognito-identity-js/index.d.ts#L48) 
* Sign In [AWS Amplify AUTH](https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#sign-in)
* Sign Out [AWS Amplify AUTH](https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js#sign-out)


#### --------------------------------------------------------------------------------------------------
#### Sign Up

Steps ::

* Auth[js] call	
``` javascript

import { Auth } from 'aws-amplify';

async function signUp() {
    try {
        const { user } = await Auth.signUp({
            username, // fields.email 
            password, // fields.password
            attributes: { email }//fields.email
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}
```

* returns **ISignUpResult** (a promise):
``` javascript
{
    user: CognitoUser;
    userConfirmed: boolean;
    userSub: string;
}
```

* confirm signup 

```javascript
import { Auth } from 'aws-amplify';

async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}
````

* on success of confirm, building payload :
	
	* retrieve cogId:

``` javascript 
const credentials = await Auth.currentUserCredentials();
const cogId = credentials.identityId
``` 
	* Auth.currentSession() returns a CognitoUserSession object which contains JWT accessToken, idToken, and refreshToken.
		* For example: ```Auth.currentSession().accessToken```

``` javascript
Auth.currentSession()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

* build and send payload : 


``` javascript
{
    "action": "user-signup", 
    "message": {
    	"cogId": cogId, 
    	"username": email, 
    	"email": email,
    	"accessToken": token,
    	"idToken": idToken,
    	"refreshToken": refreshToken
    }
}
````

* [[ serverside ]]

	* set User ID as UUID 
	
	* set table keys 
		
		* email = email
		* cogId = cogId
	
	* set logged in true
	
	* write object 
		
		* on success of write: 
			
			* drop accessToken, idToken, refreshToken 
			* return payload to web page

	* payload: 

``` javascript
{
	'sender': connectionId,
	'action': 'user-signup',
	'message': {
		'message': 'user created',
		'user': {
			"cogId": cogId, 
	    	"username": email, 
	    	"email": email,
	    	'loggedIn': true
		}

	}
}
```

* [[ client side ]]
	
	* recieve payload, add message.user to global state
	* redirect web page/url-route


#### --------------------------------------------------------------------------------------------------
#### Sign In 

Steps ::

* Auth[js] call
``` javascript
import { Auth } from 'aws-amplify';

async function signIn() {
    try {
        const user = await Auth.signIn(username, password);
    } catch (error) {
        console.log('error signing in', error);
    }
}
````

* Auth.currentSession() returns a CognitoUserSession object which contains JWT accessToken, idToken, and refreshToken.
	* For example: ```Auth.currentSession().accessToken```

``` javascript
Auth.currentSession()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

* payload: 
``` javascript
{
    "action": "user-login", 
    "message": {
    	"email": email
        "accessToken": token,
    	"idToken": idToken,
    	"refreshToken": refreshToken
    }
}
```

* [[ server side ]]

	* parse payload
	* [ for user ] update accessToken, idToken refreshToken
	* [ for user ] update loggedIn true
	* return payload:

``` javascript
{
	'sender': connectionId,
	'action': 'user-login',
	'message': {
		'message': 'user logged in',
		'user': {
			"cogId": cogId, 
	    	"username": email, 
	    	"email": email,
	    	'loggedIn': true
		}

	}
}
```


#### --------------------------------------------------------------------------------------------------
#### Sign Out

Steps ::

* Auth call :

```javascript
import { Auth } from 'aws-amplify';
async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}
````

* Auth.currentSession() returns a CognitoUserSession object which contains JWT accessToken, idToken, and refreshToken.
	* For example: ```Auth.currentSession().accessToken```

``` javascript
Auth.currentSession()
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

* payload: 
``` javascript
{
    "action": "user-logout", 
    "message": {
    	"email": email
        "accessToken": token,
    	"idToken": idToken,
    	"refreshToken": refreshToken
    }
}
```

* [[ server side ]]

	* parse payload
	* [ for user ] update accessToken, idToken refreshToken
	* [ for user ] update loggedIn true
	* return payload:

``` javascript
{
	'sender': connectionId,
	'action': 'user-login',
	'message': {
		'message': 'user logged in',
		'user': {
			"cogId": cogId, 
	    	"username": email, 
	    	"email": email,
	    	'loggedIn': true
		}

	}
}
```


#### --------------------------------------------------------------------------------------------------
####  Application Actions
#### --------------------------------------------------------------------------------------------------

###### Cognito Verification 

* user-verify-success
	* **wc > ws-api**
	* in cognito land, after a successful verification

``` javascript
{
	"sender": connectionId,
	"action": "user-verify-success",
	"message": {
		"cogId": cogId, 
    	"username": email, 
    	"email": email,
    	"emailVerified": true, // verified will be true, because on success of cognito verification 
    	"loggedIn": false  // loggedIn will be false, because not yet logged in
	}
}
```

* user-verify-success-resp
	* **ws-api > wc**
	* in resp to [user-verify-success]
	* wc socket handler needs to be able to handle this message [see: socketProvider.onMesssage]
		* TO-DO :: 
			* UI handle anything ?
			* what to put in react state ?
		* just console.log message for now

``` javascript
{
	"sender": connectionId,
	"action": "user-verify-success-resp",
	"message": {
		"displayMessage": "Noting Successful User Verification"
		"cogId": cogId, // returned to frontend as provided from frontend
    	"username": email, // returned to frontend as provided from frontend
    	"email": email, // returned to frontend as provided from frontend
    	"emailVerified": true, // verified will be true, because on success of cognito verification 
    	"loggedIn": false // loggedIn will be false, because not yet logged in
	}
}
```

* user-verify-error 
	* **wc > ws-api**
	* in cognito land, after a ERROR verification

``` javascript
{
	"sender": connectionId,
	"action": "user-verify-error",
	"message": {
		"cogId": cogId, 
    	"username": email, 
    	"email": email,
    	"emailVerified": false, // verified will be false, because of ERROR of cognito verification 
    	"loggedIn": false // loggedIn will be false, because not yet logged in
    }
}
```

* user-verify-error-resp
	* **ws-api > wc**
	* in resp to [user-verify-error]
	* wc socket handler needs to be able to handle this message [see: socketProvider.onMesssage]
		* TO-DO :: 
			* UI handle anything ?
			* what to put in react state ?
		* just console.log message for now

``` javascript
{
	"sender": connectionId,
	"action": "user-verify-error-resp",
	"message": {
		"displayMessage": "Noting Error User Verification"
		"cogId": cogId, // returned to frontend as provided from frontend
    	"username": email, // returned to frontend as provided from frontend
    	"email": email, // returned to frontend as provided from frontend
    	"emailVerified": false, // verified will be false, because of ERROR of cognito verification 
    	"loggedIn": false // loggedIn will be false, because not yet logged in
    }
}
```

* user-verify-resend-success
	* **wc > ws-api**
	* in cognito land, after a successful resend of verification

``` javascript
{
	"sender": connectionId,
	"action": "user-verify-resend-success",
	"message": {
		"cogId": cogId, 							
    	"username": email, 							
    	"email": email,								
    	"emailVerified": bool, // this is will be false, because user will be 
    	"loggedIn": bool // this can be true or false, because can be logged in but not verified
    }
}
```

* user-verify-resend-success-resp
	* **wc > ws-api**
	* in resp to [user-verify-resend-success]
	* wc socket handler needs to be able to handle this message [see: socketProvider.onMesssage]
		* TO-DO :: 
			* UI handle anything ?
			* what to put in react state ?
		* just console.log message for now

``` javascript
{
	"sender": connectionId,
	"action": "user-verify-resend-success-resp",
	"message": {
		"displayMessage": "Noting Successful Resend of User Verification"
		"cogId": cogId, 							
    	"username": email, 							
    	"email": email,								
    	"emailVerified": bool,						
    	"loggedIn": bool 							
    }
}
```

* user-verify-resend-error
* **wc > ws-api**
	* in cognito land, after a ERROR resend of verification

``` javascript
{
	"sender": connectionId,
	"action": "user-verification-resend-error",
	"message": {
		"cogId": cogId, 
    	"username": email, 
    	"email": email,
    	"emailVerified": bool,
    	"loggedIn": bool
	}
}
```

* user-verify-resend-error-resp
	* **wc > ws-api**
	* in resp to [user-verify-resend-error]
	* wc socket handler needs to be able to handle this message [see: socketProvider.onMesssage]
		* TO-DO :: 
			* UI handle anything ?
			* what to put in react state ?
		* just console.log message for now

``` javascript
{
	"sender": connectionId,
	"action": "user-verify-resend-error-resp",
	"message": {
		"displayMessage": "Noting ERROR Resend of User Verification"
		"cogId": cogId, 							
    	"username": email, 							
    	"email": email,								
    	"emailVerified": bool,						
    	"loggedIn": bool 							
    }
}
```

###### Cognito Sign UP

* user-signup
	* **wc > ws-api**
	* after cognito signup AND confirm signup is completed in the UI 

``` javascript
{
    "action": "user-signup", 
    "message": {
    	"cogId": cogId, 
    	// attn: does form take email or username ?
    	// set payload.username and payload.email to email
    	"username": email, 
    	"email": email,
    	"emailVerified": bool,
    	"accessToken": token,
    	"idToken": idToken,
    	"refreshToken": refreshToken
    }
}
````

* user-signup-success
	* **ws-api > wc**
		* in response [user-signup] socket call
		* on SUCCESS of backend signup 
		* wc socket handler needs to be able to handle this message [see: socketProvider.onMesssage]
			* TO-DO :: 
				* UI handle anything ?
				* what to put in react state ?
			* just console.log message for now
	
``` javascript
{
	"sender": connectionId,
	"action": "user-signup-success",
	"message": {
		"displayMessage": "user created",
		"userId": id, // generated on backend
		"cogId": cogId, // returned to frontend as provided from frontend
    	"username": email, // returned to frontend as provided from frontend
    	"email": email, // returned to frontend as provided from frontend
    	"emailVerified": bool, // returned to frontend as provided from frontend
    	"loggedIn": true // if successful db write, will set to logged = True on backend
	}
}
```

* user-signup-error
	* **wc > ws-api**
	* after cognito signup AND confirm signup is completed in the UI 
	
``` javascript
{
	"sender": connectionId,
	"action": "user-signup-error",
	"message": {
		"displayMessage": "user not created",
		"cogId": cogId, // returned to frontend as provided from frontend 
    	"username": email, // returned to frontend as provided from frontend 
    	"email": email, // returned to frontend as provided from frontend
    	"emailVerified": bool, // returned to frontend as provided from frontend
    	"loggedIn": false // if ERROR db write, will set to logged = False on backend, or leave false as default on backend
	}
}
``` 	

###### Cognito Log In

* user-login
	* **wc > ws-api**
	* after [cognito Login] Success

``` javascript
{
    "action": "user-login", 
    "message": {
    	"email": email,
    	"emailVerified": bool,
        "accessToken": token,
    	"idToken": idToken,
    	"refreshToken": refreshToken,
    	"loggedIn": true // true because of cognito loggin success
    }
}
```


* user-login-success
	* **ws-api > wc**
	* on SUCCESS of backend LOG IN 
		* wc socket handler needs to be able to handle this message [see: socketProvider.onMesssage]
			* TO-DO :: 
				* UI handle anything ?
				* what to put in react state ?
			* just console.log message for now

``` javascript
{
	"sender": connectionId,
	"action": "user-login-success",
	"message": {
		"userId": id, // redeemed from db query
		"displayMessage": "user logged in",
		"cogId": cogId, // returned to frontend as provided from frontend
    	"username": email, // returned to frontend as provided from frontend
    	"email": email, // returned to frontend as provided from frontend
    	"emailVerified": boolean, // returned to frontend as provided from frontend
    	"loggedIn": true // updated user record in db to mirror logged in state
    }
}
```


* user-login-error
	* **ws-api > wc**
	* on ERROR of backend LOG IN 
		* wc socket handler needs to be able to handle this message [see: socketProvider.onMesssage]
			* TO-DO :: 
				* UI handle anything ?
				* what to put in react state ?
			* just console.log message for now

``` javascript
{
	"sender": connectionId,
	"action": "user-login-error",
	"message": {
		"userId": id, // db will actually have ID primary for user, see successful signUp
		"displayMessage": "user not able to log in",
		"cogId": cogId, // returned to frontend as provided from frontend 
    	"username": email, // returned to frontend as provided from frontend
    	"email": email, // returned to frontend as provided from frontend
    	"emailVerified": bool, // returned to frontend as provided from frontend
    	"loggedIn": false // update errored, loggedIn is false
	}
}
```

###### Cognito Log Out

* user-logout
	* **wc > ws-api**
	* after [cognito LogOut] Success

``` javascript
{
    "action": "user-logout", 
    "message": {
    	"userId": id, // backend generated previously, now returned to ui
    	"email": email, // returned to frontend as provided from frontend
    	"emailVerified": bool, // returned to frontend as provided from frontend
        "accessToken": token, // returned to frontend as provided from frontend
    	"idToken": idToken, // returned to frontend as provided from frontend
    	"refreshToken": refreshToken, // returned to frontend as provided from frontend
    	"loggedIn": false
    }
}
```

* user-logout-success
	* **ws-api > wc**
	* on SUCCESS of backend LOG OUT 
		* wc socket handler needs to be able to handle this message [see: socketProvider.onMesssage]
			* TO-DO :: 
				* UI handle anything ?
				* what to put in react state ?
			* just console.log message for now

``` javascript
{
	"sender": connectionId,
	"action": "user-logout-success",
	"message": {
		"userId": id, // backend generated previously, now returned to ui
		"displayMessage": "user logged-out",
		"cogId": cogId, // returned to frontend as provided from frontend
    	"username": email, // returned to frontend as provided from frontend
    	"email": email, // returned to frontend as provided from frontend
    	"emailVerified": bool, // returned to frontend as provided from frontend
    	"loggedIn": false // mirrors successful db update
	}
}
```


* user-logout-error
	* **ws-api > wc**
	* on ERROR of backend LOG OUT 
		* wc socket handler needs to be able to handle this message [see: socketProvider.onMesssage]
			* TO-DO :: 
				* UI handle anything ?
				* what to put in react state ?
			* just console.log message for now

``` javascript
{
	"sender": connectionId,
	"action": "user-login-error",
	"message": {
		"userId": id, // backend generated previously, now returned to ui
		"displayMessage": "user not logged-out",
		"cogId": cogId, // returned to frontend as provided from frontend
    	"username": email, // returned to frontend as provided from frontend
    	"email": email, // returned to frontend as provided from frontend
    	"emailVerified": boolean, // returned to frontend as provided from frontend
    	"loggedIn": true // no successfull db update, user remains "logged in true" 
	}
}
```


#### --------------------------------------------------------------------------------------------------
####  USER STATES 
	
* loggedin-user 
	* [ authenticated web client routes]

* non-confirmed-user 
	* [non-authenticated web client routes]

* no-session (anybody can execute funcitonality)
	* [non-authenticated web client routes]


#### --------------------------------------------------------------------------------------------------
####  Daily Iterables

* github merges -- keeping racetracks clean
* env files
* aws credentials
* dan sync 



