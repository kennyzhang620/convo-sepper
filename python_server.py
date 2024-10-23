import requests
import numpy as np

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
    url = 'https://conv-count-poc-997c48b4c4cc.herokuapp.com/str'

    r = requests.get(url, stream=False)
    err = False;

    try:
      data = np.frombuffer(r.content, dtype=np.int32)
      print(data, data.shape)
      #print("a1", np.where(data == base+ 0))
   #   print("a2", np.where(data == base+ 1))
      stream.write((data.astype(np.float32, order='C') / 32768.0).tobytes())
    except:
      err = True

