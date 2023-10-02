//  guessing game

const CORRECT_NUMBER = parseInt( Math.random() * 10 )

let userGuess = parseInt( prompt("enter a number (0-10)") )
    // <--- prompt() String


if ( userGuess == CORRECT_NUMBER ) {
    alert("Yeee! You WON!")
} else {
    alert (":( try again!")
}

//                     CORRECT_NUMBER
//                            v
// ------ 3 ------- 4 ------- 5 ------ 6 ------ 7 ---- userGuess ---- >
//                            ^
//                        userGuess