console.log("Hello from external Javascript")
alert("Welcome to my Website!")
var userInput = prompt("What is your favorite color?")
alert("Great, " + userInput + " is my favorite color too!")
let moviePerDay = 3
let LittleMermaid = 3
let BrotherBear = 5
let Hercules = 1
alert(moviePerDay * (LittleMermaid + BrotherBear + Hercules) + " dollars is the amount that you owe for the rentals.")
let Google = 400
let Amazon = 380
let Facebook = 350
var GoogleHours = prompt("How many hours did you work for Google?")
var AmazonHours = prompt("How many hours did you work for Facebook?")
alert("Your payment for the week will be " + (Google * GoogleHours + Amazon * AmazonHours + Facebook * FacebookHours) + ".")

var x = prompt("How many students can enroll in this class?")
var classFull = x.maxValue
var currentSchedule = confirm("Does your current schedule have room for this class?")
    if (!classFull && currentSchedule) {
        alert("You can enroll in this class.")
    }
    else {
        alert("You can't enroll in this class.")
    }


var premiumMember = confirm("Are you a premium member?")
var offerValid = confirm("Is this offer valid")
var purchase = prompt("How many items did you purchase?")
    if (premiumMember && offerValid ) {
        alert("Offer Applied")
    } else if (purchase >= 2 && offerValid) { alert("Offer Applied")

    } else { alert("Offer Not Applied")

    }