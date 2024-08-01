"use strict";
function eidGreeting(name, employeeId, emailadress) {
    console.log(`wishing you happy Eid day ${name}! your employee i.d is ${employeeId} and your official emailadress is ${emailadress}`);
}
eidGreeting("Rabia Waqar", 246, "rabia_waqar@hotmail.com");
eidGreeting("Nasir", 759, "nasakhan@gmail.com");
// cube root and substraction
function cuberoot(digit) {
    console.log(digit * digit * digit);
}
cuberoot(4);
function subtraction(firstdigit, seconddigit) {
    console.log(firstdigit - seconddigit);
}
subtraction(45, 32);
function module(firstdigit = 12, seconddigit = 2) { console.log(firstdigit / seconddigit); }
module(36);
module(undefined, 3);
// set default value
function game(username = "guest1234") {
    console.log(username);
}
game();
game("Yusha");
// return statement
function MealOrder(type, dishName, topping) {
    return `${type}, ${dishName}, ${topping}`;
}
console.log(MealOrder("chicken", "pizza", "mayonese and extra cheese"));
// 
function country() {
    return "Pakistan";
}
console.log(country());
