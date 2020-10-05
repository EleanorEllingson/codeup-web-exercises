"use strict";


do {
    var oddNumber = (prompt("Choose an odd number between 1 and 50"));

    if(oddNumber < 1 || oddNumber > 50) {
        prompt("Number is invalid, please enter a number between 1 and 50")
        break;
    }
    else if (oddNumber % 2 === 0) {
            prompt("Number is even, Please enter an odd number");
            break;
        } else {
            alert("Number is valid! Thank you!")
            break
        }
    } while (  );

for (var i = 1; i <= 50; i+ 2) {
    if(i == oddNumber) {
        console.log("Yikes, skipping number: " + oddNumber)
        continue;
        {

        }
    }
    console.log("Here is an odd number: " + i);

}
