import csv, requests, sys

"""
EXAMPLE USAGE;
	python3 ingest_vod_meta_via_graphql.py one
	python3 ingest_vod_meta_via_graphql.py all
"""

count = 0
REMOTE_ENDPOINT = 'https://2ygrym23r3.execute-api.us-east-1.amazonaws.com/stg/api/v1/vod-merchandise-ingest'

# establish a session with requests session
session = requests.Session()

with open('vod-metadata.csv') as csvfile:
	reader = csv.DictReader(csvfile)

	for row in reader:
		if sys.argv[1] != 'all':
			if count >= 1:
				print('\nExecuted 1 API call, exiting..')
				break
		print('\n---------------')
		query = """
			mutation addOneVODmerchandise {createMerchandise(input: {type: vod, VODMetaData: {band: "{}", date: "{}", description: "Set: {}", location: "{}", price: "999", venue: "{}", videoURL: "{}" }, date: "", description: "", name: "", price: ""} ) { id } }
		""".format(
			row['band'],
			row['date'],
			row['set'],
			row['Location'],
			row['Venue'],
			row['url']
		)
		response = session.request(
		    url=REMOTE_ENDPOINT,
		    method='POST',
		    headers={'x-api-key': 'da2-w3fua4opgzaxjgfkfjxs7xvh7m'},
		    json={'query': query}
		)
		count += 1
		print(response.json()['data'])
print('\n\n\n[Finished] Ingested {} VODs'.format(str(count)))











