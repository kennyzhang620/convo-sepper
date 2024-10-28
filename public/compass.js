// adapted from https://codesandbox.io/s/flamboyant-flower-idzgd?fontsize=14&hidenavigation=1&theme=dark
// https://dev.to/orkhanjafarovr/real-compass-on-mobile-browsers-with-javascript-3emi
// https://idzgd.csb.app/

const isIOS =
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/);

function handler_compass(e) {
    compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
    // ±15 degree
    if (
        (pointDegree < Math.abs(compass) &&
            pointDegree + 15 > Math.abs(compass)) ||
        pointDegree > Math.abs(compass + 15) ||
        pointDegree < Math.abs(compass)
    ) {
    } else if (pointDegree) {
    }
}

let pointDegree;

function locationHandler(position) {
    const { latitude, longitude } = position.coords;
    pointDegree = calcDegreeToPoint(latitude, longitude);

    if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
    }
}

function calcDegreeToPoint(latitude, longitude) {
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
