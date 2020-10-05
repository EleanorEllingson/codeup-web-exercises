"use strict";

var i = 2
while(i <= 65536){
    console.log(i)
    i = i * 2
}
var allCones = Math.floor(Math.random() * 50) + 50;
console.log("I need to sell " + allCones + " cones.");
var sales
var totSales = 0
var remainingCones = allCones
do {
    sales = Math.floor(Math.random() * 5) + 1;

    if(sales <= remainingCones){
        console.log(sales + " cones sold")
        totSales = totSales + sales
    } else if(sales > remainingCones){

        console.log("Cannot sell you " + sales + " cones. I only have " + remainingCones);
        totSales = totSales + remainingCones;
    }

    remainingCones = allCones - totSales
} while(totSales < allCones);

    console.log("You sold them all")