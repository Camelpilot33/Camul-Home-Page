/* 2048
Adapted by Camul
Concept by Gabriele Cirulli
Coded using HTML5 tables
*/
var table_arr = [
  ["0,0", "1,0", "2,0", "3,0"],
  ["0,1", "1,1", "2,1", "3,1"],
  ["0,2", "1,2", "2,2", "3,2"],
  ["0,3", "1,3", "2,3", "3,3"]
]
var table_str = ``
for (y in table_arr) {
  table_str += "<tr>"
  for (x in table_arr[y]) {
    table_str += "<td id='" + table_arr[y][x] + "'</td>"
  }
  table_str += "</tr>"
}
//console.log(table_str)
document.getElementById("table").innerHTML = table_str
//document.getElementById("1,0").style.backgroundColor = "red"

//set values
/*document.getElementById("0,0").innerHTML = "<center>2</center>"
document.getElementById("1,0").innerHTML = "<center>4</center>"
document.getElementById("2,0").innerHTML = "<center>8</center>"
document.getElementById("3,0").innerHTML = "<center>16</center>"
document.getElementById("3,1").innerHTML = "<center>32</center>"
document.getElementById("2,1").innerHTML = "<center>64</center>"
document.getElementById("1,1").innerHTML = "<center>128</center>"
document.getElementById("0,1").innerHTML = "<center>256</center>"
document.getElementById("0,2").innerHTML = "<center>512</center>"
document.getElementById("1,2").innerHTML = "<center>1024</center>"
document.getElementById("2,2").innerHTML = "<center>2048</center>"
document.getElementById("3,2").innerHTML = "<center>4096</center>"
document.getElementById("3,3").innerHTML = "<center>8192</center>"
document.getElementById("2,3").innerHTML = "<center>16384</center>"
document.getElementById("1,3").innerHTML = "<center>32768</center>"/**/

function gen() {
    var done = false
    var err = 0
    //position
    while (done == false) {
        if (err > 1000) {
            done = true
        }
        var pos = {}
        pos.x = Math.floor(Math.random()*4)
        pos.y = Math.floor(Math.random()*4)
        if (document.getElementById(pos.x + "," + pos.y).innerHTML == "") {
            var num = (Math.floor(Math.random()*2)+1)*2
            document.getElementById(pos.x + "," + pos.y).innerHTML = "<center>"+num+"</center>"
            done = true
        }
        err++
    }
}

function check() {
  gen()
  //get score
  var score = 0
  for (i=0;i<4;i++) {
        for (j=0;j<4;j++) {
             var inner = parseInt(document.getElementById(i + "," + j).innerHTML.replace("<center>","").replace("</center>",""))
             if (document.getElementById(i + "," + j).innerHTML != "")score += inner;
             document.getElementById("score").innerHTML = "Score: "+score
             //console.log(score)
        }
  }
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      if (document.getElementById(i + "," + j).innerHTML == "") document.getElementById(i + "," + j).style.backgroundColor = "white"
      else if (document.getElementById(i + "," + j).innerHTML == "<center>2</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#ff0000";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>4</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#ff4400";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>8</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#ffa200";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>16</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#ffe100";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>32</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#d4ff00";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>64</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#84ff00";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>128</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#00ffa2";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>256</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#00ffe5";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>512</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#00bbff";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>1024</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#0033ff";document.getElementById(i + "," + j).style.color = "white"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>2048</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#6a00ff";document.getElementById(i + "," + j).style.color = "white"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>4096</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#aa00ff";document.getElementById(i + "," + j).style.color = "white"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>8192</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#ff00ee";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>16384</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#ff0066";document.getElementById(i + "," + j).style.color = "black"}
      else if (document.getElementById(i + "," + j).innerHTML == "<center>32768</center>") {document.getElementById(i + "," + j).style.backgroundColor = "#000";document.getElementById(i + "," + j).style.color = "white"}
      else  {
        document.getElementById(i + "," + j).style.backgroundColor = "black"
        document.getElementById(i + "," + j).style.color = "white"
      }
    }
  }
}
check()
function move(dir) {
  switch (dir) {
    case "up":
      for (j = 0; j < 3; j++) {
        for (x = 0; x < 4; x++) {
          for (i = 0; i < 3; i++) {
            //console.log(x, i,document.getElementById(x + "," + i).innerHTML)
            var i1 = i + 1


            if (document.getElementById(x + "," + i).innerHTML == "") {
              //var placeholder = 'document.getElementById(x + "," + i1).innerHTML'
              document.getElementById(x + "," + i).innerHTML = document.getElementById(x + "," + i1).innerHTML
              document.getElementById(x + "," + i1).innerHTML = ""
            }

            if (document.getElementById(x+","+i).innerHTML == document.getElementById(x+","+i1).innerHTML && document.getElementById(x+","+i).innerHTML != "") {
              var inner = parseInt(document.getElementById(x + "," + i).innerHTML.replace("<center>","").replace("</center>",""))
              var inner2 = inner*2
              //console.log(inner2)
              document.getElementById(x + "," + i).innerHTML = "<center>"+inner2+"</center>"
              document.getElementById(x + "," + i1).innerHTML = ""
            }
          }
        }
      }
      check()
      //console.log("up")
      break;
    case "down":
    for (j = 0; j < 3; j++) {
        for (x = 0; x < 4; x++) {
          for (i = 3; i > 0; i--) {//made -
            //console.log(x, i,document.getElementById(x + "," + i).innerHTML)
            var i1 = i - 1 //changed
            if (document.getElementById(x + "," + i).innerHTML == "") {
              //var placeholder = 'document.getElementById(x + "," + i1).innerHTML'
              document.getElementById(x + "," + i).innerHTML = document.getElementById(x + "," + i1).innerHTML
              document.getElementById(x + "," + i1).innerHTML = ""
            }
            if (document.getElementById(x+","+i).innerHTML == document.getElementById(x+","+i1).innerHTML && document.getElementById(x+","+i).innerHTML != "") {
              var inner = parseInt(document.getElementById(x + "," + i).innerHTML.replace("<center>","").replace("</center>",""))
              var inner2 = inner*2
              //console.log(inner2)
              document.getElementById(x + "," + i).innerHTML = "<center>"+inner2+"</center>"
              document.getElementById(x + "," + i1).innerHTML = ""
            }
          }
        }
      }
      check()
      //console.log("down")
      break;
    case "left":
      for (j = 0; j < 3; j++) {
        for (x = 0; x < 4; x++) {
          for (i = 0; i < 3; i++) {
            //console.log(x, i,document.getElementById(x + "," + i).innerHTML)
            var i1 = i + 1
            if (document.getElementById(i + "," + x).innerHTML == "") {
              //var placeholder = 'document.getElementById(x + "," + i1).innerHTML'
              document.getElementById(i + "," + x).innerHTML = document.getElementById(i1 + "," + x).innerHTML
              document.getElementById(i1 + "," + x).innerHTML = ""
            }
            if (document.getElementById(i + "," + x).innerHTML == document.getElementById(i1 + "," + x).innerHTML && document.getElementById(i + "," + x).innerHTML != "") {
              var inner = parseInt(document.getElementById(i + "," + x).innerHTML.replace("<center>","").replace("</center>",""))
              var inner2 = inner*2
              //console.log(inner2)
              document.getElementById(i + "," + x).innerHTML = "<center>"+inner2+"</center>"
              document.getElementById(i1 + "," + x).innerHTML = ""
            }
          }
        }
      }
      check()
      //console.log("left")
      break;
    case "right":
      for (j = 0; j < 3; j++) {
        for (x = 0; x < 4; x++) {
          for (i = 3; i > 0; i--) {
            var i1 = i - 1
            if (document.getElementById(i + "," + x).innerHTML == "") {
              document.getElementById(i + "," + x).innerHTML = document.getElementById(i1 + "," + x).innerHTML
              document.getElementById(i1 + "," + x).innerHTML = ""
            }
            if (document.getElementById(i + "," + x).innerHTML == document.getElementById(i1 + "," + x).innerHTML && document.getElementById(i + "," + x).innerHTML != "") {
              var inner = parseInt(document.getElementById(i + "," + x).innerHTML.replace("<center>","").replace("</center>",""))
              var inner2 = inner*2
              //console.log(inner2)
              document.getElementById(i + "," + x).innerHTML = "<center>"+inner2+"</center>"
              document.getElementById(i1 + "," + x).innerHTML = ""
            }
          }
        }
      }
      check()
      break;
  }
}

//key press
document.addEventListener('keydown', keydwn);
function keydwn(e){
    if (e.code == "ArrowUp") move("up")
    if(e.code == "ArrowDown") move("down")
    if(e.code == "ArrowLeft") move("left")
    if(e.code == "ArrowRight") move("right")
}
