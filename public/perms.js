const isIOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !window.MSStream;

if (IsIOS) {

    let A = setInterval(perms, 100);

    function perms() {
        console.log("inj")
        let V = document.getElementById("convomap")
        if (V) {
            V.addEventListener('click', function () {
                DeviceOrientationEvent.requestPermission()
                    .then((response) => {
                        if (response === "granted") {
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
}

