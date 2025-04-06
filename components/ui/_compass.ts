// adapted from https://codesandbox.io/s/flamboyant-flower-idzgd?fontsize=14&hidenavigation=1&theme=dark
// https://dev.to/orkhanjafarovr/real-compass-on-mobile-browsers-with-javascript-3emi
// https://idzgd.csb.app/

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
    requestPermission?: () => Promise<'granted' | 'denied'>;
}

class CompassCapture {
    compass = 0;
    gamma = 0;
    beta = 0;
    alpha = 0;

    isIOS =
        navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
        navigator.userAgent.match(/AppleWebKit/);

    pointDegree = 0;

    handler_compass = (e: any) => {
        this.compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
        this.alpha = e.alpha;
        this.gamma = e.gamma;
        this.beta = e.beta;

        // �15 degree
        if (
            (this.pointDegree < Math.abs(this.compass) &&
                this.pointDegree + 15 > Math.abs(this.compass)) ||
            this.pointDegree > Math.abs(this.compass + 15) ||
            this.pointDegree < Math.abs(this.compass)
        ) {
        } else if (this.pointDegree) {
        }
    }


    calcDegreeToPoint = (latitude: number, longitude: number) => {
        // Qibla geolocation
        const point = {
            lat: 21.422487,
            lng: 39.826206
        };

        const phiK = (point.lat * Math.PI) / 180.0;
        const lambdaK = (point.lng * Math.PI) / 180.0;
        const phi = (latitude * Math.PI) / 180.0;
        const lambda = (longitude * Math.PI) / 180.0;
        const psi =
            (180.0 / Math.PI) *
            Math.atan2(
                Math.sin(lambdaK - lambda),
                Math.cos(phi) * Math.tan(phiK) -
                Math.sin(phi) * Math.cos(lambdaK - lambda)
            );
        return Math.round(psi);
    }

    locationHandler = (position: GeolocationPosition) => {
        const { latitude, longitude } = position.coords;
        this.pointDegree = this.calcDegreeToPoint(latitude, longitude);

        console.log(this.pointDegree)
        if (this.pointDegree < 0) {
            this.pointDegree = this.pointDegree + 360;
        }
    }

    constructor() {

        const geol = navigator.geolocation;

        if (geol)
            geol.getCurrentPosition(this.locationHandler);

        if (!this.isIOS) {
            window.addEventListener("deviceorientationabsolute", this.handler_compass, true);
        }
        else {
            DeviceOrientationEvent.requestPermission()
                .then((response) => {
                    if (response === "granted") {
                        window.addEventListener("deviceorientation", this.handler_compass, true);
                    } else {
                        alert("has to be allowed!");
                    }
                })
                .catch(() => alert("not supported"));
        }
    }

};

export default CompassCapture;