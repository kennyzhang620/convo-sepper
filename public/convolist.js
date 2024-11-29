const convoserver = "https://conv-count-poc-997c48b4c4cc.herokuapp.com/convo-ts-list"

function clearCells() {
	var inner = document.getElementsByClassName("convo_container");

	if (inner != null) {
		var container = inner[0];

		while (container.firstChild) {
			container.removeChild(container.firstChild);
		}

	}

	console.log("cleared/");
}

function generateConvoList(transcript, max_size) {
	var res = ""

    for (var i = 0; i < transcript.length; i++) {
        if (i < max_size) {
            res += ` <div id="organization_bdy" style="padding:6px; width: 90%;">${transcript[i].trim()}</div>`
        }
    }

    return res;
}

function checkPaused(ids) {
    for (var i=0;i<ids.length;i++) {
        if (inactiveparticipants.has(ids[i]))
            return true
    }

    return false;
}

function generateCell(res, max_size) {

	var inner = document.getElementsByClassName("convo_container");
	//console.log("res: ", res);
	var newNode = null;
	for (var i = 0; i < res.length; i++) {
		if (inner != null && res != null && i < max_size) {

			var container = inner[0];

			//console.log("res1: ", res[i].Project)
			var filler = `<div id="filler" style="width: 100px; height: 100px;"></div>`;

			var html = `<div class="img_header" style='border: 1px solid black; border-radius: 10px; background-color: ${checkPaused(res[i].ids) ? "yellow" : "white"}'>
							<div class="text_content">
                                <div id="title_header" style="padding:6px; width: 90%;">${res[i].inference}</div>
                                <h3>Transcript</h3>
                                ${generateConvoList(res[i].transcript.trim().split("\n"), max_size)}
                                <h3>Tips</h3>
                                ${generateConvoList(res[i].tips.trim().split("\n"), max_size)}
                            </div>
                        </div>`;
            // console.log(html);
			newNode = document.createRange().createContextualFragment(html);
			container.appendChild(newNode);
		}
	}

	if (newNode != null) {
		newNode = document.createRange().createContextualFragment(filler);
		container.appendChild(newNode);
	}

}

function loadConvo(e) {

    var dataArr = null;
   // console.log(e)
    try {
        dataArr = JSON.parse(e);
    }
    catch (e) {
        console.error(e);
    }

    if (!dataArr) return;

    clearCells();
    generateCell(dataArr, 10)

}

function convo_loop() {
    sendPacket(convoserver, 'GET', '', true, loadConvo,  null, 3000)
}

setInterval(convo_loop, 500);