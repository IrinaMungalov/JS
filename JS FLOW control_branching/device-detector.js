// script that detects screen size:
//     > desktop
//     > smartphone


//            else
//              v
// < ----- smartphone ----
//                        \
// 300 --------------------x------------------- 1920 --- > viewport width
//                         |
//                         -------------------- desktop --- >
//                        1000 breakpoint          ^
//                                               // if ()


const BREAKPOINT = 1000
let viewportWidth = innerWidth // < ------ browser updates

if ( viewportWidth >= BREAKPOINT ) {
    alert("Desktop")
} else {
    alert("Smartphone")
}
