import csv, requests, sys

print('\n---------------')
_id = str(sys.argv[1])
api_resp = requests.post(
	'http://localhost:3000/stg/api/v1/delete-vod-merchandise-by-id',
	data = { 'vod_id': _id }
)
print(api_resp.status_code)