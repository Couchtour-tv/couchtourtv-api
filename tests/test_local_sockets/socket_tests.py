import websocket, json, pprint, time

pp = pprint.PrettyPrinter(indent=4)

# ---------------------------------------------------------
def on_message(ws, message):
    print('\n\n\n message ::')
    print('\n')
    pp.pprint( message )

def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

# ---------------------------------------------------------
LOCAL_WS_SERVER = 'ws://localhost:3001'














# ---------------------------------------------------------
ws = websocket.WebSocket()
ws.connect( LOCAL_WS_SERVER )
ws.send( json.dumps() )

