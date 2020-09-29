"use strict"
console.log("Hello from external Javascript");
alert("Welcome to my Website!");
var userColor = prompt("What is your favorite color?");
alert("Great, " + userColor + " is my favorite color too!");

var moviePerDay = Number(prompt("What is the daily rental rate?"));
var LittleMermaid = Number(prompt("How long did you rent Little Mermaid for?"));
var BrotherBear = Number(prompt("How long did you rent Brother Bear for?"));
var Hercules = Number(prompt("How long did you rent Hercules for?"));


alert("You owe $" + moviePerDay * (LittleMermaid + BrotherBear + Hercules));

let Google = Number(prompt("What is Google's hourly rate?"));
let Amazon = Number(prompt("What is Amazon's hourly rate?"));
let Facebook = Number(prompt("What is Facebook's hourly rate?"));
var GoogleHours = Number(prompt("How many hours did you work for Google?"));
var AmazonHours = Number(prompt("How many hours did you work for Amazon?"));
var FacebookHours = Number(prompt("How many hours did you work for Facebook?"));
alert("Your payment for the week will be " + (Google * GoogleHours + Amazon * AmazonHours + Facebook * FacebookHours) + ".");

var x = prompt("How many students can enroll in this class?");
var classFull = x.maxValue
var currentSchedule = confirm("Does your current schedule have room for this class?");
    if (!classFull && currentSchedule) {
        alert("You can enroll in this class.");
    }
    else {
        alert("You can't enroll in this class.");
    }


var premiumMember = confirm("Are you a premium member?");
var offerValid = confirm("Is this offer valid")
var purchase = Number(prompt("How many items did you purchase?"));
    if (premiumMember && offerValid ) {
        alert("Offer Applied");
    } else if (purchase > 2 && offerValid) { alert("Offer Applied");

    } else { alert("Offer Not Applied");

    }