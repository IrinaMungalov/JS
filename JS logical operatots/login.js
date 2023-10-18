
let userName = prompt ("Your login please?", "")

if (userName == "Admin") {
        let passWord = prompt ("Password?", "")

        if (passWord == "I'm chief") {
            alert("Good day!")
        } else if (passWord == '' || passWord == null) {
            alert("Cancel")
        } else {
            alert("Invalid password")
        }

} else if (userName == '' || userName == null) {
    alert("Cancel")
} else {
    alert("I don't know you")
}



