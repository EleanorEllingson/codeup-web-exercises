"use strict";


function showMultiplicationTable(n){

    for(var i = 1; i <= 10; i++){

        console.log((n + " X " + i + " = ") + (n * i));
    }
} showMultiplicationTable(7)

var randomNumber;
//  console.log(randomNumber)
for(var i = 1; i <= 10; i++){
    randomNumber = Math.floor((Math.random() * 180) + 20);
    if(randomNumber % 2 === 0){
        console.log(randomNumber + " is even");
    } else{
        console.log(randomNumber + " is odd");
    }
}

for(var i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

for(var i = 100; i >= 5; i-=5){
    console.log(i);
}
