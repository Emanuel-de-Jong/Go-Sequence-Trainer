var custom = {};


custom.SHORTEN_DOUBLE_PASS = true;


custom.init = function () {
    board.boardElement.addEventListener("keydown", custom.boardElementKeydownListener);

    document.addEventListener("mouseup", custom.mouseupListener);

    custom.setSGFs();
};


custom.nextSGF = function () {
    info.resetMistakes();

    custom.setNewSGF();

    board.createBoard(custom.sgf);
    board.editor.addListener(custom.editorListener);
    board.passBtn.addEventListener("click", custom.passBtnClickListener);

    if (settings.scramble != "off") board.scrambleBoard();

    custom.goToStartMove();

    board.boardElement.focus({ preventScroll: true });
};

custom.resetSGF = function () {
    info.resetMistakes();

    board.editor.prevNode(1000);
    custom.goToStartMove();

    board.boardElement.focus({ preventScroll: true });
};

custom.mouseupListener = function (event) {
    switch (event.button) {
        case 3:
            event.preventDefault();
            custom.nextSGF();
            break;
        case 4:
            event.preventDefault();
            custom.nextNode(true);
            break;
    }
};

custom.setSGFs = function () {
    custom.sgfs = [];
    custom.setSGFsLoop("", sgfs);

    custom.nextSGF();
};

custom.setSGFsLoop = function (enabledKey, category) {
    if (enabledKey != "" && !sgfControl.sgfCatEnableds[enabledKey]) return;

    for (const [key, value] of Object.entries(category)) {
        if (key == "Enabled") continue;

        if (Array.isArray(value)) {
            if (key == "X") {
                custom.sgfs = custom.sgfs.concat(value);
            } else {
                custom.sgfs.push(value);
            }
        } else {
            custom.setSGFsLoop(enabledKey + key, value);
        }
    }
};

custom.boardElementKeydownListener = function (event) {
    switch (event.keyCode) {
        // case 37: // left
        //     board.editor.nextNode(1);
        //     break;
        case 39: // right
            custom.nextNode(true);
            board.editor.prevNode(1);
            break;
    }
};

custom.goToStartMove = function () {
    let startMove = custom.sgf[0];
    if (board.editor.getRoot().children[0].setupStones.length > 0) startMove++;
    board.editor.nextNode(startMove);
};

custom.setNewSGF = function () {
    if (settings.random != "full") {
        let forceNew = false;
        if (
            (custom.lastSGFs && custom.lastSGFs.length != custom.sgfs.length) ||
            custom.lastColor !== settings.color ||
            custom.lastRandom !== settings.random ||
            custom.lastScramble !== settings.scramble
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

            if (settings.random == "shuffled") {
                custom.shuffledSGFs = utils.shuffleArray([...custom.sgfs]);
            }
        }

        custom.lastSGFs = custom.sgfs;
        custom.lastColor = settings.color;
        custom.lastRandom = settings.random;
        custom.lastScramble = settings.scramble;
    }

    if (settings.random == "off") {
        custom.sgf = custom.sgfs[custom.sgfsIndex];
    } else if (settings.random == "shuffled") {
        custom.sgf = custom.shuffledSGFs[custom.sgfsIndex];
    } else if (settings.random == "full") {
        let lastSGF = custom.sgf;
        do {
            custom.sgf = custom.sgfs[utils.randomInt(custom.sgfs.length)];
        } while (custom.sgf == lastSGF && custom.sgf.length > 1);
    }
};

custom.passBtnClickListener = function () {
    custom.play(0, 0);
};

custom.editorListener = function (event) {
    if (event.mark === 6) {
        custom.play(event.x, event.y);
    } else if (event.navChange) {
        info.setSgfCurrentText(board.editor.getCurrent().comment);
    }
};

custom.play = function (x, y) {
    let node = board.editor.getCurrent();
    let nextNode = node.children[0];
    if (!nextNode) return;

    if (node.moveNumber > custom.sgf[1] - 1) {
        if (nextNode.move.x != x || nextNode.move.y != y) {
            info.incrementMistakes();
        }
    }

    custom.nextNode();
};

custom.nextNode = function (stopAtPuzzleStart = false) {
    let node = board.editor.getCurrent();
    if (stopAtPuzzleStart && node.moveNumber > custom.sgf[1] - 1) return;

    let nextNode = node.children[0];
    if (!nextNode) return;

    let skipFirstPass = false;
    if (custom.SHORTEN_DOUBLE_PASS && board.isNodePass(nextNode) && board.isNodePass(nextNode.children[0])) {
        skipFirstPass = true;
    }

    board.editor.nextNode(skipFirstPass ? 2 : 1);
};
