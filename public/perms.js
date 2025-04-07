let A = setInterval(perms, 100);

function perms() {
    console.log("inj")
    let V = document.getElementById("convomap")
    if (V) {
        V.addEventListener('click', function () {
            DeviceOrientationEvent.requestPermission()
                .then((response) => {
                    if (response === "granted") {
                        alert("wtf")
                    } else {
                        alert("has to be allowed!");
                    }
                })
                .catch(() => alert("not supported"));
        });

        clearInterval(A)
        console.log("inj success")
    }

}


