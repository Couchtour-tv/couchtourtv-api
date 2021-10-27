import csv, requests

with open('vod-metadata.csv') as csvfile:
	reader = csv.DictReader(csvfile)
	for row in reader:
		print('\n---------------')
		# print(row)
		api_resp = requests.post(
			'http://localhost:3000/stg/api/v1/ingest-vod-merchandise', 
			data = { 'vod_data': row }
		)
		print(api_resp.status_code)