function sum(param) {
    return param.reduce((acc, next) => acc + next, 0);
}

function multiply(param) {
    return param.reduce((acc, next) => acc * next, 1);
}

function reverse(param) {
    return param.split("").reverse().join("");

}
function filterLongWords(param, number) {
    let filteredWords = param.filter(param => param.length > number);
    return filteredWords;
}