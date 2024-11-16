
// create a 3v3 grid
const obj = { playerOne: 'X', playerTwo: 'O' }
const { playerOne, playerTwo } = obj

Object.keys(playerOne)[0], (playerTwo)[1];
const key = Object.keys(playerOne)[0]


const grid = document.querySelector(".grid-container")
const squares = document.querySelectorAll("div")
const group = document.querySelector("span")
const underGrid = document.querySelector("p")
const reset = document.createElement("button")

reset.textContent = 'reset'

underGrid.appendChild(reset)


function resetGame() {
    squares.forEach((div) => {
        div.innerText = ''
        group.innerHTML = ''
        clickCount = 1
    })
}

reset.addEventListener('click', () => {
    resetGame()
})




let clickCount = 1

squares.forEach((div) => {
    div.addEventListener('click', () => {
        console.log(clickCount)


        const playerTurn = document.createElement("p")
        
        playerTurn.textContent = div.innerText
        group.appendChild(playerTurn)


        if (div.textContent == '' && clickCount % 2 != 0 && clickCount < 10) {
            div.innerText = playerOne[key]
            clickCount++
            group.innerHTML = 'PlayerOne'
        } else if (div.textContent == '' && clickCount % 2 == 0 && clickCount < 10) {
            div.innerText = playerTwo[key]
            clickCount++
            group.innerHTML = 'PlayerTwo'
        } else if (div.textContent != '' && clickCount < 10) {
            group.innerHTML = "CAN'T CLICK THERE BUDDY!"
        } else {
            group.innerHTML = "PlayerOne"
        }
        
    })

})





// if all the divs are empty then 1st marker is X
// but if div is empty and last marker was X return O
// if last was o return X
// if all divs aren't empty
// Game over


// Winner
// if 3x in a row

