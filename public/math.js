console.log("Test1");

    function downloadObjectAsJson(exportObj, exportName) {
        // https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }

    function sendPacket(url, type, data_main, asyncV = false, callback = null, failure = null, TIMEOUT=3000) {
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
                    
                    if (callback != null) {
                        callback(csvData)
                    }
    
                }
                else {
                    console.log("--->>>", txtFile.statusText);
                    if (failure != null) {
                        failure(txtFile.statusText)
                    }
                }
            }
        };
    
        txtFile.ontimeout = function(e) {
            console.err("Connection timed out. Please refresh the page and try again.");
        }
        
        txtFile.onerror = function (e) {
            console.err("An error has occurred. Please refresh the page and try again.");
            console.error(txtFile.statusText);
        };
    
        txtFile.send(JSON.stringify(data_main));
    }

    window.exportJson = function () {
        var obj = { ax: testX, ay: testY, az: testZ, vx: testVX, vy: testVY, vz: testVZ, px: testPX, py: testPY, pz: testPZ, theta: testTheta, gamma: testGamma, beta: testBeta };
        downloadObjectAsJson(obj, "dataxy")
    }

    function sampleAccel() {
    }

    // Sample only data +/- > thres
    function threshold(flv, thres, max=9.8) {
        if (flv > thres && flv < max)
            return flv

        if (flv < -thres && flv > -max)
            return flv

        return 0;
    }

    function abs(val){
        if (val < 0) return -val;

        return val;
    }

    // Add negated acceleration to counteract accuracy loss as result of thresholding
    function bias(val, offset, thres) {
        if (abs(thres - val) <= thres) {
            return 0
        }

        if (val > 0)
            return val - offset;

        if (val < 0)
            return val + offset;

        return 0;
    }

    function cutoff(val, maxval) {
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

    function rotationZ(angle, vector) {
        const x = Math.cos(angle) * vector[0] - Math.sin(angle) * vector[1] + 0;
        const y = Math.sin(angle) * vector[0] + Math.cos(angle) * vector[1] + 0;
        const z = vector[2];

        return [x, y, z];
    }

    function rotationY(angle, vector) {
        const x = Math.cos(angle) * vector[0] + 0 + Math.sin(angle) * vector[2]
        const y = vector[1];
        const z = -Math.sin(angle) * vector[0] + 0 + Math.cos(angle) * vector[2];

        return [x, y, z];
    }

    function rotationX(angle, vector) {
        const x = vector[1];
        const y = Math.cos(angle) * vector[1] - Math.sin(angle) * vector[2];
        const z = Math.sin(angle) * vector[1] + Math.cos(angle) * vector[2];

        return [x, y, z];
    }

    function radians(deg) {
        return ((deg * Math.PI) / 180);
    }