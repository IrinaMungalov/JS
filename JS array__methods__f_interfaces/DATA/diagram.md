const menu = [
                           // .filter ()

    [ "food",  "Pizza",       100 ], <--- false 
    [ "drink", "Orange Juice", 25 ], <--- true
    [ "food",  "Salad",        15 ], --->  item => item[TYPE] == 'drink'
    [ "food",  "Soup",         50 ],
    [ "drink", "Tea",          75 ],
]


  .filter(predicate)
    |
    V
[
    [ "drink", "Orange Juice", 25 ],
    [ "drink", "Tea",          75 ],
]