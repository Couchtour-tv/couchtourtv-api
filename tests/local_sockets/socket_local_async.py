import websocket, json, pprint, time, uuid, time
# import _thread
from payloads import *

# -------------------------------------------------------------
pp = pprint.PrettyPrinter(indent=4)
LOCAL_WS_SERVER = 'ws://localhost:3001'

# -------------------------------------------------------------
def on_message(ws, message):
    print('\n[on_message]:')
    pp.pprint(message)

def on_data(ws, message):
    print('\n[on_data]:')
    pp.pprint(message)

def on_error(ws, error):
    print('\n[on_error]')
    print(error)

def on_close(ws):
    print('\n\n\n[on_close]')

# def on_open(ws):
#     def run(*args):
#         for i in range(3):
#             time.sleep(1)
#             ws.send("Hello %d" % i)
#         time.sleep(1)
#         ws.close()
#         print("thread terminating...")
#     thread.start_new_thread(run, ())
def on_open(ws):
    def run(*args):
        print("\n\n\nBeginning Sequence...")
        ws.send( json.dumps( USER_VERIFY_ERROR ) )
    thread.start_new_thread(run, ())

websocket.enableTrace(True)
ws = websocket.WebSocketApp(
    LOCAL_WS_SERVER,
    on_message = on_message,
    on_error = on_error,
    on_close = on_close
)
ws.run_forever()