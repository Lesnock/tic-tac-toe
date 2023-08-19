export function getSquareRowColumn(squareNumber) {
  const row = Math.floor(squareNumber / 3)
  const column = squareNumber % 3
  return [row, column]
}

export function getSquareNumber(row, column) {
  return row * 3 + column
}
