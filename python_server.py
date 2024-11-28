import hashlib
import requests
import numpy as np
import pandas as pd
from io import StringIO
import pyaudio

p = pyaudio.PyAudio()
stream = p.open(format=pyaudio.paFloat32,
                channels=1,
                rate=22100,
                frames_per_buffer=1024,
                output=True,
                )

base = 65535

def error(exp, actual):
   if (exp == 0):
      return 0;

   return abs(exp - actual)

def cluster(df, err):
   pcxy = 0
   clusters = []
   ind = -1
   for index, row in df.sort_values(by=['cxy']).iterrows():
    #  print(pcxy, row['cxy'], error(pcxy,row['cxy']) )
      if ind == -1:
          clusters.append([row['id']])
          ind += 1
      else:
         if error(pcxy,row['cxy']) > err:
            clusters.append([row['id']])
            ind += 1
         else:
            clusters[ind].append(row['id'])

      pcxy = row['cxy']
   return clusters;

def transcripts(data, clusters):
   datav = data.sort_values(by=['timestamp']).drop_duplicates(subset='transcript', keep="last")
   convos = pd.DataFrame()
   ind = 0
   for ids in clusters:
      convodf = pd.DataFrame()
      for id in ids:
         condf = datav.loc[datav['id'] == id].sort_values(by=['timestamp'])
         condf['convo'] = ind
         convodf = pd.concat([convodf, condf]).sort_values(by=['timestamp'])
      ind += 1

      convos = pd.concat([convos, convodf])
  
   return convos;


def inference(transcript):
   url = "https://translate-server.herokuapp.com/chatrecvm"
   payload = {
      "prompt": "Infer the topic of the following conversation in 16 words or less (ignore numerical indicators): " + transcript
   }
   response = requests.post(url, json=payload)
   return response.json()

def tips(transcript):
   url = "https://translate-server.herokuapp.com/chatrecvm"
   payload = {
      "prompt": "Provide tips to help the user engage in this conversation: " + transcript
   }
   response = requests.post(url, json=payload)
   return response.json()

def send_advice(data):
   url = "https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-list"
   import json

   print(data)
   payload = json.loads(data)
   
   response = requests.post(url, json=payload)
   return response.json()

def cat(data):
   return data.to_string(index=False)

def advice(data):
   results = pd.DataFrame()
   for convo in data['convo'].unique():   
      datai = data.loc[data['convo'] == convo].sort_values(by=['timestamp'])

      ids = datai['id'].unique().tolist()
      inf = inference(cat(datai['transcript']))
      tip = tips(cat(datai['transcript']))
      if 'Please wait 1 minute before sending another message.' not in inf and 'Please wait 1 minute before sending another message.' not in tip:
         print(inf)
         results = pd.concat([results, pd.DataFrame({'convo_id': [convo], 'transcript': [cat(datai['transcript'])], 'inference': [inf], 'tips': [tip], 'ids': [ids]})])
   return results;

from pandas.util import hash_pandas_object

prevts = 0;
while (True):
    url = 'https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-ids'
    url2 = 'https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-logs'
    r = requests.get(url, stream=False)
    r2 = requests.get(url2, stream=False)
    err = False;


    try:
      data = pd.read_json(StringIO(r.text));
      data2 = pd.read_json(StringIO(r2.text));
      c = cluster(data, 1);
      print(c)
    
      ts = transcripts(data2, c)[['id', 'timestamp', 'transcript', 'convo', 'paused']].tail(80);
      if prevts != int(hashlib.sha256(hash_pandas_object(ts).values).hexdigest(), 16):
         prevts = int(hashlib.sha256(hash_pandas_object(ts).values).hexdigest(), 16)

         adv = advice(ts)

         if not adv.empty:
            adv.to_csv('advice.csv', index=False)
            send_advice(adv.to_json(orient='records'))
    
      ts.to_csv('conversations.csv', index=False)
    except Exception as e:
      print("Error: ", e)

