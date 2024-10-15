import requests
import numpy as np

import pyaudio

p = pyaudio.PyAudio()
stream = p.open(format=pyaudio.paFloat32,
                channels=1,
                rate=44100,
                frames_per_buffer=1024,
                output=True,
                )


while (True):
    url = 'https://conv-count-poc-997c48b4c4cc.herokuapp.com/str'

    r = requests.get(url, stream=False)
    err = False;

    try:
      data = np.frombuffer(r.content, dtype=int)
      print(data)
      stream.write(data.tobytes())
    except:
      err = True

