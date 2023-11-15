// DATA
let foodNames  = [ "Pizza", "Salad",   "Soup"]
let foodPrices = [  100.00,   75.00,   50.00 ]

//                    ^
//                    0

// LOGIC
let menu = `
############################
MENU
############################
`

for (let i=0; i<foodNames.length; i++) {
    menu += `${i+1}. ${foodNames[i]}\n`
}

menu += `choose:`

let option = parseInt( prompt(menu) ) - 1 // "1"

let optionDescription = `
You've chosen
"${foodNames[option]}"
1 portion - ${foodPrices[option]}
how many do you want ?
`
let portions = parseInt( prompt(optionDescription))

let cost = foodPrices[option] * portions


// HW1:

let deliveryConfirm = confirm("Do you want delivery?")
let deliveryCost = 50

if (deliveryConfirm) {
    
        if (cost > 500) {
            deliveryCost = 0
        } alert(`Delivery cost: ${deliveryCost}`)
    } else {
        alert("You have to pick up your order.")
    }

let ordertDescription = `
Your order:
"${foodNames[option]}": ${portions} x ${foodPrices[option]} = ${cost} 
Delivery: ${deliveryCost}
Total: ${cost + deliveryCost}
`

alert(ordertDescription)