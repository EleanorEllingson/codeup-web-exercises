// var inputString = "Trick or treat";
// var inputArray = inputString.split(" ");
//
// inputArray.forEach(function (element, index){
//     console.log(index, element );
// })
//
//
//
//
// //******Math Methods*****
// //Math.random()
// var randomNum = Math.random() * 2;
// console.log(randomNum)
// //can't use a decimal when reffering to an array index, so use Math.round
// var index = Math.round(randomNum)
// console.log("Normal rounding: " + index);
//
//
// // var randomWord = inputArray[index]:
// // console.log(randomWord)
//
// //Math.floor()
// index = Math.floor(randomNum)
// console.log("Rounding down " + index);
//
// var randomWord = inputArray[index];
// console.log(randomWord);
//
// index = Math.ceil(randomNum);
// console.log("Rounding up (with ceil): " + index);
// randomWord = inputArray[index];
// console.log(randomWord)
//
//
// //a random number between 74 and including 186
// let numBetween = Math.ceil(Math.random() * 74) + 112;
// console.log("using 74 as random base, and adding 112: " + numBetween)
//
// numBetween = Math.ceil(Math.random() * 112) + 74;
//
// console.log("using 112 as random base, and adding 74: " + numBetween)

//Math.pow()
// Used to raise one number to the power of another number

var exponentResult = Math.pow(4, 2);
console.log("4 squared (or 4^2) = " + exponentResult);
console.log("8 cubed = " + Math.pow(8, 3));

//math.PI
// is used to calculate circumference and area of a circle
// circumference = 2 * π * r = π * D(diameter)
//option + p = π
// option + shift + 8 = °
var circumference = Math.PI * 5;
console.log("Circumference of a circle with diameter of 5 = " + circumference.toFixed(3));
var area = Math.PI * Math.pow(2.5, 2);
console.log("Area of a circle with diameter of 5 = " + area.toFixed(3));

// number within Range = (2000) + Math.random()*(MAX(3000) - MIN(2000))
//number withinRange = Math.random() * (MAX - MIN) + MIN

//Write a method to find a random number within a range of 2 numbers (min and a max)
// HINT: the min and the max should be passed into the method as parameters

function randNumber(MIN, MAX){
    var withinRange = Math.random() * (MAX - MIN) + MIN;
    return withinRange.toFixed(0)
}
console.log("Random Number = " + randNumber(2000, 3000));