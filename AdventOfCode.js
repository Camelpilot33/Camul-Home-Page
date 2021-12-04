//Advent of Code 2021
//d1p1
a=Infinity;
b=0;
str=`<Input>`;
str=str.split("\n");
for (var i in str) {
	str[i] = parseInt(str[i]);
	if (str[i] > a) b++;
	a=str[i];
}
console.log(b);
//d1p2
a=Infinity;
b=0;
str=`<Input>`;
str=str.split("\n");
for (var i in str) {
	str[i] = parseInt(str[i]);
}
for (let i = 1; i < str.length-1; i++) {
	if (str[i]+str[i-1]+str[i+1]>a) b++;
	a=str[i]+str[i-1]+str[i+1];
}
console.log(b);
//d2p1
var x=0;
var y=0;
var str=`<input>`;
str=str.split("\n");
for (var i in str) {
	str[i]=str[i].split(" ")
	str[i][1]=parseInt(str[i][1]);
	switch (str[i][0]) {
		case "forward":
		x+=str[i][1];
		break;
		case "up":
		y-=str[i][1];
		break;
		case "down":
		y+=str[i][1];
		break;
	}
}
console.log(x*y);
//d2p2
var x=0;
var y=0;
var aim=0;
var str=`<input>`;
str=str.split("\n");
for (var i in str) {
	str[i]=str[i].split(" ")
	str[i][1]=parseInt(str[i][1]);
	switch (str[i][0]) {
		case "forward":
		x+=str[i][1];
		y+=str[i][1]*aim;
		break;
		case "up":
		aim-=str[i][1];
		break;
		case "down":
		aim+=str[i][1];
		break;
	}
}
console.log(x*y);
//d3p1
str=`<input>`
str=str.split("\n")
len=str[0].length
gamma=""
epsilon=""
for (let i=0;i<len;i++) {
	_0=0
	_1=0
	for (var j in str) {
		if (str[j][i]=="0") {
			_0++;
		} else {
			_1++;
		}
	}
	if (_0>_1) {
		gamma+="0";
		epsilon+="1";
	} else {
		gamma+="1";
		epsilon+="0";
	}
}
gamma=parseInt(gamma,2)
epsilon=parseInt(epsilon,2)
console.log(gamma*epsilon)
//d3p2
const e=`<input>`
str2=e.split("\n")
str1=e.split("\n")
len=str1[0].length
O2=""
CO2=""
for (let i=0;i<len;i++) {
	_0=0
	_1=0
	for (var j in str1) {
		if (str1[j][i]=="0") {
			_0++;
		} else {
			_1++;
		}
	}
	
	 if (_1>=_0) {
		for (j=0;j<str1.length;j++) {
			if (str1[j][i]=="0") {
				str1.splice(j,1)
				j--
			}
		}
	} else {
		for (j=0;j<str1.length;j++) {
			if (str1[j][i]=="1") {
				str1.splice(j,1)
				j--
			}
		}
	}
	if (str1.length>0) O2=str1[0]
}
for (let i=0;i<len;i++) {
	_0=0
	_1=0
	for (var j in str2) {
		if (str2[j][i]=="0") {
			_0++;
		} else {
			_1++;
		}
	}
	
	 if (_1<_0) {
		for (j=0;j<str2.length;j++) {
			if (str2[j][i]=="0") {
				str2.splice(j,1)
				j--
			}
		}
	} else {
		for (j=0;j<str2.length;j++) {
			if (str2[j][i]=="1") {
				str2.splice(j,1)
				j--
			}
		}
	}
	if (str2.length>0) CO2=str2[0]
}
console.log(parseInt(O2,2)*parseInt(CO2,2))
//d4p1
const input=`<input>`
nums=input.split("\n")[0]
boards=input.split("\n\n")
boards.shift()
function isBingo(board, index) {
	var numbers = nums.split(",")
	numbers.splice(index,numbers.length-index)
	board=board.split("\n")
	for (var i in board) {
		board[i]=board[i].split(" ")
		for (var j in board[i]) {
			if (board[i][j]=="") board[i].splice(j, 1);
		}
	}
	//rows
	for (var y in board) {
		bingo=true
		for (var x in board[y]) {
			if (!numbers.includes(board[y][x]))bingo=false
		}
		if (bingo) return bingo
	}
	//columns
	for (var y in board) {
		bingo=true
		for (var x in board[y]) {
			if (!numbers.includes(board[x][y]))bingo=false
		}
		if (bingo) return bingo
	}
	return false
}
running=true
e=0
f=0
for (k=0;k<nums.split(",").length;k++) {
	for (l=0;l<boards.length;l++) {
		if (isBingo(boards[l],k)) {
		e=l
		f=k
		running=false
		break
		}
	}
	if (!running) break
}
nums=nums.split(",")
nums.splice(f,nums.length-f)
board=boards[e]
board=board.split("\n")
sum=0
for (var i in board) {
	board[i]=board[i].split(" ")
	for (j=0;j<board[i].length;j++) {
		if (board[i][j]=="") board[i].splice(j, 1);
		if (nums.includes(board[i][j])) {
			board[i].splice(j,1);
			j--
		}
	}
	for (var j of board[i]) {
		sum += parseInt(j)
	}
}
console.log(sum*parseInt(nums[f-1]))
