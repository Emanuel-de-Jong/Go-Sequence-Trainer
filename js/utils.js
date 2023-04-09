var utils = {};


utils.randomInt = function (max) {
    return Math.floor(Math.random() * max);
};

utils.shuffleArray = function (array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
        randomIndex = utils.randomInt(currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};
