api_key = 'your api token'
import datetime

ts = datetime.datetime.now(datetime.timezone.utc)
td = datetime.timedelta(hours=1)

ts = ts - td
after = ts.isoformat()

from googleapiclient.discovery import build

youtube = build('youtube', 'v3', developerKey=api_key)
request = youtube.search().list(
  maxResults = 3,
  order = 'date',
  part = 'snippet',
  publishedBefore = after,
  q = 'Biden',
  type = 'video',

)

response = request.execute()

print(response)