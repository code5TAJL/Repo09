// Only change code below this line
function myDoWhile() {
    var myNumbers = "";
    var i = 0;

    do{
        myNumbers += i + ", ";
        i++;
    }
    while(i < 9){
        (i === 9)? myNumbers += i : myNumbers += i + ", ";
        i++;
    }
    return myNumbers
}
myDoWhile();

console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;