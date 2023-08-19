import { drawLines, drawX, drawCircle, drawWinLine, reset } from './renderer.js'
import { getSquareNumber } from './utils.js'

const canvas = document.querySelector('canvas')
const messageEl = document.querySelector('.gui .message')
const playAgainButtonEl = document.querySelector('.gui .play-again-button')

const size = 300
canvas.width = size
canvas.height = size
let turn = 'x'
let gameOver = false
let winLine = ['', '', '']
const state = ['', '', '', '', '', '', '', '', ''] // 9 squares

drawLines()
setMouseListener()
setPlayAgainButtonListener()

function setPlayAgainButtonListener() {
  playAgainButtonEl.addEventListener('click', resetGame)
}

function resetGame() {
  state.forEach((_, i) => state[i] = '') // Reset game state
  messageEl.innerHTML = ''
  messageEl.style.display = 'none'
  playAgainButtonEl.style.display = 'none'
  gameOver = false
  reset()
}

function setMouseListener() {
  canvas.addEventListener('click', event => {
    const bounds = canvas.getBoundingClientRect()
    const squareSize = bounds.width / 3
    const column = Math.floor(event.offsetX / squareSize)
    const row = Math.floor(event.offsetY / squareSize)
    const squareNumber = getSquareNumber(row, column)

    if (state[squareNumber] != '' || gameOver) {
      return
    }

    state[squareNumber] = turn

    if (turn == 'x') {
      drawX(squareNumber)
    } else {
      drawCircle(squareNumber)
    }

    // Check if current play won the game
    if (checkWin()) {
      playAgainButtonEl.style.display = 'block'
      showMessage(`"${turn}" won!`)
      drawWinLine(winLine)
      gameOver = true
      return
    }

    if (checkDraw()) {
      playAgainButtonEl.style.display = 'block'
      showMessage('Draw!')
      gameOver = true
      return
    }

    turn = turn == 'x' ? 'o' : 'x'
  })
}

function checkDraw() {
  for (const value of state) {
    if (value == '') {
      return false
    }
  }
  return true
}

function checkWin() {
  const winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  for (const winCase of winCases) {
    let win = true
    for (const squareNumber of winCase) {
      if (state[squareNumber] != turn) {
        win = false
      }
    }
    if (win) {
      winLine = winCase
      return true
    }
  }
  return false
}

function showMessage(message) {
  messageEl.style.display = 'block'
  messageEl.innerHTML = message
}
