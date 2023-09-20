// calculates the person's age

// data / variables
let currentYear = new Date().getFullYear()
let birthYear   = prompt("enter your year of birth")

// calculation
let age = currentYear - birthYear

// show
alert(age)


// HW2:
let hourlyPayment = 10
let manyHours = prompt("how many hours you work a day")

let money = hourlyPayment * manyHours

alert(money)
