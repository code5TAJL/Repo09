// Only change code below this line
function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}
randomRangeNumber(10,16);

console.log(randomRangeNumber(10,16));
// Only change code above this line
module.exports = randomRangeNumber;