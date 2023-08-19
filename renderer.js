import { getSquareRowColumn } from './utils.js'
const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const squareSize = canvas.width / 3

export function drawLines() {
  ctx.strokeStyle = '#000000'
  ctx.lineWidth = 2

  ctx.beginPath()
  ctx.moveTo(canvas.width / 3, 0)
  ctx.lineTo(canvas.width / 3, canvas.height)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(canvas.width / 3 * 2, 0)
  ctx.lineTo(canvas.width / 3 * 2, canvas.height)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, canvas.height / 3)
  ctx.lineTo(canvas.width, canvas.height / 3)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, canvas.height / 3 * 2)
  ctx.lineTo(canvas.width, canvas.height / 3 * 2)
  ctx.stroke()
}

export function drawX(squareNumber) {
  const [row, column] = getSquareRowColumn(squareNumber)
  const padding = 20
  const x = column * squareSize
  const y = row * squareSize

  ctx.lineWidth = 10
  ctx.strokeStyle = '#0000ff'
  ctx.beginPath()
  ctx.moveTo(x + padding, y + padding)
  ctx.lineTo(x + squareSize - padding, y + squareSize - padding)
  ctx.moveTo(x + padding, y + squareSize - padding)
  ctx.lineTo(x + squareSize - padding, y + padding)
  ctx.stroke()
}

export function drawCircle(squareNumber) {
  const [row, column] = getSquareRowColumn(squareNumber)
  const x = (column + 1) * squareSize - (squareSize / 2)
  const y = (row + 1) * squareSize - (squareSize / 2)
  ctx.lineWidth = 10
  ctx.strokeStyle = '#ff0000'
  ctx.beginPath()
  ctx.arc(x, y, 35, 0, 2 * Math.PI)
  ctx.stroke()
}
