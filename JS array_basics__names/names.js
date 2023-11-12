let names = [
    "John Doe",
    "Marry Poppins",
    "Pete Cork",
    "Jake Solomon",
    "Vasilii Sviatoi",
]

//1. print them using a loop in console
//HW1: 

for(let i=1; i<=3; i++) {
    console.log( names[i] )
}

//2. check name in list
let nameToFind = prompt("Name to find: ")
for(let i=0; i<5; i++) {
    if ( names[i] == nameToFind) {
        console.log(`${nameToFind} found!`)
    }
}




