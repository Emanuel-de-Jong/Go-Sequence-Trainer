var info = {};


info.init = function() {
    info.mistakesElement = document.getElementById("mistakes");
    info.sgfStartTextElement = document.getElementById("sgfStartText");
    info.sgfCurrentTextElement = document.getElementById("sgfCurrentText");

    info.resetMistakes();
};


info.resetMistakes = function () {
    info.mistakes = 0;
    info.mistakesElement.innerHTML = info.mistakes;
};

info.incrementMistakes = function () {
    info.mistakes++;
    info.mistakesElement.innerHTML = info.mistakes;
};

info.setSgfStartText = function (text) {
    info.sgfStartTextElement.innerHTML = text;
};

info.setSgfCurrentText = function (text) {
    info.sgfCurrentTextElement.innerHTML = text;
};
