function findPositions(room) {
  let mousePosition, foodPosition;
  
  for (let row = 0; row < room.length; row++) {
    for (let col = 0; col < room[row].length; col++) {
      if (room[row][col] === 'm') {
        mousePosition = [row, col];
      }
      if (room[row][col] === '*') {
        foodPosition = [row, col];
      }
    }
  }
  
  return { mousePosition, foodPosition };
}

const room = [
  [' ', ' ', ' ',' ', ' ',],
  [' ', ' ', 'm',' ', ' ',],
  [' ', ' ', ' ',' ', ' *',]
];

const positions = findPositions(room);
console.log("Mouse Position:", positions.mousePosition); 
console.log("Food Position:", positions.foodPosition);   
