var custom = {};


custom.init = function () {
    custom.mistakesElement = document.getElementById("mistakes");
    custom.colorSelect = document.getElementById("colorSelect");
    custom.randomSelect = document.getElementById("randomSelect");
    custom.scrambleSelect = document.getElementById("scrambleSelect");
    custom.boardElement = document.getElementById("board");
    custom.sgfStartTextElement = document.getElementById("sgfStartText");
    custom.sgfCurrentTextElement = document.getElementById("sgfCurrentText");
    custom.sgfCatChecksElement = document.getElementById("sgfCatChecks");

    custom.colorSelect.addEventListener("change", (event) => custom.color = event.target.value);
    custom.randomSelect.addEventListener("change", (event) => custom.random = event.target.value);
    custom.scrambleSelect.addEventListener("change", (event) => custom.scramble = event.target.value);
    custom.boardElement.addEventListener("keydown", custom.boardElementKeydownListener);
    document.getElementById("newBtn").addEventListener("click", custom.newBtnClickListener);
    document.getElementById("resetBtn").addEventListener("click", custom.resetBtnClickListener);
    document.getElementById("sgfCatAllBtn").addEventListener("click", custom.sgfCatAllBtnClickListener);
    document.getElementById("sgfCatNoneBtn").addEventListener("click", custom.sgfCatNoneBtnClickListener);

    const changeEvent = new Event("change");
    custom.colorSelect.dispatchEvent(changeEvent);
    custom.randomSelect.dispatchEvent(changeEvent);
    custom.scrambleSelect.dispatchEvent(changeEvent);

    custom.colorSelect.addEventListener("change", custom.newBtnClickListener);
    custom.randomSelect.addEventListener("change", custom.newBtnClickListener);
    custom.scrambleSelect.addEventListener("change", custom.newBtnClickListener);

    document.addEventListener("mouseup", custom.mouseupListener);

    custom.createSGFCatEnableds();

    custom.createSGFCatCheckElements();

    custom.setSGFs();
};

custom.createSGFCatEnableds = function() {
    custom.sgfCatEnableds = {};
    custom.createSGFCatEnabledsLoop("", sgfs);
};

custom.createSGFCatEnabledsLoop = function(enabledKey, category) {
    if (category.hasOwnProperty("Enabled")) {
        custom.sgfCatEnableds[enabledKey] = category.Enabled;
    }

    for (const [key, value] of Object.entries(category)) {
        if (key == "Enabled") continue;

        if (!Array.isArray(value)) {
            custom.createSGFCatEnabledsLoop(enabledKey + key, value);
        }
    }
};

custom.createSGFCatCheckElements = function () {
    custom.createSGFCatCheckElementsLoop("", "", sgfs);
};

custom.createSGFCatCheckElementsLoop = function (enabledKey, name, category, depth=0) {
    if (enabledKey != "") {
        let label = document.createElement("label");
        label.innerHTML = name;
        label.htmlFor = enabledKey;
    
        let input = document.createElement("input");
        input.type = "checkbox";
        input.checked = custom.sgfCatEnableds[enabledKey];
        input.id = enabledKey;
        input.style.marginLeft = depth * 10 + "px";
        input.addEventListener("change", custom.sgfCatCheckChangeListener);
    
        let div = document.createElement("div");
        div.appendChild(input);
        div.appendChild(label);
    
        custom.sgfCatChecksElement.appendChild(div);
    }

    for (const [key, value] of Object.entries(category)) {
        if (key == "Enabled") continue;

        if (!Array.isArray(value)) {
            custom.createSGFCatCheckElementsLoop(enabledKey + key, key, value, depth + 1);
        }
    }
};

custom.sgfCatCheckChangeListener = function (event) {
    custom.sgfCatEnableds[event.target.id] = event.target.checked;
    custom.setSGFs();
};

custom.mouseupListener = function (event) {
    switch (event.button) {
        case 3:
            event.preventDefault();
            custom.newBtnClickListener();
            break;
        case 4:
            event.preventDefault();
            let node = custom.editor.getCurrent();
            if (node.moveNumber <= custom.sgf[1] - 1) {
                custom.editor.nextNode(1);
            }
            break;
    }
};

custom.sgfCatAllBtnClickListener = function () {
    for (const key of Object.keys(custom.sgfCatEnableds)) {
        custom.sgfCatEnableds[key] = true;
        document.getElementById(key).checked = true;
    }

    custom.setSGFs();
};

custom.sgfCatNoneBtnClickListener = function () {
    for (const key of Object.keys(custom.sgfCatEnableds)) {
        custom.sgfCatEnableds[key] = false;
        document.getElementById(key).checked = false;
    }
};

custom.setSGFs = function () {
    custom.sgfs = [];
    custom.setSGFsLoop("", sgfs);

    custom.newBtnClickListener();
};

custom.setSGFsLoop = function (enabledKey, category) {
    if (enabledKey != "" && !custom.sgfCatEnableds[enabledKey]) return;

    for (const [key, value] of Object.entries(category)) {
        if (key == "Enabled") continue;

        if (Array.isArray(value)) {
            custom.sgfs.push(value);
        } else {
            custom.setSGFsLoop(enabledKey + key, value);
        }
    }
};

custom.boardElementKeydownListener = function (event) {
    let node = custom.editor.getCurrent();
    if (node.moveNumber > custom.sgf[1] - 1) {
        switch (event.keyCode) {
            // case 37: // left
            //     custom.editor.nextNode(1);
            //     break;
            case 39: // right
                custom.editor.prevNode(1);
                break;
        }
    }
};

custom.newBtnClickListener = function () {
    custom.mistakes = 0;
    custom.mistakesElement.innerHTML = custom.mistakes;

    custom.setNewSGF();

    custom.createBoard(custom.sgf);

    if (custom.scramble != "off") custom.scrambleBoard();

    custom.editor.nextNode(custom.sgf[0]);

    custom.boardElement.focus({ preventScroll: true });
};

custom.setNewSGF = function () {
    if (custom.random != "full") {
        let forceNew = false;
        if (
            (custom.lastSGFs && custom.lastSGFs.length != custom.sgfs.length) ||
            custom.lastColor !== custom.color ||
            custom.lastRandom !== custom.random ||
            custom.lastScramble !== custom.scramble
        ) {
            forceNew = true;
        }

        if (!forceNew && custom.sgfs.length - 1 > custom.sgfsIndex) {
            custom.sgfsIndex++;
        } else {
            if (!forceNew) {
                alert("Cycle finished");
            }

            custom.sgfsIndex = 0;

            if (custom.random == "shuffled") {
                custom.shuffledSGFs = custom.shuffleArray([...custom.sgfs]);
            }
        }

        custom.lastSGFs = custom.sgfs;
        custom.lastColor = custom.color;
        custom.lastRandom = custom.random;
        custom.lastScramble = custom.scramble;
    }

    if (custom.random == "off") {
        custom.sgf = custom.sgfs[custom.sgfsIndex];
    } else if (custom.random == "shuffled") {
        custom.sgf = custom.shuffledSGFs[custom.sgfsIndex];
    } else if (custom.random == "full") {
        let lastSGF = custom.sgf;
        do {
            custom.sgf = custom.sgfs[custom.randomInt(custom.sgfs.length)];
        } while (custom.sgf == lastSGF && custom.sgf.length > 1);
    }
};

custom.resetBtnClickListener = function () {
    custom.mistakes = 0;
    custom.mistakesElement.innerHTML = custom.mistakes;

    custom.editor.prevNode(1000);
    custom.editor.nextNode(custom.sgf[0]);

    custom.boardElement.focus({ preventScroll: true });
};

custom.randomInt = function (max) {
    return Math.floor(Math.random() * max);
};

custom.createBoard = function (sgf) {
    let settings = {
        resize: "auto",
        orient: "portrait",
        panels: "control+tree",
        coord: "western",
        tool: "cross",
        variants: 2,
        nowheel: true,
    };

    if (sgf) {
        let sgfCode = sgf[2];

        let color = custom.color;
        if (color == "random") {
            color = custom.randomInt(2) == 1 ? "black" : "white";
        }

        if (color == "white") {
            let newSGFCode = "";
            for (let i = 0; i < sgfCode.length; i++) {
                let char = sgfCode[i];
                if (char == "B") {
                    char = "W";
                } else if (char == "W") {
                    char = "B";
                }

                newSGFCode += char;
            }

            sgfCode = newSGFCode;
        }

        settings.sgf = "(;GM[1]FF[4]CA[UTF-8]SZ[19]KM[6.5];" + sgfCode + ")";
    }

    besogo.create(custom.boardElement, settings);

    custom.editor = custom.boardElement.besogoEditor;

    custom.editor.addListener(custom.editorListener);

    let besogoControl = document.getElementsByClassName("besogo-control")[0];
    besogoControl.insertAdjacentHTML("beforeend", '<input type="button" value="Pass" id="passBtn">');
    document.getElementById("passBtn").addEventListener("click", custom.passBtnClickListener);

    custom.sgfStartTextElement.innerHTML = custom.editor.getCurrent().children[0].comment;
};

custom.passBtnClickListener = function () {
    custom.editor.setTool("auto");
    custom.editor.click(0, 0, false);
    custom.editor.setTool("cross");
};

custom.editorListener = function (event) {
    if (event.markupChange) {
        custom.removeMarkup(event);

        let node = custom.editor.getCurrent();
        if (node.moveNumber > custom.sgf[1] - 1) {
            let nextNode = node.children[0];
            if (!nextNode) return;

            if (nextNode.move.x != event.x || nextNode.move.y != event.y) {
                custom.mistakes++;
                custom.mistakesElement.innerHTML = custom.mistakes;
            }
        }

        custom.editor.nextNode(1);
    }
    else if (event.navChange) {
        custom.sgfCurrentTextElement.innerHTML = custom.editor.getCurrent().comment;
    }
};

custom.removeMarkup = function (coord) {
    custom.editor.getCurrent().markup[(coord.x - 1) * 19 + (coord.y - 1)] = 0;
};

custom.placeStone = function (x, y, tool="auto", comment) {
    custom.editor.setTool(tool);
    custom.editor.click(x, y, false);

    if (comment) {
        custom.editor.getCurrent().comment = comment;
    }

    custom.editor.setTool("cross");
};

custom.scrambleBoard = function () {
    let noDef = custom.scramble == "noDef";

    let rotateCount = custom.randomInt(4);
    for (let i = 0; i < rotateCount; i++) {
        custom.rotateBoard();
    }

    if (custom.randomInt(2) == 1 || (noDef && rotateCount == 0)) {
        custom.flipBoard();
    }
};

custom.rotateBoard = function () {
    let newCoords = [];

    let node = custom.editor.getRoot();
    while (node) {
        if (node.move) {
            let x = node.move.y;
            let y = 20 - node.move.x;

            newCoords.push({
                x: x,
                y: y,
                color: node.move.color,
                comment: node.comment
            });
        }

        node = node.children[0];
    }

    let rootNode = custom.editor.getRoot();
    rootNode.removeChild(rootNode.children[0]);

    custom.editor.notifyListeners({ treeChange: true, navChange: true });

    newCoords.forEach((coord) => {
        custom.placeStone(coord.x, coord.y, coord.color == -1 ? "playB" : "playW", coord.comment);
    });

    custom.editor.prevNode(1000);
};

custom.flipBoard = function () {
    let newCoords = [];

    let node = custom.editor.getRoot();
    while (node) {
        if (node.move) {
            let x = node.move.x;
            let y = 20 - node.move.y;

            newCoords.push({
                x: x,
                y: y,
                color: node.move.color,
                comment: node.comment
            });
        }

        node = node.children[0];
    }

    let rootNode = custom.editor.getRoot();
    rootNode.removeChild(rootNode.children[0]);

    custom.editor.notifyListeners({ treeChange: true, navChange: true });

    newCoords.forEach((coord) => {
        custom.placeStone(coord.x, coord.y, coord.color == -1 ? "playB" : "playW", coord.comment);
    });

    custom.editor.prevNode(1000);
};

custom.shuffleArray = function (array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = custom.randomInt(currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};
