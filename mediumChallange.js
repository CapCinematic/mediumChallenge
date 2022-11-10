// If the driving record is good and user is over 25 years old, they should get a discount on the car rental
// If the user either has a good record or is over 25 years old, they should pay full price
// If the user is not over 25 and has a bad driving record, they need to have someone else sign for the rental

var gooddrivingRecord = false;
var age =26;

if (gooddrivingRecord && age>25) {
    console.log("Discount approved!")
}
else if (gooddrivingRecord || age>25) {
    console.log("full price")
}
else if (!gooddrivingRecord && age<=25) {
    console.log("co-sign needed")
}