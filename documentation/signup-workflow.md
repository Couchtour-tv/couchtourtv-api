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
            attributes: { email ) //fields.email
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
	
* user-login
	
	* wc > ws-api

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


* user-login-success
	
	* ws-api > wc

``` javascript
{
	'sender': connectionId,
	'action': 'user-login-success',
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


* user-login-error

	* ws-api > wc

``` javascript
{
	'sender': connectionId,
	'action': 'user-login-fail',
	'message': 'user logged in'
}
```


* user-signup

	* wc > ws-api

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


* user-signup-success

	* ws-api > wc

``` javascript
{
	'sender': connectionId,
	'action': 'user-signup-success',
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


* user-signup-error

	* ws-api > wc

``` javascript
{
	'sender': connectionId,
	'action': 'user-signup-error',
	'message': 'user not created'
}
```


* user-logout

	* wc > ws-api

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


* user-logout-success

	* ws-api > wc

``` javascript
{
	'sender': connectionId,
	'action': 'user-login-success',
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


* user-logout-error

	* ws-api > wc

``` javascript
{
	'sender': connectionId,
	'action': 'user-login-error',
	'message': 'user not logged in'
}
```

* user-verify-success

	* wc > ws-api

``` javascript
{
	'sender': connectionId,
	'action': 'user-verify-success',
	'message': {
		'message': 'user verified',
		'user': {
			"cogId": cogId, 
	    	"username": email, 
	    	"email": email,
	    	'loggedIn': true
		}

	}
}
```

* user-verify-error 

	* wc > ws-api

``` javascript
{
	'sender': connectionId,
	'action': 'user-verify-error',
	'message': {
		'message': 'error user verification attempt',
		'user': {
			"cogId": cogId, 
	    	"username": email, 
	    	"email": email,
	    	'loggedIn': true
		}

	}
}
```

* user-verification-resend-success

	* wc > ws-api

``` javascript
{
	'sender': connectionId,
	'action': 'user-verification-resend-success',
	'message': {
		'message': 'user resent verification',
		'user': {
			"cogId": cogId, 
	    	"username": email, 
	    	"email": email,
	    	'loggedIn': true
		}

	}
}
```

* user-verification-resend-error

	* wc > ws-api

``` javascript
{
	'sender': connectionId,
	'action': 'user-verification-resend-error',
	'message': {
		'message': 'error resending user verification',
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



