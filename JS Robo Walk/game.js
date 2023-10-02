
const STEP = 36 // =width
let robotLeft = 1 // coords: steps




function renderLeft() {
    gameMap.innerHTML = `
    <div class="robot" 
         style="transform:translateX(${robotLeft * STEP}px)">
    </div>
    `
}

renderLeft()

