function filterInput() {
    let value = phoneInput.value.split('')
    let numberArray = []

    for (let i = 0; i < value.length; i++) {
        if (value[i] >= '0' && value[i] <= '9') {
            numberArray.push(value[i])
        }
    }

    console.log(numberArray)
    phoneInput.value = numberArray.join('')
}

let pattern = ["#", "#", "#", "/", "2", "#", "#", "#", "-", "#", "#", "#", "-", "#", "#"]
let filteredValue = []
