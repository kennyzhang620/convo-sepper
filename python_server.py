def play_data(filename, first_sec, second_sec):
  import ao
  from ao import AudioDevice 
  dev = AudioDevice(2, bits=16, rate=16000,channels=1)
  f = open(filename, 'r')
  data_len = (second_sec-first_sec)*32000
  f.seek(32000*first_sec)
  data = f.read(data_len)
  dev.play(data)
  f.close()


import requests
import numpy as np

while (True):
    url = 'https://conv-count-poc-997c48b4c4cc.herokuapp.com/str'

    r = requests.get(url, stream=True)
    err = False;

    for line in r.iter_lines():
        len(line)

