let devSalary = {
    "Jun": 4000,
    "Jul": 3500,
    "Aug": 4500,
}

let devSalary_ = {
    Jun: 4000,
    Jul: 3500,
    Aug: 4500,
}

// object is la a UNIT

let userName = "j0hny"
let userPass = "123456"
let userMail = "j@0.com"

let userName_2 = "m@rry"
let userPass_2 = "123"
let userMail_2 = "m@0.com"

///////////////////////////////////////////
let user_1 = {
    name: "j0hny",
    pass: "123456",
    mail: "j@0.com"
}

let user_2 = {
    name: "m@rry",
    pass: "123",
    mail: "m@0.com"
}

// value change
user_1.pass = "abc"

// add new prop
user_1.online = true

// delete props
delete user_1.online

// HW1:

// choose a book, film, product, ...
// - try to structute the infotmation about them using literal objects

let products = [
    { name: "bananas", 
      price: 22.5,
      quantity: 1, 
      class: "fruits" },

    { name: "milk", 
      price: 26.0, 
      quantity: 1,
      class: "dairy products" },

    { name: "bread", 
      price: 9.8, 
      quantity: 2,
      class: "bakery products" },

    { name: "potato", 
      price: 11.2, 
      quantity: 4,
      class: "vegetables" },

    { name: "meat", 
      price: 105.0, 
      quantity: 1.5,
      class: "meat products" },
]

let movies = [
    { title: "Inception", 
      director: "Christopher Nolan", 
      releaseYear: 2010, 
      genre: "action, thriller, drama, detective" },

    { title: "The Shawshank Redemption", 
      director: "Frank Darabont", 
      releaseYear: 1994, 
      genre: "drama"  },

    { title: "Intouchables", 
      director: "Olivier Nakash, Eric Toledano", 
      releaseYear: 2011, 
      genre: "drama, comedy, biography" },
]

let books = [
    { title: "Gone with the Wind", 
      author: "Margaret Mitchell", 
      publicationYear: 1936, 
      genre: "Novel" },

    { title: "The Adventures of Sherlock Holmes", 
      author: "Sir Arthur Conan Doyle", 
      publicationYear: 1892, 
      genre: "Mystery" },  
]