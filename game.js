import { drawLines, drawX, drawCircle } from './renderer.js'
const canvas = document.querySelector('canvas')

const size = 300
canvas.width = size
canvas.height = size

drawLines()

drawX(8)
drawCircle(7)
