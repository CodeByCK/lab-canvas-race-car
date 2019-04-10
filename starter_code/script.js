// window.onload = function () {
//   document.getElementById("start-button").onclick = function () {
//     startGame();
//     drawCar();
//   };


//Declaring varibles - canvas / height / width
const canvas = document.getElementById("road");
const ctx = canvas.getContext('2d');
const w = canvas.width;
const h = canvas.height;
let myObstacles = [];








//draw the canvas board
function drawBoard() {

  ctx.beginPath();
  ctx.fillStyle = "rgb(0, 110, 0)";
  ctx.fillRect(0, 0, w, h);
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.fillRect(25, 0, 350, h);
  ctx.closePath();
  ctx.fillStyle = "white";
  ctx.fillRect(35, 0, 330, h);
  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.fillRect(45, 0, 310, h);
  ctx.closePath();
  ctx.beginPath(200, 0);
  ctx.setLineDash([20, 20]);
  ctx.lineWidth = "4"
  ctx.strokeStyle = "white";
  ctx.moveTo(200, 500);
  ctx.lineTo(200, 0);
  ctx.stroke();
}


let minWidth = 50;
let maxWidth = 200;
let rW = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
let minPosition = 50;
let maxPosition = 200;
let rP = Math.floor(Math.random() * (maxPosition - minPosition) + minPosition);

//draw obstacle
function drawObstacle() {

  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(rP, obstacle.y, rW, 20);
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(rP, obstacle.y, rW, 20);
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.fillRect(rP, obstacle.y, rW, 20);
  ctx.closePath();

}

// let obstacle = {
//   x: 0,
//   y: 0,
//   width: 200,
//   height: 300
// }

// myObstacles = [
//   { x: 10, y: 2, width: 200, height: 30 },
//   { x: 12, y: 9, width: 180, height: 30 },
//   { x: 0, y: 13, width: 190, height: 30 },
// ]


// function createObsacles() {
//   setInterval(function () {
//     //myObstacles.push(randomObstacles)
//   }, 5000)
// }

// function updateObstacles() {
//   drawObstacle()
//   //first increment the y, and then drawObstacles
// }



//draw car
function drawCar() {
  ctx.drawImage(carImage, car.x, car.y, 50, 75);
}


//car image
let carImage = new Image();
carImage.src = "./images/car.png";

let car = {
  x: 175,
  y: 400,
  moveLeft: function () { this.x -= 10 },
  moveRight: function () { this.x += 10 },
  moveUp: function () { this.y -= 10 },
  moveDown: function () { this.y += 10 }
}






//Key functions for the car
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38: car.moveUp(); console.log('up', car); break;
    case 40: car.moveDown(); console.log('down', car); break;
    case 37: car.moveLeft(); console.log('left', car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
  updateCanvas();
}






//Calling function over and over
function updateCanvas() {
  ctx.clearRect(0, 0, w, h)
  drawBoard();
  drawCar();
  // updateObstacles()

  window.requestAnimationFrame(updateCanvas);

}

updateCanvas()
//};


