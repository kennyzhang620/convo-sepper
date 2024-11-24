const XOFFSET = 256;
const YOFFSET = 256;

function getElementID(strIn) {
    return document.getElementsByClassName(strIn)[0];
}

function addPoint(x,y, theta, id) {
    return `<div id="point" style="position: fixed;border-radius: 100px; border: 3px black solid;width: 25px;height: 25px;left: ${XOFFSET+x}px;top: ${YOFFSET+y}px;text-align: center;transform: rotate(${theta}deg);"><div id="arr" style="background-color: blue;width: 9px;height: 6px;left: 8px;position: relative;"></div>${id}</div>`
}

function appendElement(classL, htmlL) {
    var newNode = document.createRange().createContextualFragment(htmlL);
    classL.appendChild(newNode);
}

function clearElements(classL) {
    while (classL.firstChild) {
        classL.removeChild(classL.firstChild);
    }

}

const server = "https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-ids";
const map = getElementID("map_points");
const scaler = document.getElementById('scale');

function loadPoints(e) {

    var dataArr = null;
   // console.log(e)
    try {
        dataArr = JSON.parse(e);
    }
    catch (e) {
        console.error(e);
    }

    if (!dataArr) return;

    clearElements(map);
    for (var i =0;i<dataArr.length;i++) {
        const point = dataArr[i];

     //   console.log(point)
        if (point)
            appendElement(map, addPoint(point.px*scaler.value, point.py*scaler.value, point.theta, point.id))
    }

}

function map_loop() {
    sendPacket(server, 'GET', '', true, loadPoints,  null, 3000)
}

setInterval(map_loop, 500);
