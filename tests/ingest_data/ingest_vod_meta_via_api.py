import csv, requests, sys

"""
EXAMPLE USAGE;
	python3 ingest_vod_meta_via_api.py all local
	python3 ingest_vod_meta_via_api.py all remote
	python3 ingest_vod_meta_via_api.py one local
	python3 ingest_vod_meta_via_api.py one remote

	curl -X POST -D '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" http://localhost:3000/stg/api/v1/vod-merchandise-ingest 

	apiURL: https://p2d32ns7mnhhjogwd365jrnzdq.appsync-api.us-east-1.amazonaws.com/graphql
	apiKey: da2-w3fua4opgzaxjgfkfjxs7xvh7m
	api Gateway: https://2ygrym23r3.execute-api.us-east-1.amazonaws.com/stg/
"""

count = 0
LOCAL_ENDPOINT = 'http://localhost:3000/stg/api/v1/vod-merchandise-ingest'
REMOTE_ENDPOINT = 'https://2ygrym23r3.execute-api.us-east-1.amazonaws.com/stg/api/v1/vod-merchandise-ingest'
with open('vod-metadata.csv') as csvfile:
	reader = csv.DictReader(csvfile)
	for row in reader:
		print('\n---------------')
		if sys.argv[2] == 'local':
			api_resp = requests.post(
				LOCAL_ENDPOINT,
				data=row,
				headers={'Content-Type': 'application/json'}
			)
			print(api_resp.status_code)
			count += 1
		if sys.argv[2] == 'remote':
			api_resp = requests.post(
				REMOTE_ENDPOINT,
				data=row,
				headers={'Content-Type': 'application/json'}
			)
			print(api_resp.status_code)
			count += 1
		if sys.argv[1] == 'all':
			continue
		else:
			if count >= 1:
				print('\nExecuted 1 API call, exiting..')
				break
print('\n\n\n[Finished] Ingested {} VODs'.format(str(count)))