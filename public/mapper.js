const XOFFSET = 256;
const YOFFSET = 256;

//const server = "https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-ids";
const server = "http://localhost:3000/convo-ts-ids";
const clusterServer = "http://localhost:3000/convo-ts-clusters";
const map = getElementID("map_points");
const scaler = document.getElementById('scale');

var inactiveparticipants = new Set();
var newInactiveParticipants = new Set();
var fformations = new Set();

function getElementID(strIn) {
    return document.getElementsByClassName(strIn)[0];
}

function addFFormationCircle(centerX, centerY, radius, formationId) {
    return `<div id="fformation-${formationId}" class="fformation-circle" style="position: absolute; border: 2px dashed green; border-radius: 50%; width: ${radius*2}px; height: ${radius*2}px; left: ${XOFFSET + centerX - radius}px; top: ${YOFFSET + centerY - radius}px;"></div>`;
}

function calculateFFormationCenter(points) {
    const centerX = points.reduce((sum, point) => sum + point.px, 0) / points.length;
    const centerY = points.reduce((sum, point) => sum + point.py, 0) / points.length;
    const radius = Math.max(...points.map(point => 
        Math.sqrt(Math.pow(point.px - centerX, 2) + Math.pow(point.py - centerY, 2))
    )) + 50; // Add a little extra padding
    return { centerX, centerY, radius };
}

function loadFFormations(e) {
    var dataArr = null;
    try {
        dataArr = JSON.parse(e);
    }
    catch (e) {
        console.error(e);
    }

    if (!dataArr) return;

    clearElements(fformations);

    // Draw F-formations
    for (var i =0;i<dataArr.length;i++) {
        const fformation = dataArr[i];
        console.log(fformation);
        // const formationPoints = dataArr.filter(point => formation.includes(point.id));

        for (ip in inactiveparticipants) {
            const { centerX, centerY, radius } = calculateFFormationCenter(formationPoints);
            appendElement(map, addFFormationCircle(centerX*scaler.value, centerY*scaler.value, radius*scaler.value, index));
            
            // Add to F-formation list
            const listItem = document.createElement('div');
            listItem.className = 'fformation-list-item';
            listItem.textContent = `F-formation ${index + 1}: ${formation.join(', ')}`;
            listItem.dataset.formationIndex = index;
            listItem.addEventListener('click', selectFFormation);
            fformationList.appendChild(listItem);
        }
    }
}

function selectFFormation(event) {
    const formationIndex = event.target.dataset.formationIndex;
    const selectedFormation = currentFFormations[formationIndex];
    
    // Highlight the selected formation
    document.querySelectorAll('.fformation-circle').forEach(circle => {
        circle.style.borderColor = 'green';
    });
    document.getElementById(`fformation-${formationIndex}`).style.borderColor = 'red';
    
    // You can add more interaction logic here, like showing details about the formation
    alert(`Selected F-formation: ${selectedFormation.join(', ')}`);
}

function addPoint(x,y, theta, id) {
    return `<div id="point" style="position: absolute;border-radius: 100px; border: 3px black solid;width: 25px;height: 25px;left: ${XOFFSET+x}px;top: ${YOFFSET+y}px;text-align: center;transform: rotate(${theta}deg);"><div id="arr" style="background-color: blue;width: 9px;height: 6px;left: 8px;position: relative;"></div>${id}</div>`
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

    newInactiveParticipants.clear();
    clearElements(map);
    for (var i =0;i<dataArr.length;i++) {
        const point = dataArr[i];

     //   console.log(point)
        if (point) {
            appendElement(map, addPoint(point.px*scaler.value, point.py*scaler.value, point.theta, point.id))

            if (point.paused) {
                newInactiveParticipants.add(point.id);
            }
        }
    }

    inactiveparticipants = new Set(newInactiveParticipants);
}

function map_loop() {
    sendPacket(server, 'GET', '', true, loadPoints,  null, 3000);
    sendPacket(clusterServer, 'GET', '', true, loadFFormations,  null, 3000);
}

setInterval(map_loop, 500);