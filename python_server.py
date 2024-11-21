import requests
import numpy as np
import pandas as pd

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
      print(pcxy, row['cxy'], error(pcxy,row['cxy']) )
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
   datav = data.sort_values(by=['timestamp'])
   convos = pd.DataFrame()
   ind = 0
   for ids in clusters:
      convodf = pd.DataFrame()
      for id in ids:
         condf = datav.loc[datav['id'] == id].sort_values(by=['timestamp'])
         condf['convo'] = ind
         convodf = pd.concat([convodf, condf])
      ind += 1

      convos = pd.concat([convos, convodf])
  
   return convos;

while (True):
    url = 'https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-ids'
    url2 = 'https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-logs'
    r = requests.get(url, stream=False)
    r2 = requests.get(url2, stream=False)
    err = False;


    try:
      data = pd.read_json(r.text);
      data2 = pd.read_json(r2.text);
      c = cluster(data, 0.8);
      print(c)
    
      ts = transcripts(data2, c);
    
      ts.to_csv('conversations.csv', index=False)
    except:
      err = True

