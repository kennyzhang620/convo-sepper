DeviceOrientationEvent.requestPermission()
    .then((response) => {
        if (response === "granted") {
            alert("wtf")
        } else {
            alert("has to be allowed!");
        }
    })
    .catch(() => alert("not supported"));