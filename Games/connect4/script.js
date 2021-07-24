p = { red: "<center>&#x1f534;</center>", blue: "<center>&#x1f535;</center>" }
turn = "red"
done = false

var board = [
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
	["", "", "", "", "", "", ""],
]


function draw() {
	var table_str = ``
	for (i in board) {
		table_str += "<tr>"
		for (j in board[i]) {
			table_str += "<td id='" + j + "," + i + "'>" + board[i][j] + "</td>"
		}
		table_str += "</tr>"
	}
	//board[y][x]
	document.getElementById("table").innerHTML = table_str
	document.getElementById("turn").innerHTML = "Turn:\&nbsp" + p[turn]
}


function run(x) {
	if (!done) {
		ran = false
		for (y = 5; y >= 0; y--) {
			if (board[y][x] == "") {
				board[y][x] = p[turn]
				ran = true
				break;
			}
		}
		if (ran == true) {
			switch (turn) {
				case "red":
					turn = "blue";
					break;
				case "blue":
					turn = "red";
					break;
			}
		}
		draw()
		for (i in board) {
			for (j in board[i]) {

				var e = p.red
				if (board[i][j] == e) {
					//horizontal
					if (board[i][parseInt(j) + 1] == e && board[i][parseInt(j) + 2] == e && board[i][parseInt(j) + 3] == e) {
						done = true
						document.getElementById("turn").innerHTML = "Red has won!"
						document.getElementById("turn").style.color = "#F00"
					}
					//vertical
					if (i < 3) {
						if (board[parseInt(i) + 1][j] == e && board[parseInt(i) + 2][j] == e && board[parseInt(i) + 3][j] == e) {
							done = true
							document.getElementById("turn").innerHTML = "Red has won!"
							document.getElementById("turn").style.color = "#F00"
						}
					}
					//diagonal
					if (i < 3) {
						var condition;
						//tl-br
						condition = board[parseInt(i) + 1][parseInt(j) + 1] == e && board[parseInt(i) + 2][parseInt(j) + 2] == e && board[parseInt(i) + 3][parseInt(j) + 3] == e
						if (j < 4 && (condition)) {
							done = true
							document.getElementById("turn").innerHTML = "Red has won!"
							document.getElementById("turn").style.color = "#F00"
						}
						//tr-bl
						condition = board[parseInt(i) + 1][parseInt(j) - 1] == e && board[parseInt(i) + 2][parseInt(j) - 2] == e && board[parseInt(i) + 3][parseInt(j) - 3] == e
						if (j > 3 && (condition)) {
							done = true
							document.getElementById("turn").innerHTML = "Red has won!"
							document.getElementById("turn").style.color = "#F00"
						}
					}
				}

				var e = p.blue
				if (board[i][j] == e) {
					//horizontal
					if (board[i][parseInt(j) + 1] == e && board[i][parseInt(j) + 2] == e && board[i][parseInt(j) + 3] == e) {
						done = true
						document.getElementById("turn").innerHTML = "Blue has won!"
						document.getElementById("turn").style.color = "#0092d6"
					}
					//vertical
					if (i < 3) {
						if (board[parseInt(i) + 1][j] == e && board[parseInt(i) + 2][j] == e && board[parseInt(i) + 3][j] == e) {
							done = true
							document.getElementById("turn").innerHTML = "Blue has won!"
							document.getElementById("turn").style.color = "#0092d6"
						}
					}
					//diagonal
					if (i < 3) {
						var condition;
						//tl-br
						condition = board[parseInt(i) + 1][parseInt(j) + 1] == e && board[parseInt(i) + 2][parseInt(j) + 2] == e && board[parseInt(i) + 3][parseInt(j) + 3] == e
						if (j < 4 && (condition)) {
							done = true
							document.getElementById("turn").innerHTML = "Blue has won!"
							document.getElementById("turn").style.color = "#0092d6"
						}
						//tr-bl
						condition = board[parseInt(i) + 1][parseInt(j) - 1] == e && board[parseInt(i) + 2][parseInt(j) - 2] == e && board[parseInt(i) + 3][parseInt(j) - 3] == e
						if (j > 3 && (condition)) {
							done = true
							document.getElementById("turn").innerHTML = "Blue has won!"
							document.getElementById("turn").style.color = "#0092d6"
						}
					}
				}
			}
		}
	}
}
draw()


console.log("Hello!");