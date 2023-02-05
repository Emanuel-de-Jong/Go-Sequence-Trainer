var custom = {};


custom.SGFS = {
    B: [
        "(;GM[1]FF[4]CA[UTF-8]SZ[19]KM[6.5]PW[white]PB[black];B[pd];W[cd];B[pp];W[cp];B[eq];W[do];B[ec];W[de];B[nq];W[qc];B[qd];W[pc];B[od];W[nb];B[qk];W[fp];B[gq];W[io];B[dj];W[cl])",
        "(;GM[1]FF[4]CA[UTF-8]SZ[19]KM[6.5]PW[white]PB[black];B[pd];W[cd];B[pp];W[dp];B[ec];W[de];B[cq];W[dq];B[cp];W[cn];B[bn];W[cm];B[bm];W[cl];B[nc];W[qq];B[qp];W[pq];B[nq];W[oq])",
    ],
    W: [
        "(;GM[1]FF[4]CA[UTF-8]SZ[19]KM[6.5]PW[white]PB[black]AP[Sabaki:0.52.0];B[pd];W[dp];B[pp];W[dd];B[fc];W[qq];B[pq];W[qp];B[po];W[rn];B[cf];W[ef];B[ci];W[nc];B[db];W[cc];B[hc];W[gd];B[oc];W[gc];B[gb];W[hd];B[ic];W[id];B[ec];W[ed];B[fq];W[jd];B[cn];W[jb];B[nd];W[ha])",
        "(;GM[1]FF[4]CA[UTF-8]SZ[19]KM[6.5]PW[white]PB[black];B[pd];W[dp];B[pq];W[dd];B[cq];W[dq];B[cp];W[do];B[bn];W[qc];B[qd];W[pc];B[od];W[nc];B[rc];W[nd];B[qn];W[nf];B[cm];W[iq])",
    ]
}


custom.init = function() {
    custom.colorElement = document.getElementById("color");
    custom.mistakesElement = document.getElementById("mistakes");
    custom.boardElement = document.getElementById("board");

    document.getElementById("new").addEventListener("click", custom.newClickListener);
    document.getElementById("reset").addEventListener("click", custom.resetClickListener);

    custom.newClickListener();
};

custom.newClickListener = function() {
    custom.mistakes = 0;
    custom.mistakesElement.innerHTML = custom.mistakes;

    custom.color = custom.randomInt(2) == 1 ? "B" : "W";
    custom.colorElement.innerHTML = custom.color;

    // let sgf = custom.SGFS[custom.color][custom.randomInt(custom.SGFS[custom.color].length)];
    let sgf = custom.SGFS.B[0];

    custom.createBoard(sgf);

    custom.scrambleBoard();
};

custom.resetClickListener = function() {
    custom.mistakes = 0;
    custom.mistakesElement.innerHTML = custom.mistakes;
    custom.editor.prevNode(1000);
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
        settings.sgf = sgf;
    }

    besogo.create(custom.boardElement, settings);

    custom.editor = custom.boardElement.besogoEditor;

    custom.editor.addListener(custom.editorListener);
};

custom.editorListener = function(event) {
    if (event.markupChange) {
        custom.removeMarkup(event);

        let nextNode = custom.editor.getCurrent().children[0];
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
    let rotateCount = custom.randomInt(4);
    for (let i=0; i<rotateCount; i++) {
        custom.rotateBoard();
    }

    if (custom.randomInt(2) == 1) {
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