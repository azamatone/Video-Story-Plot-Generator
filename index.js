'use strict';
var tempImgSources = [
    ["Scene", "interface-image-samples/alex-ryan2.jpg"],
    ["Scene", "interface-image-samples/ben-pep.jpg"],
    ["Scene", "interface-image-samples/bruno12.jpg"],
    ["Scene", "interface-image-samples/gundogan.jpg"],
    ["Scene", "interface-image-samples/james3.jpg"],
    ["Scene", "interface-image-samples/klopp16.jpg"]
];
var initialCopy;
var tempVideoSources = [
    ["Scene 1", "video-samples/cat.mp4"],
    ["Scene 2", "video-samples/cat1.mp4"],
    ["Scene 3", "video-samples/cat2.mp4"],
    ["Scene 4", "video-samples/cat3.mp4"],
    ["Scene 5", "video-samples/parrot1.mp4"],
    ["Scene 6", "video-samples/parrot2.mp4"]
];
var selectedShots = [
    ["Shot 1", "video-shots/parrot1.mp4"],
    ["Shot 2", "video-shots/parrot2.mp4"],
    ["Shot 3", "video-shots/parrot3.mp4"],
    ["Shot 4", "video-shots/parrot4.mp4"],
    ["Shot 5", "video-shots/parrot5.mp4"],
    ["Shot 6", "video-shots/parrot6.mp4"],
    ["Shot 7", "video-shots/parrot7.mp4"]
];
window.addEventListener("load", function() {
    document.getElementById("editable-story-plot").style.display = "none";
    document.getElementById("video-shot-selector").style.display = "none";
    document.getElementById("final-video").style.display = "none";
    document.getElementById("final-story-plot").style.display = "none";
    document.getElementById("btn-home").style.display = "none";
    document.getElementById("return-buttons-for-check-result").style.display = "none";
    charactersArray();
});

function autoGenerateHandler() {
    document.getElementById("story-plot").innerHTML = "";
    initialCopy = tempVideoSources.slice();
    var j = 0;
    for (; j < Object.keys(scenes).length; j++) {
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "scene-shot");
        var container = wrapper.cloneNode(true);
        container.setAttribute("id", "first-column-characters");
        var elem = document.createElement("div");
        elem.setAttribute("class", "trio-div");
        var inner = document.createElement("p");
        inner.setAttribute("class", "scene-number");
        inner.setAttribute("title", "Generated Scene Label");
        inner.innerHTML = scenes[j].label;
        elem.appendChild(inner);
        var video = document.createElement("VIDEO");
        video.setAttribute("class", "generated-video");
        var source = document.createElement("source");
        source.type = "video/mp4";
        source.src = scenes[j].source;
        video.appendChild(source);
        video.controls = true;
        elem.appendChild(video);
        var paragraph = document.createElement("p");
        paragraph.setAttribute("class", "scene-number");
        paragraph.setAttribute("title", "Original Scene Number");
        paragraph.innerHTML = scenes[j].id;
        elem.appendChild(paragraph);
        var element = document.createElement("div");
        element.setAttribute("class", "trio-div");
        var reinstallMessage = document.createElement("p");
        reinstallMessage.setAttribute("class", "scene-number");
        reinstallMessage.innerHTML = "Generated Scene Label";
        element.appendChild(reinstallMessage);
        var videoElement = document.createElement("VIDEO");
        videoElement.setAttribute("class", "generated-video");
        var sourceElement = document.createElement("source");
        sourceElement.type = "video/mp4";
        videoElement.appendChild(sourceElement);
        videoElement.controls = true;
        element.appendChild(videoElement);
        var behaviourMessage = document.createElement("p");
        behaviourMessage.setAttribute("class", "scene-number");
        behaviourMessage.innerHTML = "Original Scene Number";
        element.appendChild(behaviourMessage);
        wrapper.appendChild(elem);
        container.appendChild(element);
        var layer_i = 0;
        for (; layer_i < UniqueIdArray.length; layer_i++) {
            var el = document.createElement("div");
            el.setAttribute("class", "characterDiv");
            var source = document.createElement("p");
            var hr = document.createElement("hr");
            hr.setAttribute("class", "character-line");
            var newEl = document.createElement("div");
            newEl.setAttribute("class", "characterDiv");
            var parent = document.createElement("p");
            var i = 0;
            for (; i < Object.keys(scenes[j].characters).length; i++) {
                if (scenes[j].characters[i].character_id == UniqueIdArray[layer_i]) {
                    console.log(scenes[j].characters[i].character_id);
                    source.innerHTML = '<img title="' + scenes[j].characters[i].emotion + '" src="' + emotionSelector(scenes[j].characters[i].emotion) + '" class="emoticonFont">' + scenes[j].characters[i].action;
                    el.appendChild(source);
                    el.appendChild(hr);
                    break;
                } else {
                    source.innerHTML = "<br>";
                    el.appendChild(source);
                }
            }
            parent.innerHTML = findCharacterName(UniqueIdArray[layer_i]);
            newEl.appendChild(parent);
            container.appendChild(newEl);
            wrapper.appendChild(el);
        }
        var filtersBodyNode = document.createElement("div");
        filtersBodyNode.setAttribute("class", "characterDiv time-and-location");
        var id = document.createElement("p");
        id.innerHTML = scenes[j].time + ", " + scenes[j].location;
        filtersBodyNode.appendChild(id);
        wrapper.appendChild(filtersBodyNode);
        if (j == 0) {
            var parent = document.createElement("p");
            parent.innerHTML = "<br>";
            var newEl = document.createElement("div");
            newEl.setAttribute("class", "characterDiv");
            newEl.appendChild(parent);
            container.appendChild(newEl);
            document.getElementById("story-plot").appendChild(container);
        }
        document.getElementById("story-plot").appendChild(wrapper);
    }
    document.getElementById("btn-story-edit").disabled = false;
    document.getElementById("btn-story-edit").setAttribute("class", "btn btn-primary col-lg-12 col-md-12 col-sm-12");
    document.getElementById("btn-check-result").disabled = false;
    document.getElementById("btn-check-result").setAttribute("class", "btn btn-primary col-lg-12 col-md-12 col-sm-12");
}

function homeButtonHandler() {
    tempVideoSources = initialCopy.slice();
    document.getElementById("video-story-plot-auto-generator").style.display = "";
    document.getElementById("editable-story-plot").innerHTML = "";
    document.getElementById("selectable-shot-displayer").innerHTML = "";
    document.getElementById("editable-story-plot").style.display = "none";
    document.getElementById("btn-home").style.display = "none";
    document.getElementById("video-shot-selector").style.display = "none";
    autoGenerateHandler();
}

function homeButtonHandlerForCheckResult() {
    location.reload();
}

function backToEditorHandler() {
    document.getElementById("return-buttons-for-check-result").style.display = "none";
    document.getElementById("btn-home").style.display = "";
    document.getElementById("editable-story-plot").style.display = "";
    document.getElementById("btn-check-result").style.display = "";
    document.getElementById("final-story-plot").innerHTML = "";
    document.getElementById("final-video").innerHTML = "";
    document.getElementById("final-video").style.display = "none";
    document.getElementById("final-story-plot").style.display = "none";
    storyEditHandler();
}

function storyEditHandler() {
    document.getElementById("btn-home").style.display = "";
    document.getElementById("story-plot").innerHTML = "";
    document.getElementById("video-story-plot-auto-generator").style.display = "none";
    document.getElementById("btn-check-result").disabled = false;
    document.getElementById("btn-check-result").setAttribute("class", "btn btn-primary col-lg-12 col-md-12 col-sm-12");
    document.getElementById("editable-story-plot").style.display = "";
    document.getElementById("editable-story-plot").innerHTML = "";
    document.getElementById("editable-story-plot").setAttribute("class", "border border-primary");
    var i = 0;
    i;
    for (; i < tempVideoSources.length; i++) {
        var inner = document.createElement("div");
        inner.setAttribute("class", "editable-scene-shot");
        inner.style.height = "180px";
        inner.style.width = "195px";
        var e = document.createElement("p");
        e.setAttribute("class", "editable-scene-number");
        e.innerHTML = tempVideoSources[i][0];
        var temp = document.createElement("div");
        temp.setAttribute("class", "editable-scene-image-container");
        temp.style.height = "110px";
        temp.style.width = "195px";
        var video = document.createElement("VIDEO");
        video.style.width = "100%";
        video.style.height = "100%";
        var source = document.createElement("source");
        source.type = "video/mp4";
        source.src = tempVideoSources[i][1];
        video.appendChild(source);
        video.controls = true;
        temp.appendChild(video);
        var div = document.createElement("button");
        div.setAttribute("id", "remove-button-" + i);
        div.setAttribute("class", "btn btn-danger btn-sm");
        div.style.width = "100%";
        div.style.marginTop = "10px";
        div.style.clear = "both";
        div.style.float = "left";
        div.innerHTML = "Remove";
        div.setAttribute("onclick", "removeButtonHandler(event)");
        inner.appendChild(e);
        inner.appendChild(temp);
        inner.appendChild(div);
        document.getElementById("editable-story-plot").appendChild(addButtonCreator(i));
        document.getElementById("editable-story-plot").appendChild(inner);
    }
    document.getElementById("editable-story-plot").appendChild(addButtonCreator(i));
}

function addButtonCreator(value) {
    var div = document.createElement("div");
    div.setAttribute("class", "add-button-div");
    div.style.height = "180px";
    div.style.width = "30px";
    var elem = document.createElement("button");
    elem.setAttribute("id", "add-button-" + value);
    elem.setAttribute("class", "add-button-cls btn btn-primary btn-sm");
    elem.style.width = "30px";
    elem.style.height = "110px";
    elem.style.marginTop = "-10px";
    elem.style.color = "white";
    elem.innerHTML = '<span id="span-button-' + value + '" class="add-button-text" style="color:white; margin-top: 10px;">Add</span>';
    elem.setAttribute("onclick", "addButtonHandler(event)");
    div.appendChild(elem);
    return div;
}

function removeButtonHandler(event) {
    var callingModule = event.target || event.srcElement;
    var existingProxyIndex = callingModule.id.split("-")[2];
    tempVideoSources.splice(existingProxyIndex, 1);
    if (tempVideoSources.length == 0) {
        globalAddButtonClicked = -1;
    }
    document.getElementById("editable-story-plot").innerHTML = "";
    storyEditHandler();
    if (globalAddButtonClicked != -1) {
        document.getElementById("add-button-" + globalAddButtonClicked).setAttribute("class", "add-button-cls btn btn-success btn-sm");
    }
}
var globalAddButtonClicked = -1;

function addButtonHandler(event) {
    document.getElementById("video-shot-selector").style.display = "";
    var callingModule = event.target || event.srcElement;
    var id = callingModule.id.split("-")[2];
    if (globalAddButtonClicked != -1) {
        document.getElementById("add-button-" + globalAddButtonClicked).setAttribute("class", "add-button-cls btn btn-primary btn-sm");
    }
    globalAddButtonClicked = id;
    document.getElementById("add-button-" + id).setAttribute("class", "add-button-cls btn btn-success btn-sm");
}

function searchButtonHandler() {
    document.getElementById("video-story-plot-auto-generator").style.display = "none";
    document.getElementById("btn-check-result").disabled = false;
    document.getElementById("selectable-shot-displayer").style.display = "";
    document.getElementById("selectable-shot-displayer").innerHTML = "";
    var dy;
    dy = 0;
    for (; dy < selectedShots.length; dy++) {
        var cell = document.createElement("div");
        cell.setAttribute("class", "editable-scene-shot");
        cell.style.height = "180px";
        cell.style.width = "195px";
        var paragraph = document.createElement("p");
        paragraph.setAttribute("class", "editable-scene-number");
        paragraph.innerHTML = selectedShots[dy][0];
        var selectedBoxElement = document.createElement("div");
        selectedBoxElement.setAttribute("class", "editable-scene-image-container");
        selectedBoxElement.style.height = "110px";
        selectedBoxElement.style.width = "195px";
        var video = document.createElement("VIDEO");
        video.style.width = "100%";
        video.style.height = "100%";
        var source = document.createElement("source");
        source.type = "video/mp4";
        source.src = selectedShots[dy][1];
        video.appendChild(source);
        video.controls = true;
        selectedBoxElement.appendChild(video);
        var box = document.createElement("button");
        box.setAttribute("id", "select-button-" + dy);
        box.setAttribute("class", "btn btn-primary btn-sm w-100");
        box.style.marginTop = "10px";
        box.style.color = "white";
        box.style.clear = "both";
        box.style.float = "left";
        box.innerHTML = "Select";
        box.setAttribute("onclick", "selectButtonHandler(event)");
        cell.appendChild(paragraph);
        cell.appendChild(selectedBoxElement);
        cell.appendChild(box);
        document.getElementById("selectable-shot-displayer").appendChild(cell);
    }
}

function selectButtonHandler(event) {
    var callingModule = event.target || event.srcElement;
    var i = callingModule.id.split("-")[2];
    tempVideoSources.splice(globalAddButtonClicked, 0, selectedShots[i]);
    document.getElementById("editable-story-plot").innerHTML = "";
    storyEditHandler();
    document.getElementById("add-button-" + globalAddButtonClicked).setAttribute("class", "add-button-cls btn btn-success btn-sm");
}

function cancelButtonHandler() {
    document.getElementById("video-shot-selector").style.display = "none";
    globalAddButtonClicked = -1;
    document.getElementById("editable-story-plot").innerHTML = "";
    storyEditHandler();
    document.getElementById("selectable-shot-displayer").style.display = "none";
}

function checkResultHandler() {
    document.getElementById("return-buttons-for-check-result").style.display = "";
    document.getElementById("btn-home").style.display = "none";
    document.getElementById("video-shot-selector").style.display = "none";
    document.getElementById("selectable-shot-displayer").innerHTML = "";
    document.getElementById("editable-story-plot").style.display = "none";
    document.getElementById("editable-story-plot").innerHTML = "";
    document.getElementById("btn-check-result").style.display = "none";
    document.getElementById("final-video").style.display = "";
    document.getElementById("final-story-plot").style.display = "";
    document.getElementById("video-story-plot-auto-generator").style.display = "none";
    document.getElementById("final-story-plot").innerHTML = "";
    fullVideoPlayer();
    var h = 0;
    for (; h < tempVideoSources.length; h++) {
        var elem = document.createElement("div");
        elem.setAttribute("class", "scene-shot");
        elem.style.height = "110px";
        elem.style.width = "195px";
        var paragraph = document.createElement("p");
        paragraph.setAttribute("class", "scene-number");
        paragraph.innerHTML = tempVideoSources[h][0];
        elem.appendChild(paragraph);
        var video = document.createElement("VIDEO");
        video.setAttribute("onclick", "clickedVideoHandler(event)");
        video.setAttribute("id", h);
        video.style.width = "100%";
        video.style.height = "100%";
        var source = document.createElement("source");
        source.type = "video/mp4";
        source.src = tempVideoSources[h][1];
        video.appendChild(source);
        video.controls = true;
        elem.appendChild(video);
        document.getElementById("final-story-plot").appendChild(elem);
    }
}

function fullVideoPlayer() {
    document.getElementById("final-video").style.display = "";
    document.getElementById("final-video").innerHTML = "";
    var selectedBoxElement = document.createElement("div");
    selectedBoxElement.setAttribute("class", "editable-scene-image-container");
    selectedBoxElement.style.height = "300px";
    selectedBoxElement.style.width = "auto";
    play1by1(0);
    selectedBoxElement.appendChild(videomain);
    document.getElementById("final-video").appendChild(selectedBoxElement);
}
var videomain = document.createElement("VIDEO");
videomain.style.width = "100%";
videomain.style.height = "100%";
var sourceMP4 = document.createElement("source");
sourceMP4.type = "video/mp4";

function play1by1(start_id) {
    playing_idx = start_id;
    videomain.src = tempVideoSources[playing_idx][1];
    videomain.appendChild(sourceMP4);
    videomain.controls = true;
    videomain.load();
    videomain.play();
    videomain.onended = function() {
        if (playing_idx == tempVideoSources.length - 1) {
            playing_idx = 0;
        } else {
            playing_idx = playing_idx + 1;
        }
        videomain.src = tempVideoSources[playing_idx][1];
        videomain.play();
    };
}

function clickedVideoHandler(event) {
    var cur_el = event.target || event.srcElement;
    play1by1(parseInt(cur_el.id));
};