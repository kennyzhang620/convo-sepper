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
while (True):
    url = 'https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-logs'

    r = requests.get(url, stream=False)
    err = False;

    try:
      data = pd.read_json(r.content);
      print(data)
    except:
      err = True

