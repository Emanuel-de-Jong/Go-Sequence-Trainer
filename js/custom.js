var custom = {};


custom.SGF_CATEGORIES = {
    ShoulderHit: {
        ToSide: [
            [6, 7, "B[pq]PL[B];B[pn]PL[B];B[jq];W[kp];B[kq];W[lp];B[mr]"],
            [6, 7, "B[pq]PL[B];B[pn]PL[B];B[jq];W[kp];B[kq];W[lp];B[jp];W[kn];B[jo];W[mm]"],
            [6, 8, "B[pq]PL[B];B[pn]PL[B];B[jq];W[kp];B[kq];W[mp];B[lq];W[mn];B[lp];W[lo];B[ko];W[kn];B[jo]"],
            [6, 11, "B[pq]PL[B];B[po]PL[B];B[jq];W[kp];B[kq];W[mp];B[lq];W[mm];B[lp];W[lo];B[mo];W[no];B[mn];W[ln]"],
            [6, 11, "B[pq]PL[B];B[po]PL[B];B[jq];W[kp];B[kq];W[mp];B[lq];W[mm];B[lp];W[lo];B[ko];W[kn];B[jo];W[mo]"],
            [6, 7, "B[pq]PL[B];B[po]PL[B];B[jq];W[kp];B[kq];W[mp];B[lp];W[lo];B[lq];W[mm]"],
        ],
        ToCenter: [
            [6, 6, "B[pq]PL[B];B[po]PL[B];B[jq];W[kp];B[jp];W[ko];B[lr];W[jo]"],
            [6, 6, "B[pq]PL[B];B[po]PL[B];B[jq];W[kp];B[jp];W[kn];B[ko];W[lo];B[jo];W[mm];B[mq]"],
        ],
        Base: [
            [10, 11, "B[pq]PL[B];B[qo]PL[B];B[pd]PL[B];B[qg]PL[B];B[jq];W[qm]PL[W];W[qj];B[pk];W[qk];B[pm];W[pn];B[qn];W[pl];B[om]"],
            [10, 11, "B[pq]PL[B];B[qo]PL[B];B[pd]PL[B];B[qg]PL[B];B[jq];W[qm]PL[W];W[qj];B[pk];W[qk];B[pm];W[pl];B[ol];W[ql];B[pn]"],
        ],
    },

    DaidaigeimaInvasion: {
        Attatch: [
            [9, 11, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[hp];W[ip];B[io];W[iq];B[gp];W[jq];B[kp];W[kq];B[lp];W[mq]"],
            [9, 13, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[hp];W[ip];B[iq];W[io];B[jq];W[gp];B[hr];W[ho])"],
            [9, 13, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[hp];W[ip];B[iq];W[io];B[hr];W[jq];B[gq];W[kp])"],
            [10, 14, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn];B[ck];W[hq];B[hp];W[iq];B[ip];W[jq];B[gq];W[lq];B[kp];W[mr])"],
            [10, 14, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn];B[ck];W[hq];B[hp];W[iq];B[ip];W[jq];B[dq];W[kp];B[cp]"],
            [15, 15, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn];B[pn];W[qn];B[pm];W[qm];B[pl];W[ql]PL[W];W[hq];B[hp];W[iq];B[jq];W[ip];B[io];W[gp];B[ho];W[gq];B[kn])"],
        ],
        ShoulderHit: [
            [9, 12, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[gp];W[jq];B[kq];W[ip];B[jr];W[ir])"],
            [9, 12, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[gp];W[jq];B[kq];W[kr])"],
            [9, 12, "B[pq];W[qo];B[op]PL[B];B[jp]PL[B];B[fq];W[dp]PL[W];W[cn]PL[W];W[hq];B[gp];W[jq];B[kq];W[kp]"],
        ],
    },

    Enclosure3_4Probing: {
        Knight: [],
        LargeKnight: [],
        OneSpace: [],
        TwoSpace: [],
    },

    Joseki4_4KickInvasion: {
        AttackerHighBase: [],
        AttackerLowBase: [],
    },

    AIJoseki: [],

    CornerLifeDeath: [],

    Other: [],
};


custom.init = function() {
    custom.mistakesElement = document.getElementById("mistakes");
    custom.colorSelect = document.getElementById("colorSelect");
    custom.randomSelect = document.getElementById("randomSelect");
    custom.scrambleSelect = document.getElementById("scrambleSelect");
    custom.boardElement = document.getElementById("board");

    custom.colorSelect.addEventListener("change", custom.newBtnClickListener);
    custom.randomSelect.addEventListener("change", custom.newBtnClickListener);
    custom.scrambleSelect.addEventListener("change", custom.newBtnClickListener);
    custom.boardElement.addEventListener("keydown", custom.boardElementKeydownListener);
    document.getElementById("newBtn").addEventListener("click", custom.newBtnClickListener);
    document.getElementById("resetBtn").addEventListener("click", custom.resetBtnClickListener);

    custom.sgfs = [];
    for (const sgfCategory of Object.values(custom.SGF_CATEGORIES)) {
        if (Array.isArray(sgfCategory)) {
            custom.sgfs = custom.sgfs.concat(sgfCategory);
        } else {
            for (const sgfSubCategory of Object.values(sgfCategory)) {
                custom.sgfs = custom.sgfs.concat(sgfSubCategory);
            }
        }
    }

    custom.newBtnClickListener();
};

custom.boardElementKeydownListener = function(event) {
    let node = custom.editor.getCurrent();
    if (node.moveNumber > (custom.sgf[1] - 1)) {
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

    custom.lastColor = custom.color;
    custom.color = custom.colorSelect.value;

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
        if (custom.lastColor == custom.color &&
                custom.lastRandom == custom.random &&
                custom.lastScramble == custom.scramble &&
                (custom.sgfs.length - 1) > custom.sgfsIndex) {
            custom.sgfsIndex++;
        } else {
            if (custom.lastColor == custom.color &&
                    custom.lastRandom == custom.random &&
                    custom.lastScramble == custom.scramble) {
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
        let sgfText = sgf[2];

        let color = custom.color;
        if (color == "random") {
            color = custom.randomInt(2) == 1 ? "black" : "white";
        }

        if (color == "white") {
            let newSGFText = "";
            for (let i=0; i<sgfText.length; i++) {
                let char = sgfText[i];
                if (char == 'B') {
                    char = 'W';
                } else if (char == 'W') {
                    char = 'B';
                }

                newSGFText += char;
            }

            sgfText = newSGFText;
        }

        settings.sgf = "(;GM[1]FF[4]CA[UTF-8]SZ[19]KM[6.5];" + sgfText + ")";
    }

    besogo.create(custom.boardElement, settings);

    custom.editor = custom.boardElement.besogoEditor;

    custom.editor.addListener(custom.editorListener);
};

custom.editorListener = function(event) {
    if (event.markupChange) {
        custom.removeMarkup(event);

        let node = custom.editor.getCurrent();
        if (node.moveNumber <= (custom.sgf[1] - 1)) return;

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