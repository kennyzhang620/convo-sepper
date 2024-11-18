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
# Generate a sine wave at 60 Hz
sample_rate = 22100  # Match the stream sample rate
duration = 1.0  # 1 second of audio
t = np.linspace(0, duration, int(sample_rate * duration))
sine_wave = np.sin(2 * np.pi * 60 * t)  # 60 Hz sine wave

print(sine_wave)
#stream.write(sine_wave)

'''
base = 65535
while (True):
    url = 'https://conv-count-poc-997c48b4c4cc.herokuapp.com/stream/1'

    r = requests.get(url, stream=False)
    err = False;

    try:
      data = np.frombuffer(r.content, dtype=np.int32)
      print(data, data.shape)
      #print("a1", np.where(data == base+ 0))
   #   print("a2", np.where(data == base+ 1))
      #stream.write((data.astype(np.float32, order='C') / 32768.0).tobytes())
    except:
      err = True

'''