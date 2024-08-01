function eidGreeting (name:string,employeeId:number,emailadress:string) {
    console.log (`wishing you happy Eid day ${name}! your employee i.d is ${employeeId} and your official emailadress is ${emailadress}`)
}
eidGreeting("Rabia Waqar",246,"rabia_waqar@hotmail.com")
eidGreeting("Nasir",759,"nasakhan@gmail.com")
// cube root and substraction
function cuberoot (digit:number) {
    console.log(digit*digit*digit)
}
cuberoot(4)
function subtraction (firstdigit:number,seconddigit:number) {
    console.log(firstdigit - seconddigit)
}
subtraction ( 45, 32)
function module (firstdigit:number = 12,seconddigit:number = 2)
{console.log(firstdigit/seconddigit)}

module(36)
module(undefined,3)


// set default value
function game (username:string = "guest1234"){
    console.log(username)
}
game()
game("Yusha")

// return statement
function MealOrder (type:string,dishName:string,topping:string){
    return `${type}, ${dishName}, ${topping}`
}
console.log(MealOrder("chicken","pizza","mayonese and extra cheese"))

// 
function country ():string {
    return "Pakistan" 
}

console.log(country())








