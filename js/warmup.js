"use strict";

console.log("Hello Joshua");
console.log("Hello Ethan");
console.log("Hello Rebecca");
console.log("Hello Elena");
console.log("Hello Michael");

function sayHello(name) {
    console.log("Hello " + name)
}
sayHello("Joshua")
sayHello("Ethan")

function caseSensitive(str) {
    return str === str.toUpperCase() || str.toLowerCase();
}
console.log(caseSensitive("hello"));
caseSensitive("HELLO");
caseSensitive("Hello");

//Writ a function to convert a string into an array of words
// Input "Trick or Treat"
// Output: ['Trick', 'or', 'Treat']

function stringToArray(input){
    var stringSplit = input.split();
    var stringArray = stringSplit(" " )


} stringToArray("Trick or Treat")
