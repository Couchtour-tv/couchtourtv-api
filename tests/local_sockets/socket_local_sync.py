import websocket, json, pprint, time, uuid, time
# import _thread
from payloads.user_auth import *
from payloads.purchases import *

pp = pprint.PrettyPrinter(indent=4)


# ---------------------------------------------------------
LOCAL_WS_SERVER = 'ws://localhost:3001'

# ---------------------------------------------------------
ws = websocket.WebSocket()
ws.connect( LOCAL_WS_SERVER )

ws.send( json.dumps( CREDIT_CARD_PURCHASE ) )

resp = ws.recv()
print('\n\n\n Resp: ')
print(type(resp))

new_resp = json.loads(resp)
print(type(new_resp))
pp.pprint( new_resp )


# Infinite loop waiting for WebSocket data
# while True:
#     print(ws.recv())
