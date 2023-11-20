// Array structure, methods & callbacks

//    > IoC
//    > callback
//    > declarative
//    > functional interface (predicate, function, ...)

const TYPE = 2
const NAME = 0
const PRICE = 1

const menu = [
    [ "Pizza",       100, "food" ],
    [ "Orange Juice", 25, "drink"],
    [ "Salad",        15, "food" ],
    [ "Soup",         50, "food" ],
    [ "Tea",          75, "drink"],
]

// 1. client wants only drinks
// .filter()
menu.filter( item => item[TYPE] == 'drink' )

//HW1: client wants to see only food within price range of 50...100
menu.filter( item => item[PRICE] >= 50 && item[PRICE] <= 100 )

// 2. client wants to see the items sorted
menu.sort( (itemA,itemB) => {
    if ( itemA[TYPE] == 'drink' && itemB[TYPE] == 'food') {
        return -1
    } else if ( itemA[TYPE] == 'food' && itemB[TYPE] == 'drink') {    
        return 1
    } else {
        return 0
    }
} )

//HW2: client wants to see everything with an ascending price
menu.sort( (itemA,itemB) => itemA[PRICE] - itemB[PRICE] )

