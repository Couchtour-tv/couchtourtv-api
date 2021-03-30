import uuid

## UUID GENERATOR :: https://www.uuidgenerator.net/version4

# -------------------------------------------------------------------------
# -- get all videos meta

GET_META_VIDEO = {
    "sender": "bcd16999-916a-4071-81c4-7a822146c384",
    "action": "getvideos",
    "message": {}
}

# -------------------------------------------------------------------------
# -- Auth Attempt

# -- Done
USER_VERIFY_RESEND_ERROR = {
    "sender": "bcd16999-916a-4071-81c4-7a822146c384",
    "action": "user-verify-resend-error",
    "message": {
        "cogId": "e0e4779e-1da0-414b-b428-d784ce901e8a",
        "username": "inspector@gadget.com",
        "email": "inspector@gadget.com",
        "emailVerified": False,
        "loggedIn": False
    }
}
# -- Done
USER_VERIFY_RESEND_SUCCESS = {
    "sender": "bcd16999-916a-4071-81c4-7a822146c384",
    "action": "user-verify-resend-success",
    "message": {
        "cogId": "e0e4779e-1da0-414b-b428-d784ce901e8a",
        "username": "inspector@gadget.com",
        "email": "inspector@gadget.com",
        "emailVerified": False,
        "loggedIn": False
    }
}
# -- Done
USER_VERIFY_ERROR = {
    "sender": "bcd16999-916a-4071-81c4-7a822146c384",
    "action": "user-verify-error",
    "message": {
        "cogId": "e0e4779e-1da0-414b-b428-d784ce901e8a",
        "username": "inspector@gadget.com",
        "email": "inspector@gadget.com",
        "emailVerified": False,
        "loggedIn": False
    }
}
# -- Done
USER_VERIFY_SUCCESS = {
    "sender": "bcd16999-916a-4071-81c4-7a822146c384",
    "action": "user-verify-success",
    "message": {
        "cogId": "e0e4779e-1da0-414b-b428-d784ce901e8a",
        "username": "inspector@gadget.com",
        "email": "inspector@gadget.com",
        "emailVerified": True,
        "loggedIn": False
    }
}
# -- Done
USER_SIGNUP_ERROR = {
    "sender": "bcd16999-916a-4071-81c4-7a822146c384",
    "action": "user-signup-error",
    "message": {
        "cogId": "e0e4779e-1da0-414b-b428-d784ce901e8a",
        "username": "inspector@gadget.com",
        "email": "inspector@gadget.com",
        "emailVerified": False,
        "loggedIn": False
    }
}

# -------------------------------------------------------------------------
# -- Sign Up, Login, Logout

USER_SIGNUP = {
    "action": "user-signup",
    "message": {
        "cogId": "ac31df0a-2847-4123-8daa-e57227c52924",
        "username": "bugs.bunny@looneytunes.com",
        "email": "bugs.bunny@looneytunes.com",
        "emailVerified": True,
        "accessToken": {
            'value1': 'key1',
            'value2': 'key2'
        },
        "idToken": {
            'value1': 'key1',
            'value2': 'key2'
        },
        "refreshToken": {
            'value1': 'key1',
            'value2': 'key2'

        }
    }
}

USER_LOGIN = {
    "action": "user-login",
    "message": {
        "testMessage": "iAmAtestMessage",
        "username": "bugs.bunny@looneytunes.com",
        "email": "bugs.bunny@looneytunes.com",
        "emailVerified": False,
        "loggedIn": True,
        "accessToken": {
            'value1': 'key1',
            'value2': 'key2'
        },
        "idToken": {
            'value1': 'key1',
            'value2': 'key2'
        },
        "refreshToken": {
            'value1': 'key1',
            'value2': 'key2'
        }
    }
}

USER_LOGOUT = {
    "action": "user-logout",
    "message": {
        "userId": "bfeabafe-931d-46d7-9250-6fff4cb37537",
        "cogId": "ac31df0a-2847-4123-8daa-e57227c52924",
        "username": "bugs.bunny@looneytunes.com",
        "email": "bugs.bunny@looneytunes.com",
        "emailVerified": False,
        "loggedIn": False,
        "accessToken": {
            'value1': 'key1',
            'value2': 'key2'
        },
        "idToken": {
            'value1': 'key1',
            'value2': 'key2'
        },
        "refreshToken": {
            'value1': 'key1',
            'value2': 'key2'
        }
    }
}