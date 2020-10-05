"use strict";

var oddNumber = (prompt("Choose an odd number between 1 and 50"));
for (var i = 1; i <= 50; i++){
    if(oddNumber % 2 === 0){
    prompt("Please enter a correct number");
    break;
    }
}

for (var i = 1; i <= 50; i = i + 2) {
    if(i == oddNumber) {
        console.log("Yikes, skipping number: " + oddNumber)
        continue;
        {

        }
    }
    console.log("Here is an odd number: " + i);

}