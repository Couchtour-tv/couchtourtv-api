import socket, json, pprint

pp = pprint.PrettyPrinter(indent=4)


CONCERT_IN_FILE = 'concerts.json'
# HOST = '127.0.0.1'  # Standard loopback interface address (localhost)
# HOST = 'ws://localhost:3001' 
HOST = 'http://localhost:3001' 
PORT = 3001        # Port to listen on (non-privileged ports are > 1023)

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as target_socket:
	with open( CONCERT_IN_FILE ) as json_file:
		concerts = json.load(json_file)

		target_socket.connect((HOST, PORT))

		for i in concerts:
			payload = { 'action': 'upload-media-meta', 'message': i }
			pp.pprint( payload )
			pp.pprint( target_socket )
			payload_as_bytes = json.dumps( payload, indent=2).encode('utf-8')
			target_socket.sendall( payload_as_bytes ) 

			# target_socket.sendall( i )
			# target_socket.sendall(b'Hello, world')
			# data = target_socket.recv(1024)