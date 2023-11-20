// DATABASE

// DATA STRUCTURE
// layer 1 - user
// layer 2 - user data
const NAME = 0
const GEN  = 1
const AGE  = 2

const people = [

    // ->     name   gen  age
    //          0      1    2
        [    "John" , "m", 30   ], // 0  |
        [   "Marry" , "f", 31   ], // 1  |
        [    "Pete" , "m", 22   ], // 2  |
        [   "Tanya" , "f", 19   ], // 3  .
        [    "Mark" , "m", 33   ], // 4  V
]


// 1. render

// [... personal data ] -- in -- > render() -- return -- > html


 const render = ( personalData) => {
    let html = `
        <div>
            <h2>${personalData[NAME]}</h2>
            <p>${personalData[GEN]} (${personalData[AGE]} years)</p>
        </div>
    `
    return html
 }

const renderResult = ( resultArray ) => {
    let html = `<ol>`

    resultArray.forEach( result => {
        html += `<li>${result}</li>`
    } )

    html += `</ol>`

    resultDiv.innerHTML = html
}





// render first time
renderResult( people.map (render) )