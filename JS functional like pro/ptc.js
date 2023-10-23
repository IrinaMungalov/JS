// PRODUCER - creates / offers data
function produce () {
    return 1000
}

// TRANSFORMER - receives / prosesses / return
//                parameter
//                    v
function transform (value) {
    let res = value * 1000
    return res
}

// CONSUMER - receives / consumes
function consume (n) {
    console.log("n=" + n)
}

