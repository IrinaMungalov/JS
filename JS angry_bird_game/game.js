//  game settings functions
const MAP_W = 500
const MAP_H = 500
const BIRD_W = 50
const BIRD_H = 50

const randomRange = function (minV, maxV) {
    return minV + Math.random() * (maxV - minV)
}

let bird_left = randomRange (0,400)
let bird_top = randomRange (0,400)

let direction = "right"
let speed_x = 1

let timerId  

let score = 0

//  game logic functions

const initGame = function () {
    map.style.width = `${MAP_W}px`
    map.style.height = `${MAP_H}px`
}

const startBird = function () {
    bird.style.transition = `0s`;
    bird_left = randomRange (0,400)
    bird_top = randomRange (0,400)
    updateBirdStyle()
    timerId = setInterval(moveBird, 20)    

    result.style.display = `none`
    play.style.display = `none` 

    scoreDisplay.innerHTML = score
    
}

// HW3:

const gameOver = function () { 
    if (bird_top >= MAP_H - BIRD_H) {
        score = 0
        clearInterval(timerId)
        result.innerHTML = "GAME OVER"
        play.innerHTML = '<button onclick="startBird()">PLAY AGAIN</button>'
                
        result.style.display = `block`
        play.style.display = `block`    
        
    }      
}

const moveBird = function() {
    bird_left += speed_x
    if (bird_left >= MAP_W - BIRD_W) {
        speed_x *= -1
        direction = "left"

        //HW1: 

        bird_top += randomRange(10,30)
        speed_x *= 1.05
    }
    if (bird_left <= 0) {
        speed_x *= -1
        direction = "right"
        bird_top += randomRange(10,30)
        speed_x *= 1.05
    }
    
    gameOver()
    updateBirdStyle()
    
}
const updateBirdStyle = function() {
    // let sx = 1
    // if (direction == "left") {
    //     sx = -1
    // }
    bird.style
        .transform = `
          translateX(${bird_left}px) 
          translateY(${bird_top}px)
          scaleX(${direction == "left"? -1 : 1})`

}

const shoot = function () {
    let cx = event.layerX + BIRD_W / 2
    let cy = event.layerY + BIRD_H / 2

    let bcx = bird_left + BIRD_W / 2
    let bcy = bird_top + BIRD_H / 2

    //HW2: 

    if ( Math.abs( cx - 10 - bcx ) <= 10 && Math.abs( cy - 10 - bcy ) <= 10 ) {
        score += 5
        clearInterval(timerId)

        bird.style.transition = `1s`;

        bird.style
            .transform = `
            translateX(${bird_left}px) 
            translateY(${MAP_H}px)
            scaleX(${direction == "left"? -1 : 1})
            rotate(3.5turn)`
        
        setTimeout(startBird, 2000)
        
    } else {
        score -= 5
    }      

    scoreDisplay.innerHTML = score

    // console.log(event)
    // console.log(cx,cy)
}

startBird()






/*



initGame ------
              |
              V
            +---------- function () ------------+
            |                                   |  
            |                                   |
            |                                   |
            |                                   |
            |                                   |
            +-----------------------------------+

initGame() < -------- call




*/