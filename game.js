import { drawLines, drawX, drawCircle } from './renderer.js'
import { getSquareNumber } from './utils.js'
const canvas = document.querySelector('canvas')

const size = 300
canvas.width = size
canvas.height = size
let turn = 'x'

drawLines()
setMouseListener()

function setMouseListener() {
  canvas.addEventListener('click', event => {
    const bounds = canvas.getBoundingClientRect()
    const squareSize = bounds.width / 3
    const column = Math.floor(event.offsetX / squareSize)
    const row = Math.floor(event.offsetY / squareSize)
    const squareNumber = getSquareNumber(row, column)

    if (turn == 'x') {
      drawX(squareNumber)
    } else {
      drawCircle(squareNumber)
    }

    turn = turn == 'x' ? 'o' : 'x'
  })
}
