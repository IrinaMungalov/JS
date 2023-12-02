// 1.

let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
  
alert( rabbit.jumps ); // true (1)
  
delete rabbit.jumps;
  
alert( rabbit.jumps ); // null (2)
  
delete animal.jumps;
  
alert( rabbit.jumps ); // undefined (3)


// 2.

let head = {
    glasses: 1
};
  
let table = {
    pen: 3
};
  
let bed = {
    sheet: 1,
    pillow: 2
};
  
let pockets = {
    money: 2000
};

Object.setPrototypeOf(table, head)
Object.setPrototypeOf(bed, table)
Object.setPrototypeOf(pockets, bed)

alert( pockets.pen ) // 3
alert( bed.glasses ) // 1
alert( table.money ) // undefined


// 3. 

let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
};
  
let speedy = {
    stomach: []
};
  
let lazy = {
    stomach: []
};
  
Object.setPrototypeOf(lazy, hamster)
Object.setPrototypeOf(speedy, hamster)
  
speedy.eat("apple")
alert( speedy.stomach )  
  
alert( lazy.stomach )