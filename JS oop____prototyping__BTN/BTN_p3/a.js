let btn = {
    __text: "Ok",  // hide
    get text() {
        return this.__text
    },
    set text(value) {
        if (typeof value == "string")
        {
            this.__text = value
        }
        else {
            console.error("ERROR: CANNOT set text with not string values!")
        }
    }
}
