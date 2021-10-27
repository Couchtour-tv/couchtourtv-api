import websocket, json, pprint, time, uuid, time
# import _thread
from payloads.user_auth import *
from payloads.purchases import *
from payloads.media import *

pp = pprint.PrettyPrinter(indent=4)


# ---------------------------------------------------------
LOCAL_WS_SERVER = 'ws://localhost:3001'

# ---------------------------------------------------------
ws = websocket.WebSocket()
ws.connect( LOCAL_WS_SERVER )

# ws.send( json.dumps( USER_SIGNUP ) )
# ws.send( json.dumps( ADD_CARD_TO_WALLET ) )
# ws.send( json.dumps( GET_USER_CREDIT_CARDS ) )

# ws.send( json.dumps( ALL_EVENTS ) )
# ws.send( json.dumps( ALL_TICKETS ) )
# ws.send( json.dumps( GET_USER_ID ) )
ws.send( json.dumps( GET_TICKETS ) )

resp = ws.recv()
print('\n\n\n Resp: ')
print(type(resp))

new_resp = json.loads(resp)
print(type(new_resp))
pp.pprint( new_resp )


# Infinite loop waiting for WebSocket data
# while True:
#     print(ws.recv())
