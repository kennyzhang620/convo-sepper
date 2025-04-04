function sendPacket(url: string, type:string, data_main: Object, asyncV = false, callback?: (data: string) => void, failure?: (error: string) => void, TIMEOUT=3000) {
  var txtFile = new XMLHttpRequest();
  txtFile.open(type, url, asyncV);

  txtFile.setRequestHeader("Accept", "application/json");
  txtFile.setRequestHeader("Content-Type", "application/json");
  txtFile.timeout = TIMEOUT;
  txtFile.onload = function (e) {
      if (txtFile.readyState === 4) {
          if (txtFile.status === 200) {
              var csvData = txtFile.responseText;
             // console.log(csvData, "<<<<");
           //   console.log(csvData)
              
              if (callback) {
                  callback(csvData)
              }

          }
          else {
          //    console.log("--->>>", txtFile.statusText);
              if (failure) {
                  failure(txtFile.statusText)
              }
          }
      }
  };

  txtFile.ontimeout = function(e) {
      console.error("Connection timed out. Please refresh the page and try again.");
  }
  
  txtFile.onerror = function (e) {
      console.error("An error has occurred. Please refresh the page and try again.");
      console.error(txtFile.statusText);
  };

  txtFile.send(JSON.stringify(data_main));
}

function sampleAccel() {
}

// Sample only data +/- > thres
function threshold(flv:number, thres:number, max=9.8) {
  if (flv > thres && flv < max)
      return flv

  if (flv < -thres && flv > -max)
      return flv

  return 0;
}

function abs(val: number){
  if (val < 0) return -val;

  return val;
}

// Add negated acceleration to counteract accuracy loss as result of thresholding
function bias(val: number, offset: number, thres: number, maxv: number) {
  if (abs(thres - val) <= thres) {
      return 0
  }

  if (maxv > val && val > 0)
      return val - offset;

  if (-maxv < val && val < 0)
      return val + offset;

  return 0;
}

function cutoff(val: number, maxval: number) {
  if (val > maxval)
      return maxval;

  if (val < -maxval)
      return -maxval;

  return val;
}

var timeElapsed = 0;

var axc = 0, ayc = 0, azc = 0;
var diff = 0;
var avgZ = 0;

function rotationZ(angle: number, vector: [number, number, number]): [number, number, number] {
  const x = Math.cos(angle) * vector[0] - Math.sin(angle) * vector[1] + 0;
  const y = Math.sin(angle) * vector[0] + Math.cos(angle) * vector[1] + 0;
  const z = vector[2];

  return [x, y, z];
}

function rotationY(angle: number, vector: [number, number, number]): [number, number, number] {
  const x = Math.cos(angle) * vector[0] + 0 + Math.sin(angle) * vector[2]
  const y = vector[1];
  const z = -Math.sin(angle) * vector[0] + 0 + Math.cos(angle) * vector[2];

  return [x, y, z];
}

function rotationX(angle: number, vector: [number, number, number]): [number, number, number] {
  const x = vector[1];
  const y = Math.cos(angle) * vector[1] - Math.sin(angle) * vector[2];
  const z = Math.sin(angle) * vector[1] + Math.cos(angle) * vector[2];

  return [x, y, z];
}

function radians(deg: number) {
  return ((deg * Math.PI) / 180);
}