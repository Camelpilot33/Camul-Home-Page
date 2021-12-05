//Advent of Code 2021
//d1p1
a=Infinity;
b=0;
str=`<input>`;
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
str=`<input>`;
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
//d4p2
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
done=[]
for (k=0;k<nums.split(",").length;k++) {
	for (l=0;l<boards.length;l++) {
		if (isBingo(boards[l],k) && !done.includes(l)) {
		done.push(l)
		e=l
		f=k
		}
	}
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
console.log(sum*parseInt(nums[f-1]),e)
//d5p1
input=`<input>`
vents=input.split('\n')
board=""
var maxX=0,maxY=0
for (var i in vents) {
	vents[i] = vents[i].split(" -> ")
	for (var j in vents[i]) vents[i][j] = vents[i][j].split(",")
}
for (i=0;i<vents.length;i++) {
	if (vents[i][0][0]!=vents[i][1][0]&&vents[i][0][1]!=vents[i][1][1]) {
		vents.splice(i,1);
		i--
	}
}
for (var i in vents) {
	if (parseInt(vents[i][0][0])>maxX) maxX=parseInt(vents[i][0][0])
	if (parseInt(vents[i][1][0])>maxX) maxX=parseInt(vents[i][1][0])
	if (parseInt(vents[i][0][1])>maxY) maxY=parseInt(vents[i][0][1])
	if (parseInt(vents[i][1][1])>maxY) maxY=parseInt(vents[i][1][1])
}
for (x=0;x<maxY+1;x++) {
	for (y=0;y<maxX+1;y++) {
		board+="0"
	}
	if (x<maxX)board+="<n>"
}
board=board.split("<n>")
for (var i in board) {
	board[i]=board[i].split("")
}
function drawLine(index) {
	pts=[]
	x0=parseInt(vents[index][0][0])
	x1=parseInt(vents[index][1][0])
	y0=parseInt(vents[index][0][1])
	y1=parseInt(vents[index][1][1])
	//x0=x1 case ["0,9", "5,9"]
	if (x0==x1) {
		if (y0>y1) {
			for (let j=y1;j<=y0;j++){
				pts.push(x0+","+j)
			}
		} else if (y0==y1) pts.push(x0+","+y0) 
		{
			for (let j=y0;j<=y1;j++){
				pts.push(x0+","+j)
			}
		}
	} else if (y0==y1) {
		if (x0>x1) {
			for (let j=x1;j<=x0;j++){
				pts.push(j+","+y0)
			}
		} else {
			for (let j=x0;j<=x1;j++){
				pts.push(j+","+y0)
			}
		}
	}
	for (var k of pts) {
		board[parseInt(k.split(",")[1])][parseInt(k.split(",")[0])]=parseInt(board[parseInt(k.split(",")[1])][parseInt(k.split(",")[0])])+1
	}
}
for (var i in vents) {
	drawLine(i)
}
e=0
for (var x in board) {
	for (var y in board[x]) {
		document.write(board[x][y])
		if (board[x][y]>=2)e++
	}
	document.write("<br>")
}
console.log(e)
//d5p2
const input = `<input>`
const inputArray = input.split('\n')
                        .map(element => element.split(' -> '))
                        .map(array => array.map(element => element.split(',').map(string => +string)));

const oceanFloor = [...new Array(1000)].map(() => new Array(1000).fill(0));

const drawLines = (lines, floor) => lines.forEach(([[x1, y1], [x2, y2]]) => {
  if (y1 === y2) {
    const [start, end] = [x1, x2].sort((a, b) => a - b);
    for (let i = start; i <= end; i++) {
      floor[y1][i]++;
    }
  } else if (x1 === x2) {
    const [start, end] = [y1, y2].sort((a, b) => a - b);
    for (let i = start; i <= end; i++) {
      floor[i][x1]++;
    }
  } else { // Part 2
    for (let i = 0; i <= Math.abs(x1 - x2); i++) {
      const x = x1 > x2 ? x1 - i : x1 + i;
      const y = y1 > y2 ? y1 - i : y1 + i;
      floor[y][x]++;
    }
  }
});

drawLines(inputArray, oceanFloor);

const getPoints = floor => floor.reduce((accu, row) => accu + row.filter(element => element > 1).length, 0);

const result = getPoints(oceanFloor);
console.log(result);
