module.exports = function parseStringToArray(ArrayAsString) {
    return ArrayAsString.split(',').map(tech => tech.trim());
}