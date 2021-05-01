const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.witdth = 1200;
canvas.heigth = 1766;

const cursorKeyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
}
const pressedKeys = [];

const player = {
  x: 20,
  y: 20,
  width: 50,
  height: 48,
  frameX: 0,
  frameY: 0,
  speed: 1,
  moving: false,
};

const playerSprite = new Image();
playerSprite.src = "death_scythe.png";
const background = new Image();
background.src = "cemetery.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function animate() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  drawSprite(
    playerSprite,
    player.width*player.frameX,
    player.height*player.frameY,
    player.width,
    player.height,
    player.x,
    player.y,
    player.width,
    player.height
  );

  movePlayer()

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('keydown' , function (e) {
    pressedKeys[e.keyCode] = true;
    console.log(pressedKeys)
})

window.addEventListener('keyup' , function (e) {
    delete pressedKeys [e.keyCode];
    console.log(pressedKeys)
})

function movePlayer() {

    if (pressedKeys[cursorKeyCodes.UP] && player.y > 0) {
        player.y -= player.speed
        player.frameY = 3;

    }

    if (pressedKeys[cursorKeyCodes.LEFT] && player.x > 0) {
        player.x -= player.speed
        player.frameY = 1;

    }

    if (pressedKeys[cursorKeyCodes.DOWN] && player.y < canvas.height - player.height) {
        player.y += player.speed
        player.frameY = 0;

    }

    if (pressedKeys[cursorKeyCodes.RIGHT] && player.x < canvas.width - player.width) {
        player.x += player.speed
        player.frameY = 2;

    }
}
