var board = {};


board.init = function() {
    board.boardElement = document.getElementById("board");
};


board.createBoard = function (sgf) {
    let boardSettings = {
        resize: "auto",
        orient: "portrait",
        panels: "control+tree",
        coord: "western",
        tool: "select",
        variants: 2,
        nowheel: true,
    };

    if (sgf) {
        let sgfCode = sgf[2];

        let color = settings.color;
        if (color == "random") {
            color = utils.randomInt(2) == 1 ? "black" : "white";
        }

        if (color == "white") {
            sgfCode = sgfCode.replaceAll("[W]", "[TEMP]");
            sgfCode = sgfCode.replaceAll("W[", "TEMP[");

            sgfCode = sgfCode.replaceAll("[B]", "[W]");
            sgfCode = sgfCode.replaceAll("B[", "W[");

            sgfCode = sgfCode.replaceAll("[TEMP]", "[B]");
            sgfCode = sgfCode.replaceAll("TEMP[", "B[");
        }

        boardSettings.sgf = "(;GM[1]FF[4]CA[UTF-8]SZ[19]KM[6.5];" + sgfCode + ")";
    }

    besogo.create(board.boardElement, boardSettings);

    board.editor = board.boardElement.besogoEditor;

    let besogoControl = document.getElementsByClassName("besogo-control")[0];
    besogoControl.insertAdjacentHTML("beforeend", '<input type="button" value="Pass" id="passBtn">');
    board.passBtn = document.getElementById("passBtn");

    info.setSgfStartText(board.editor.getCurrent().children[0].comment);
};

board.scrambleBoard = function () {
    let noDef = settings.scramble == "noDef";

    let rotateCount = utils.randomInt(4);
    for (let i = 0; i < rotateCount; i++) {
        board.rotateBoard();
    }

    if (utils.randomInt(2) == 1 || (noDef && rotateCount == 0)) {
        board.rotateBoard(true);
    }
};

board.rotateBoard = function (flip = false) {
    let node = board.editor.getRoot().children[0];
    let hasSetupNode = node.setupStones.length > 0;

    let setupCoords = [];
    if (hasSetupNode) {
        for (let i = 0; i < node.setupStones.length; i++) {
            if (node.setupStones[i] != undefined) {
                let oldX = board.indexToX(i);
                let oldY = board.indexToY(i);
                let x = (flip ? oldX : oldY) + 1;
                let y = 20 - (flip ? oldY : oldX) - 1;

                setupCoords.push({
                    x: x,
                    y: y,
                    color: node.setupStones[i],
                });
            }
        }
    }

    let newCoords = [];
    while (node) {
        if (node.move) {
            let x = flip ? node.move.x : node.move.y;
            let y = 20 - (flip ? node.move.y : node.move.x);

            let markup = [];
            for (let i = 0; i < node.markup.length; i++) {
                if (node.markup[i] != undefined) {
                    let oldX = board.indexToX(i);
                    let oldY = board.indexToY(i);
                    let x = (flip ? oldX : oldY) + 1;
                    let y = 20 - (flip ? oldY : oldX) - 1;

                    markup[(x - 1) * 19 + (y - 1)] = node.markup[i];
                }
            }

            newCoords.push({
                x: x,
                y: y,
                color: node.move.color,
                comment: node.comment,
                markup: markup,
            });
        }

        node = node.children[0];
    }

    node = board.editor.getRoot();
    if (hasSetupNode) {
        node = node.children[0];
        board.editor.nextNode(1);
    }

    node.removeChild(node.children[0]);

    if (hasSetupNode) {
        for (let i = 0; i < node.setupStones.length; i++) {
            if (node.setupStones[i] != undefined) {
                node.placeSetup(board.indexToX(i) + 1, board.indexToY(i) + 1, 0);
            }
        }

        setupCoords.forEach((coord) => {
            node.placeSetup(coord.x, coord.y, coord.color);
        });
    }

    newCoords.forEach((coord) => {
        board.placeStone(coord.x, coord.y, coord.color == -1 ? "playB" : "playW", coord.comment);
        if (coord.markup.length > 0) board.editor.getCurrent().markup = coord.markup;
    });

    board.editor.prevNode(1000);
};

board.isNodePass = function (node) {
    if (!node || !node.move) return false;
    return node.move.x == 0 && node.move.y == 0;
};

board.placeStone = function (x, y, tool = "auto", comment) {
    board.editor.setTool(tool);
    board.editor.click(x, y, false);

    if (comment) {
        board.editor.getCurrent().comment = comment;
    }

    board.editor.setTool("select");
};

board.indexToX = function (index) {
    return Math.floor(index / 19);
};

board.indexToY = function (index) {
    return index % 19;
};
