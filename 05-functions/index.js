// a simple function
function greet() {
    var msg = "Good Evening";
    //   console.log(msg);
}
greet();
// a function with parameters
function printData(name, age) {
    var msg = "Hi I'm ".concat(name, " ").concat(age, " yrs Old!");
    //   console.log(msg);
}
printData("Binod", 21);
// a function with return Type
function reverseString(str) {
    var temp = "";
    for (var i = str.length - 1; i >= 0; i--) {
        temp += "".concat(str.charAt(i));
    }
    return temp;
}
var result = reverseString("boom");
console.log(result);
