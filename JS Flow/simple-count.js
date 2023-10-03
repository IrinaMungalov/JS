// 1..5
// > console
// > document
// > alert 
                         // not everything works as it looks
                        //
                       //
for (let n=1 ; n<=5 ; n++) {
    console.log(n)
}


//                     ?     false
// S--x---x----------->x-------------->E
//   n=1  ^          n<=5
//        |            |
//        |            | true
//        |            v
//        |            x console.log(n) / 1 / 2 / 3 / 4 / 5
//        |            |
//        |            |
//        |            v
//        |            x n++  / 2 / 3 / 4 / 5 / 6
//        |            |
//        |            |
//        x------------x



