var custom = {};


custom.SGF_CATEGORIES = {
    Opening: [
        [2, 3, "B[pd];W[cd];B[pp];W[cp];B[eq];W[do];B[ec];W[de];B[nq];W[qc];B[qd];W[pc];B[od];W[nb];B[qk];W[fp];B[gq];W[io];B[dj];W[cl]"],
        [3, 2, "B[pd];W[cd];B[pp];W[dp];B[ec];W[de];B[cq];W[dq];B[cp];W[cn];B[bn];W[cm];B[bm];W[cl];B[nc];W[qq];B[qp];W[pq];B[nq];W[oq]"],
        [4, 1, "B[pd];W[cd];B[pp];W[dq];B[ed];W[ec];B[fc];W[dc];B[fd];W[cf];B[co];W[qc];B[pc];W[qd];B[qf];W[qe];B[pe];W[rf];B[qb];W[rb]"],
    ],
};


custom.init = function() {
    custom.mistakesElement = document.getElementById("mistakes");
    custom.randomSelect = document.getElementById("randomSelect");
    custom.scrambleSelect = document.getElementById("scrambleSelect");
    custom.boardElement = document.getElementById("board");

    custom.randomSelect.addEventListener("change", custom.newBtnClickListener);
    custom.scrambleSelect.addEventListener("change", custom.newBtnClickListener);
    custom.boardElement.addEventListener("keydown", custom.boardElementKeydownListener);
    document.getElementById("newBtn").addEventListener("click", custom.newBtnClickListener);
    document.getElementById("resetBtn").addEventListener("click", custom.resetBtnClickListener);

    custom.sgfs = [];
    for (const sgfCategory of Object.values(custom.SGF_CATEGORIES)) {
        custom.sgfs = custom.sgfs.concat(sgfCategory);
    }

    custom.newBtnClickListener();
};

custom.boardElementKeydownListener = function(event) {
    let node = custom.editor.getCurrent();
    if (node.moveNumber > custom.trialStartMoveNum) {
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

custom.newBtnClickListener = function() {
    custom.mistakes = 0;
    custom.mistakesElement.innerHTML = custom.mistakes;

    custom.lastRandom = custom.random;
    custom.random = custom.randomSelect.value;

    custom.lastScramble = custom.scramble;
    custom.scramble = custom.scrambleSelect.value;

    custom.lastSGF = custom.sgf;
    
    if (custom.random == "full") {
        do {
            custom.sgf = custom.sgfs[custom.randomInt(custom.sgfs.length)];
        } while (custom.sgf == custom.lastSGF);
    } else {
        if (custom.lastRandom == custom.random &&
                custom.lastScramble == custom.scramble &&
                (custom.sgfs.length - 1) > custom.sgfsIndex) {
            custom.sgfsIndex++;
        } else {
            if (custom.lastRandom == custom.random && custom.lastScramble == custom.scramble) {
                alert("Cycle finished");
            }

            custom.sgfsIndex = 0;

            if (custom.random == "shuffled") {
                custom.shuffledSGFs = custom.shuffleArray([...custom.sgfs]);
            }
        }

        if (custom.random == "off") {
            custom.sgf = custom.sgfs[custom.sgfsIndex];
        } else if (custom.random == "shuffled") {
            custom.sgf = custom.shuffledSGFs[custom.sgfsIndex];
        }
    }

    custom.trialStartMoveNum = (custom.sgf[0] + custom.sgf[1]) - 1;

    custom.createBoard(custom.sgf);

    if (custom.scramble != "off") custom.scrambleBoard();

    custom.editor.nextNode(custom.sgf[0]);

    custom.boardElement.focus({ preventScroll: true });
};

custom.resetBtnClickListener = function() {
    custom.mistakes = 0;
    custom.mistakesElement.innerHTML = custom.mistakes;

    custom.editor.prevNode(1000);
    custom.editor.nextNode(custom.sgf[0]);

    custom.boardElement.focus({ preventScroll: true });
};

custom.randomInt = function(max) {
    return Math.floor(Math.random() * max);
};

custom.createBoard = function(sgf) {
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
        settings.sgf = "(;GM[1]FF[4]CA[UTF-8]SZ[19]KM[6.5];" + sgf[2] + ")";
    }

    besogo.create(custom.boardElement, settings);

    custom.editor = custom.boardElement.besogoEditor;

    custom.editor.addListener(custom.editorListener);
};

custom.editorListener = function(event) {
    if (event.markupChange) {
        custom.removeMarkup(event);

        let node = custom.editor.getCurrent();
        if (node.moveNumber <= custom.trialStartMoveNum) return;

        let nextNode = node.children[0];
        if (!nextNode) return;

        if (nextNode.move.x != event.x || nextNode.move.y != event.y) {
            custom.mistakes++;
            custom.mistakesElement.innerHTML = custom.mistakes;
        }

        custom.editor.nextNode(1);
    }
};

custom.removeMarkup = function(coord) {
    custom.editor.getCurrent().markup[(coord.x - 1) * 19 + (coord.y - 1)] = 0;
};

custom.placeStone = function(x, y) {
    custom.editor.setTool("auto");
    custom.editor.click(x, y, false);
    custom.editor.setTool("cross");
};

custom.scrambleBoard = function() {
    let noDef = custom.scramble == "noDef";

    let rotateCount = custom.randomInt(4);
    for (let i=0; i<rotateCount; i++) {
        custom.rotateBoard();
    }

    if (custom.randomInt(2) == 1 || (noDef && rotateCount == 0)) {
        custom.flipBoard();
    }
};

custom.rotateBoard = function() {
    let newCoords = [];

    let node = custom.editor.getRoot();
    while (node) {
        if (node.move) {
            let x = node.move.y;
            let y = 20 - node.move.x;

            newCoords.push({x: x, y: y});
        }

        node = node.children[0];
    }

    custom.createBoard();

    newCoords.forEach(coord => {
        custom.placeStone(coord.x, coord.y);
    });

    custom.editor.prevNode(1000);
};

custom.flipBoard = function() {
    let newCoords = [];

    let node = custom.editor.getRoot();
    while (node) {
        if (node.move) {
            let x = node.move.x;
            let y = 20 - node.move.y;

            newCoords.push({x: x, y: y});
        }

        node = node.children[0];
    }

    custom.createBoard();

    newCoords.forEach(coord => {
        custom.placeStone(coord.x, coord.y);
    });

    custom.editor.prevNode(1000);
};

custom.shuffleArray = function(array) {
    let currentIndex = array.length;
    let randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = custom.randomInt(currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
};