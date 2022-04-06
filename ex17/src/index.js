// Only change code below this line
function inverseWhile() {
    var fiveNumbers = 5;
    var string = "";
    while(fiveNumbers >= 0) {
                string += fiveNumbers + ", ";
            fiveNumbers--;
         
        }
            return string
         
}
inverseWhile();
// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;