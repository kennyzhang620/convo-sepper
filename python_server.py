import requests
import numpy as np

import simpleaudio as sa

while (True):
    url = 'https://conv-count-poc-997c48b4c4cc.herokuapp.com/str'

    r = requests.get(url, stream=False)
    err = False;

    try:
      data = np.frombuffer(r.content, dtype=int)
      print(data)
      play_obj = sa.play_buffer(data, 1, 2, 44000)
    except:
      err = True

