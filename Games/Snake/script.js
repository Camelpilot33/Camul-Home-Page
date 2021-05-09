//colors
var b = "#000"
var r = "#F00"
var lg = "#0f0"
var dg = "#0a0"

var pressedKeys = {};
window.onkeyup = function (e) { pressedKeys[e.keyCode] = false; }
window.onkeydown = function (e) { pressedKeys[e.keyCode] = true; }

var score = 0
var time = 0
var dx = 0
var dy = 0
var width = 17
var height = 17
var table_arr = [
  [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ], [
    b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b
  ]
]
//fail table_arr = Array(height+1).fill(Array(width+1).fill(b))
//console.log(table_arr)

function checkDirection() {
  if (pressedKeys["87"]) { //w
    dy = -1
    dx = 0
  } else if (pressedKeys["83"]) { //s
    dy = 1
    dx = 0
  } else if (pressedKeys["65"]) { //a
    dx = -1
    dy = 0
  } else if (pressedKeys["68"]) { //d
    dx = 1
    dy = 0
  }
}
function collect() {
  score++
  document.getElementById("score").innerHTML = score
  player.tail[player.tail.length] = {x:player.tail[0].x,y:player.tail[0].y}
  apple.x = Math.floor(Math.random()*width+1)
  apple.y = Math.floor(Math.random()*height+1)
}

function death() {
  clearInterval(interval);
  document.write("<body style=\"background-color:#111;\"><center><h1 style=\"color:#F00;\">YOU LOSE</h1></center></body>")
}

function frame() {
  time++
  checkDirection()
  //move
  if (time%25 == 1) {
    for (i in player.tail) {
      var j = player.tail.length - i - 1
      if (j > 0) {
        player.tail[j].x = player.tail[j - 1].x;
        player.tail[j].y = player.tail[j - 1].y;
      }
    }
    player.tail[0].x = player.x;
    player.tail[0].y = player.y;
    if (player.x > 0 && dx == -1) player.x += dx
    else if (dx == -1) death()
    if (player.x < width && dx == 1) player.x += dx
    else if (dx == 1) death()
    if (player.y < height && dy == 1) player.y += dy
    else if (dy == 1) death()
    if (player.y > 0 && dy == -1) player.y += dy
    else if (dy == -1) death()
  }
  //check for collision between head and tail[1]
  for (i in player.tail) {
    if (i>0 && player.tail[i].x == player.x && player.tail[i].y == player.y) {
      death()
    }
  }
  //check apple collision
  if (player.x == apple.x && player.y == apple.y) {
    collect();
  }
  //console.log(player)
  //clear
  for (i in table_arr) {
    for (j in table_arr[i]) {
      table_arr[i][j] = b
    }
  }
  for (i in player.tail) {
    table_arr[player.tail[i].y][player.tail[i].x] = dg
  }
  //console.log(player)
  table_arr[apple.y][apple.x] = r
  table_arr[player.y][player.x] = lg

  //check
  var table_str = ``
  for (i in table_arr) {
    table_str += "<tr>"
    for (j in table_arr[i]) {
      table_str += "<td style='background-color:" + table_arr[i][j] + "'></td>"
    }
    table_str += "</tr>"
  }
  //console.log(table_str)
  document.getElementById("table").innerHTML = table_str
}
var apple = {x:5,y:5}
var player = { x: 1, y: 1, tail: [{ x: 1, y: 0 }] }
frame()
interval = setInterval(frame, 10)