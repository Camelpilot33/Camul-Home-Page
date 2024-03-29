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
//d6p1
const input=`<input>`
const fish=input.split(",").map(element => parseInt(element))
function day(daycount) {
	for (d=0;d<daycount;d++) {
		for (i=0;i<fish.length;i++) {
			let newfish=[]
			if (fish[i]>0) {
				fish[i]--
			} else if (fish[i]==0) {
				newfish.push(9)
				fish[i]=6
			}
			for (var fishie of newfish) {
				fish.push(fishie)
			}
		}
	}
	return fish.length
}
console.log(day(80))
//d6p2 - realized that it can be accomplished by tracking a single array
const input = `<input>`.split(",").map(element => parseInt(element))
var fishies=new Array(9).fill(0)
for (var i of input) {
	fishies[i]++
}
for (var i=0;i<256;i++) {
	var fish0=fishies[0]
  for (var j=0;j<8;j++) fishies[j]=fishies[j+1]
	fishies[6]+=fish0
  fishies[8]=fish0
}
fishies=fishies.reduce((a, b) => a + b, 0)
console.log(fishies)
//d7p1
const input = ``.split(",").map(element => parseInt(element))
function median(values){
  values.sort(function(a,b){
    return a-b;
  });
  var half = Math.floor(values.length / 2);
  if (values.length % 2)
    return values[half];
  return (values[half - 1] + values[half]) / 2.0;
}
function fuel(values,value) {
	value=median(values)
	s=0
	for (i=0;i<values.length;i++) {
		s+=Math.abs(value-values[i])
	}
	return s
}
console.log(fuel(input))
//d7p2
const input = ``.split(",").map(element => parseInt(element))
function closest(values) {
	return Math.round(values.reduce((a, b) => a + b, 0)/values.length)
}
function fuel(values,value) {
	value=closest(values)
	s=[0,0,0]
	for (i=0;i<values.length;i++) {
		n=Math.abs((value+1)-values[i])//it is possible to loop through these
		s[0]+=(n*(n+1)/2)
		n=Math.abs((value)-values[i])
		s[1]+=(n*(n+1)/2)
		n=Math.abs((value-1)-values[i])
		s[2]+=(n*(n+1)/2)
	}
	return Math.min(...s)
}
console.log(fuel(input))
//d8p1
const input = `<input>`.split("\n").map(element=>element.split(" | ")[1]).map(element=>element.split(" "))
nums=[2,4,3,7]
s=0
for (var i of input) {
	for (var j of i) {
		if (nums.includes(j.length)) {
			s++
		}
	}
}
console.log(s)
//d8p2 - hardest one yet
const input = `<input>`.split("\n").map(element=>element.split(" | "))
const segments=['a','b','c','d','e','f','g']
const digitNumberMap = {
    abcefg: 0,
    cf: 1,
    acdeg: 2,
    acdfg: 3,
    bcdf: 4,
    abdfg: 5,
    abdefg: 6,
    acf: 7,
    abcdefg: 8,
    abcdfg: 9
};
unique=[2,4,3,7]
function solve(index) {
	const com=(input[index][0]+" "+input[index][1]).split(" ")
	const pattern1 = com.find(p => p.length === 2);
	const pattern4 = com.find(p => p.length === 4);
	const pattern7 = com.find(p => p.length === 3);
	var possible = {
    a: segments.filter(d => !pattern1.includes(d) && !pattern4.includes(d) && pattern7.includes(d)),
    b: segments.filter(d => !pattern1.includes(d) && pattern4.includes(d) && !pattern7.includes(d)),
    c: segments.filter(d => pattern1.includes(d) && pattern4.includes(d) && pattern7.includes(d)),
    d: segments.filter(d => !pattern1.includes(d) && pattern4.includes(d) && !pattern7.includes(d)),
    e: segments.filter(d => !pattern1.includes(d) && !pattern4.includes(d) && !pattern7.includes(d)),
    f: segments.filter(d => pattern1.includes(d) && pattern4.includes(d) && pattern7.includes(d)),
		g: segments.filter(d => !pattern1.includes(d) && !pattern4.includes(d) && !pattern7.includes(d)),
  };
	var possibilities=[]
	function bruteG(a, b, c, d, e, f) {
        for (const g of possible.g) {
            if (g !== a && g !== b && g !== c && g !== d && g !== e && g !== f) {
                const map = {};
                map[a] = 'a';
                map[b] = 'b';
                map[c] = 'c';
                map[d] = 'd';
                map[e] = 'e';
                map[f] = 'f';
                map[g] = 'g';
                possibilities.push(map);
            }
        }
    }
	function bruteF(a, b, c, d, e) {
        for (const f of possible.f) {
            if (f !== a && f !== b && f !== c && f !== d && f !== e) {
                bruteG(a, b, c, d, e, f);
            }
        }
    }
  function bruteE(a, b, c, d) {
        for (const e of possible.e) {
            if (e !== a && e !== b && e !== c && e !== d)
            bruteF(a, b, c, d, e);
        }
    }
  function bruteD(a, b, c) {
        for (const d of possible.d) {
            if (d !== a && d !== b && d !== c) {
                bruteE(a, b, c, d);
            }
        }
    }
  function bruteC(a, b) {
        for (const c of possible.c) {
            if (c !== a && c !== b) {
                bruteD(a, b, c);
            }
        }
    }
  function bruteB(a) {
        for (const b of possible.b) {
            if (b !== a) {
                bruteC(a, b);
            }
        }
    }
  function bruteA() {
        for (const a of possible.a) {
            bruteB(a);
        }
    }
	bruteA();
	var map={}
	for (var i of possibilities) {
		var working = true
		for (var j of com) {
			if (digitNumberMap[j.split("").map(d=>i[d]).sort().join("")] === undefined) {
				working=false
			}
		}
		if (working){
			map=i
		}
	}
	var sum=""
	for (var i of input[index][1].split(" ")){
		sum+=digitNumberMap[i.split("").map(d=>map[d]).sort().join("")]
	}
	return parseInt(sum)
}
total=0
for (var i in input) {
	total+=solve(i)
}
console.log(total)
//d9p1
let totalRisk = 0;
heightmap = `<input>`.split("\n").map(e=>e.split("").map(Number))
lines = heightmap.length;
cols = heightmap[0].length;
const getAdjacencyIndexes = ([currLine, currCol], lines, cols) => {
  const left = currCol - 1;
  const right = currCol + 1;
  const up = currLine - 1;
  const down = currLine + 1;
  let adjacencies = [];
  if (false==(left < 0)) adjacencies.push([currLine, left])
  if (false==(right >= cols)) adjacencies.push([currLine, right])
  if (false==(up < 0)) adjacencies.push([up, currCol])
  if (false==(down >= lines)) adjacencies.push([down, currCol])
  return adjacencies;
}
  for (let i = 0; i < lines; i++) {
    for (let j = 0; j < cols; j++) {
      let adjacencies = getAdjacencyIndexes([i, j], lines, cols);
      let isLowPoint = !adjacencies.some(([line, col]) => heightmap[i][j] >= heightmap[line][col]);
      if (isLowPoint) {
        totalRisk += (heightmap[i][j] + 1);
      }
    }
  }
  console.log(totalRisk);
//d9p2
const input=
`<input>`.split("\n")
e=input.map(e=>e.split("").map(Number))
str="<table cellspacing=0>"
for (var y in e) {
	str+="<tr>"
	for (var x in e[y]) str+="<td style='background-color:"+"hsl(0, 0%, "+(30+7*e[y][x])+"%)"+"'>"+""+"</td>"
  str+="</tr>"
}
str+="</table>"
document.write(str)
function flood(i, j, map) {
  if (map[i][j] === 1) return 0;
  map[i][j] = 1;
  let size = 1;
  if (i - 1 >= 0) size += flood(i - 1, j, map);
  if (i + 1 < map.length) size += flood(i + 1, j, map);
  if (j - 1 >= 0) size += flood(i, j - 1, map);
  if (j + 1 < map[i].length) size += flood(i, j + 1, map);
  return size;
}
const map = Array(input.length).fill(0).map((x, i) => Array(input[0].length).fill(0).map((x, j) => (input[i][j] === "9" ? 1 : 0)));
let basins = [];
for (let i = 0; i < input.length; i++) {
  const line = input[i];
  for (let j = 0; j < line.length; j++) {
    const size = flood(i, j, map);
    if (size > 0) {
      basins.push(size);
    }
  }
}
basins.sort((a, b) => b - a);
document.write(basins[0] * basins[1] * basins[2]);
//d10p1
const input=`<input>`.split("\n")
err=0
for (var i in input) {
	str=""
	console.log("r-"+i)
	for (var j in input[i]) {
		if (input[i][j]=="["||input[i][j]=="("||input[i][j]=="<"||input[i][j]=="{") {
			str+=input[i][j]
		} else if (input[i][j]=="]"||input[i][j]==")"||input[i][j]==">"||input[i][j]=="}") {
			if (str[str.length-1]==getOpposite(input[i][j])) {
				str=str.split("")
				str.pop()
				str=str.join('')
			} else {
				switch (input[i][j]) {
					case ")":
						err+=3;
						break;
					case "]":
						err+=57;
						break;
					case "}":
						err+=1197;
						break;
					case ">":
						err+=25137;
				}
				break;
			}
		}
	}
}
function getOpposite(a) {
	switch (a) {
					case ")":
						return "(";
					case "]":
						return "[";
					case "}":
						return "{";
					case ">":
						return "<";
				}
}
console.log(err)
//d10p2
const input=`<input>`.split("\n")
errors=[]
function getOpposite(a) {
	switch (a) {
					case ")":
						return "(";
					case "]":
						return "[";
					case "}":
						return "{";
					case ">":
						return "<";
				}
}
for (var i in input) {
	err=0
	str=""
	for (var j in input[i]) {
		if (input[i][j]=="["||input[i][j]=="("||input[i][j]=="<"||input[i][j]=="{") {
			str+=input[i][j]
		} else if (input[i][j]=="]"||input[i][j]==")"||input[i][j]==">"||input[i][j]=="}") {
			if (str[str.length-1]==getOpposite(input[i][j])) {
				str=str.substring(0, str.length - 1);
			} else {
				str=""
				break;
			}
		}
	}
	for (var j=str.length-1;j>=0;j--) {
		err*=5
		switch (str[j]) {
			case "(":
				err+=1;
				break;
			case "[":
				err+=2;
				break;
			case "{":
				err+=3;
				break;
			case "<":
				err+=4;
		}
	}
	if (err!=0)errors.push(err)
}
errors.sort((a, b) => b - a);
console.log(errors[(errors.length-1)/2])
//d11p1
var input=
`<input>`.split("\n").map(e=>e.split("").map(Number))
var total=0
function step(iter){
	for (var p=0;p<iter;p++) {
		for (var i in input) {
			for (var j in input[i]) {
				input[i][j]++
			}
		}
		var flashed=[]
		var flashes=flashesleft(input,flashed);
		for (var k=0;k<100;k++) {
			if(flashes) {
				for (var i in input) {
					for (var j in input[i]) {
						if (input[i][j]>9&&!flashed.includes(j+","+i)) {
							total++
							for (var l of getAdjacent(parseInt(j),parseInt(i),input)) {
								input[l[0]][l[1]]++
							}
							flashed.push(j+","+i)
						}
					}
				}
			}
			flashes=flashesleft(input,flashed)
		}
		for (var i in flashed) {
			input[flashed[i].split(",")[1]][flashed[i].split(",")[0]]=0
		}
	}
}
function flashesleft(input,flashed0) {
	var e=false;
	for (var i in input) {
		for (var j in input[i]) {
			if (input[i][j]>9&&!flashed0.includes(j+","+i))e=true
		}
	}
	return e
}
function getAdjacent(x,y,arr) {
	const left = x - 1;
  const right = x + 1;
  const up = y - 1;
  const down = y + 1;
  let adjacencies = [];
  if (left >= 0) adjacencies.push([y, left])
  if (right < arr[0].length) adjacencies.push([y, right])
  if (up >= 0) adjacencies.push([up, x])
  if (down < arr.length) adjacencies.push([down, x])
	if (left>=0&&up>=0) adjacencies.push([up, left])
	if (left>=0&&down<arr.length) adjacencies.push([down, left])
	if (right<arr[0].length&&up>=0) adjacencies.push([up, right])
	if (right<arr[0].length&&down<arr.length) adjacencies.push([down, right])
  return adjacencies;
}
step(100)
console.log(total)
document.write(input.map(e=>e.join('')).join("<br>").replace(/0/g,"<r>0</r>"))
//d11p2
document.write('<p id="e"></p>')
var input=
`4764745784
4643457176
8322628477
7617152546
6137518165
1556723176
2187861886
2553422625
4817584638
3754285662`.split("\n").map(e=>e.split("").map(Number))
var total=0
function step(iter){
	for (var p=0;p<iter;p++) {
		for (var i in input) {
			for (var j in input[i]) {
				input[i][j]++
			}
		}
		var flashed=[]
		var flashes=flashesleft(input,flashed);
		for (var k=0;k<100;k++) {
			if(flashes) {
				for (var i in input) {
					for (var j in input[i]) {
						if (input[i][j]>9&&!flashed.includes(j+","+i)) {
							total++
							for (var l of getAdjacent(parseInt(j),parseInt(i),input)) {
								input[l[0]][l[1]]++
							}
							flashed.push(j+","+i)
						}
					}
				}
			}
			flashes=flashesleft(input,flashed)
		}
		for (var i in flashed) {
			input[flashed[i].split(",")[1]][flashed[i].split(",")[0]]=0
		}
	}
}
function flashesleft(input,flashed0) {
	var e=false;
	for (var i in input) {
		for (var j in input[i]) {
			if (input[i][j]>9&&!flashed0.includes(j+","+i))e=true
		}
	}
	return e
}
function getAdjacent(x,y,arr) {
	const left = x - 1;
  const right = x + 1;
  const up = y - 1;
  const down = y + 1;
  let adjacencies = [];
  if (left >= 0) adjacencies.push([y, left])
  if (right < arr[0].length) adjacencies.push([y, right])
  if (up >= 0) adjacencies.push([up, x])
  if (down < arr.length) adjacencies.push([down, x])
	if (left>=0&&up>=0) adjacencies.push([up, left])
	if (left>=0&&down<arr.length) adjacencies.push([down, left])
	if (right<arr[0].length&&up>=0) adjacencies.push([up, right])
	if (right<arr[0].length&&down<arr.length) adjacencies.push([down, right])
  return adjacencies;
}
var t=0
var interval = setInterval(function(){
	step(1)
	if (input.map(e=>e.join('')).join('')=="0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000") {
		clearInterval(interval);
		interval=null;
	}
	t++
	document.getElementById("e").innerHTML = input.map(e=>e.join('')).join("<br>").replace(/0/g,"<r style='color:#00ff00'>0</r>")+"<br>"+t
},1/*speed in ms*/)
//d12p1
const input=`<input>`.split('\n').map(e=>e.split("-"))
var connections={}
const isUpperCased = string => string.toUpperCase() == string;
for (var i in input) {
	if (Object.keys(connections).indexOf(input[i][0]) == -1) connections[input[i][0]]=[]
	if (Object.keys(connections).indexOf(input[i][1]) == -1) connections[input[i][1]]=[]
}
for (var i in input) {
	connections[input[i][0]].push(input[i][1])
	connections[input[i][1]].push(input[i][0])
}
var paths=[]
var toExplore=[['start']]
while (toExplore.length > 0) {
    const currPath = toExplore.pop();
    const currLastPlace = currPath.at(-1);
    if (currLastPlace == 'end') {
        paths.push(currPath);
        continue;
    }
    connections[currLastPlace].forEach(neighbour => {
        if (neighbour == 'start')
            return;
        if (!isUpperCased(neighbour) && currPath.includes(neighbour))
            return;
        toExplore.push([...currPath, neighbour]);
    });
}
console.log(paths.length)
//d12p2 - slow
const input=`<input>`.split('\n').map(e=>e.split("-"))
var connections={}
const isUpperCased = string => string.toUpperCase() == string;
for (var i in input) {
	if (Object.keys(connections).indexOf(input[i][0]) == -1) connections[input[i][0]]=[]
	if (Object.keys(connections).indexOf(input[i][1]) == -1) connections[input[i][1]]=[]
}
for (var i in input) {
	connections[input[i][0]].push(input[i][1])
	connections[input[i][1]].push(input[i][0])
}
function isValid(path) {
    let howMantDuplicates = 0;
    const sortedPath = path.filter(a => !isUpperCased(a) && a != 'start' && a != 'end').sort();
    if (sortedPath.length <= 2)
        return true;
    for (let i = 1; i < sortedPath.length; i++) {
        if (sortedPath[i - 1] == sortedPath[i])
            howMantDuplicates++;
    }
    return howMantDuplicates <= 1
}
var paths=[]
var toExplore=[['start']]
while (toExplore.length > 0) {
    const currPath = toExplore.pop();
    const currLastPlace = currPath.at(-1);
    if (currLastPlace == 'end') {
        paths.push(currPath);
        continue;
    }
    connections[currLastPlace].forEach(neighbour => {
        if (neighbour == 'start') return;
				var possiblePath = [...currPath, neighbour]
        if (isValid(possiblePath)) toExplore.push([...currPath, neighbour]);
    });
}
console.log(paths.length)
//d13p1
const input=`<input>`.split("\n\n")
var points=input[0].split("\n").map(e=>e.split(",").map(Number))
const folds=input[1].split("\n").map(e=>e.split(" ")[2].split("="))
function fold(axis,length) {
	length=parseInt(length)
	if (axis=="x") {
  	for (var i=0;i<points.length;i++) {
    	if (points[i][0]>length) {
      	points[i][0]=2*length-points[i][0]
      }
    }
  } else if (axis=="y") {
  	for (var i=0;i<points.length;i++) {
    	if (points[i][1]>length) {
      	points[i][1]=2*length-points[i][1]
      }
    }
  }
  return points
}
fold(folds[0][0],folds[0][1])
var total=0
var used=[]
for (var i in points){
	var push=true
	for (var j in used) {
	    if (points[i][0]==used[j][0]&&points[i][1]==used[j][1]) push=false
	}
  if (push) {
  	total++
    used.push(points[i])
  }
}
console.log(total)
//day13p2
const input=`<input>`.split("\n\n")
var points=input[0].split("\n").map(e=>e.split(",").map(Number))
const folds=input[1].split("\n").map(e=>e.split(" ")[2].split("="))
function fold(axis,length) {
	length=parseInt(length)
	if (axis=="x") {
  	for (var i=0;i<points.length;i++) {
    	if (points[i][0]>length) {
      	points[i][0]=2*length-points[i][0]
      }
    }
  } else if (axis=="y") {
  	for (var i=0;i<points.length;i++) {
    	if (points[i][1]>length) {
      	points[i][1]=2*length-points[i][1]
      }
    }
  }
  return points
}
for (var i in folds) {
	fold(folds[i][0],folds[i][1])
}
maxX=0
maxY=0
for (var i in points) {
	if (points[i][0]>maxX)maxX=points[i][0]+1
	if (points[i][1]>maxY)maxY=points[i][1]+1
}
var board=[...new Array(maxY)].map(() => new Array(maxX).fill(0));
for (var i in points) {
	board[points[i][1]][points[i][0]] = 1
}
document.write(board.map(e=>e.join('').replace(/1/g,"<r style='background-color:red;color:red'>---</r>").replace(/0/g,"<r style='background-color:black;color:black'>---</r>")).join("<br>"))
console.log("done")
//d14p1
const input=`<input>`.split("\n\n")
var substance=input[0]
const instruction_arr=input[1].split("\n").map(e=>e.split(" -> "))
var instructions={}
for (var i in instruction_arr) {
	instructions[instruction_arr[i][0]]=instruction_arr[i][1]
}
function step(steps) {
	for (var index=0;index<steps;index++) {
  	out=substance[0]
  	for (var i=0;i<substance.length-1;i++) {
    	out+=instructions[substance[i]+substance[i+1]]+substance[i+1]
    }
    substance=out
  }
  return out
}
step(10)
var counter = {};
var maxKey = '';
var minKey = '';
for(var i = 0; i < substance.length; i++)
{
    var key = substance[i];
    if(!counter[key]){
     counter[key] = 0;
    }
    counter[key]++;
    if(maxKey == '' || counter[key] > counter[maxKey]){
        maxKey = key;
    }
		if(minKey == '' || counter[key] < counter[minKey]){
        minKey = key;
    }
}
console.log(counter[maxKey]-counter[minKey]);
//d14p2
const input=`<input>`.split("\n\n")
var substance=input[0]
const instruction_arr=input[1].split("\n").map(e=>e.split(" -> "))
var instructions={}
for (var i in instruction_arr) {
	instructions[instruction_arr[i][0]]=instruction_arr[i][1]
}
pairs={}
Object.keys(instructions).forEach(i=>pairs[i]=0)
for (var i=0;i<substance.length-1;i++){
	pairs[substance[i]+substance[i+1]] =1
}
for (var index=0;index<40;index++) {
	newpairs={}
	Object.keys(instructions).forEach(e=>newpairs[e]=0)
	for (var i of Object.keys(pairs)) {
		if (Object.keys(instructions).indexOf(i)>=0) {
			//console.log(pairs[i],instructions[i],i,i[0]+instructions[i],instructions[i]+i[1])
			newpairs[i[0]+instructions[i]]+=pairs[i]
			newpairs[instructions[i]+i[1]]+=pairs[i]
		} else {
			newpairs[i] = pairs[i]
		}
	}
	pairs=newpairs
}
var max=0
var min=Infinity
chars={}
for (var pair of Object.keys(pairs)) {
	if (!(chars[pair[0]]>=0))chars[pair[0]]=0
	chars[pair[0]]+=pairs[pair]
}
chars[substance[substance.length-1]]++
for (var c of Object.keys(chars)) {
	if (chars[c]>max)max=chars[c]
	if (chars[c]<min)min=chars[c]
}
console.log(max-min)
//d15p1
const grid = `<input>`.split("\n").map(e=>e.split("").map(Number))
const coordsToStr = (x, y) => x+","+y
const coordsToArr = str => str.split(',').map(x => parseInt(x));
const MAX = grid.reduce((total, line) => total + line.reduce((a, b) => a + b, 0), 0)
const endX = grid[0].length - 1;
const endY = grid.length - 1;
const nodes = {};
function isValid([x,y]) {
	return x >= 0 && x <= endX && y >= 0 && y <= endY;
}
const visited = new Set();
const queue = new Set();
let currentNode = [0, 0];
grid.forEach((line, y) => {
    line.forEach((cost, x) => {
        nodes[coordsToStr(x, y)] = {
            cost,
            distance: MAX
        };
        queue.add(coordsToStr(x, y))
    });
});
function updateDistance([x, y], curDistance) {
    if (isValid([x, y])) {
        const coordStr = coordsToStr(x, y);

        if (coordStr in nodes && !visited.has(coordStr)) {
            nodes[coordStr].distance = Math.min(nodes[coordStr].distance, curDistance + nodes[coordStr].cost);
        }
    }
}
function getShortest() {
    var shortest = {
        coords: [0, 0],
        distance: Infinity
    };

    Array.from(queue).forEach(coords => {
        if (nodes[coords].distance < shortest.distance) {
            shortest.distance = nodes[coords].distance;
            shortest.coords = coordsToArr(coords);
        }
    });

    return shortest.coords;
}
nodes[coordsToStr(0, 0)].distance = 0;
while (queue.size > 0 && queue.has(coordsToStr(endX, endY))) {
    const coordStr = coordsToStr(currentNode[0], currentNode[1]);
    const curDistance = nodes[coordStr].distance;
    visited.add(coordStr);
    queue.delete(coordStr);
    updateDistance([currentNode[0], currentNode[1] - 1], curDistance); // up
    updateDistance([currentNode[0] + 1, currentNode[1]], curDistance); // right
    updateDistance([currentNode[0], currentNode[1] + 1], curDistance); // down
    updateDistance([currentNode[0] - 1, currentNode[1]], curDistance); // left

    currentNode = getShortest();
}
console.log(nodes[coordsToStr(endX,endY)].distance)
//d15p2 - slow (~10s,remove console log progress to speed up)
const grid = `<input>`.split("\n").map(e=>e.split("").map(Number))
const coordsToStr = (x, y) => x+","+y;
const coordsToArr = str => str.split(',').map(x => parseInt(x));
const isValid = ([ x, y ]) => x >= 0 && x <= endX && y >= 0 && y <= endY;
const MAX = grid.reduce((total, line) => total + line.reduce((acc, cur) => acc + cur, 0), 0)
const endX = grid[0].length * 5 - 1;
const endY = grid.length * 5 - 1;
const nodes = {};
const visited = new Set();
const queue = new Set();
const notInfinite = new Set();
let currentNode = [0, 0];

for (let i = 0; i < 5; i++) {
    grid.forEach((line, y) => {
        const realY = i * grid.length + y;

        for (let j = 0; j < 5; j++) {
            line.forEach((cost, x) => {
                const realX = j * grid[y].length + x;
                let realCost = cost + i + j;

                if (realCost > 9) {
                    realCost = realCost % 9;
                }

                nodes[coordsToStr(realX, realY)] = {
                    cost: realCost,
                    distance: MAX
                };
                queue.add(coordsToStr(realX, realY));
            });
        }
    });
}

nodes[coordsToStr(0, 0)].distance = 0;
notInfinite.add(coordsToStr(0, 0));

const updateDistance = ([x, y], curDistance) => {
    if (isValid([x, y])) {
        const coordStr = coordsToStr(x, y);

        if (coordStr in nodes && !visited.has(coordStr)) {
            nodes[coordStr].distance = Math.min(nodes[coordStr].distance, curDistance + nodes[coordStr].cost);

            if (nodes[coordStr].distance < MAX) {
                notInfinite.add(coordStr);
            }
        }
    }
}

let shortestPath = Infinity;

const getShortest  = () => {
    const shortest = {
        coords: [0, 0],
        distance: Infinity
    };

    Array.from(notInfinite).forEach(coords => {
        if (nodes[coords].distance < shortest.distance) {
            shortest.distance = nodes[coords].distance;
            shortest.coords = coordsToArr(coords);
        }
    });

    shortestPath = shortest.distance;

    return shortest.coords;
}
var time=0
while (queue.size > 0 && queue.has(coordsToStr(endX, endY))) {
    const coordStr = coordsToStr(currentNode[0], currentNode[1]);
    const curDistance = nodes[coordStr].distance;
    visited.add(coordStr);
    queue.delete(coordStr);
    notInfinite.delete(coordStr);
    updateDistance([currentNode[0], currentNode[1] - 1], curDistance); // up
    updateDistance([currentNode[0] + 1, currentNode[1]], curDistance); // right
    updateDistance([currentNode[0], currentNode[1] + 1], curDistance); // down
    updateDistance([currentNode[0] - 1, currentNode[1]], curDistance); // left

    currentNode = getShortest();
		time++
		if (time%1000==0)console.log(`Remaining nodes: ${queue.size}. Currently shortest path: ${shortestPath}`);
}
console.log(nodes[coordsToStr(endX, endY)])
//d16p1
const inputString=`<input>`
const hexToBinString = `0 = 0000
1 = 0001
2 = 0010
3 = 0011
4 = 0100
5 = 0101
6 = 0110
7 = 0111
8 = 1000
9 = 1001
A = 1010
B = 1011
C = 1100
D = 1101
E = 1110
F = 1111`;
const hexToBin = {};
hexToBinString.split('\n').map(a => a.split(' = ')).forEach(b => hexToBin[b[0]] = b[1]);
const inputBinary = inputString.split('').map(a => hexToBin[a].split('')).flat();
const packetFinder = (arr) => {
    let packetArray = [];
    if (arr.slice(3, 6).join('') == '100') {
        packetArray = packetArray.concat(arr.slice(0, 6));
        let flag = false;
        while (flag == false) {
            let chunk = arr.slice(packetArray.length, packetArray.length + 5);
            packetArray = packetArray.concat(chunk);
            flag = chunk[0] == '0' ? true : false;
        }
    } else {
        packetArray = packetArray.concat(arr.slice(0, 7));       
        if (packetArray[6] == '0') {
            let bitLength = parseInt(arr.slice(7, 22).join(''), 2);
            packetArray = packetArray.concat(arr.slice(7, 22));
            let newArr = arr.slice(22, 22 + bitLength);
            while (newArr.length > 0) {
                let subIter = packetFinder(newArr);
                let subPacket = subIter['packet'];
                packetArray.push(subPacket);
                newArr = subIter['newArray'];
            }
        } else {
            let subNum = parseInt(arr.slice(7, 18).join(''), 2);
            packetArray = packetArray.concat(arr.slice(7, 18));
            let subset = arr.slice(packetArray.flat(100).length);
						//console.log(packetArray.join(''))
            for (let i = 0; i < subNum; i++) {
                let iteration = packetFinder(subset);
                packetArray.push(iteration['packet']);
                subset = iteration['newArray'];
            }
						//console.log(packetArray,arr)
            
        }
    }
    return {'packet': packetArray, 'newArray': arr.slice(packetArray.flat(100).length)};
}
const packetFindIter = (arr) => {
    let totalPacketArray = [];
    while (arr.length > 0) {
        let iteration = packetFinder(arr);
        arr = iteration['newArray'];
        let newPacketArray = iteration['packet'];
        while (newPacketArray.flat().length % 4 != 0) {
            newPacketArray.push(arr.shift());
        }
        totalPacketArray.push(newPacketArray);
    }
    return totalPacketArray;
}
const inputArray = packetFindIter(inputBinary);
const versionCounter = (arr) => {
    let result = 0;
    for (var item of arr) {
        if (typeof(item) == 'object' && item.length > 0) {
            let a = item.slice(0, 3);
            let count = parseInt(a.join(''), 2);
            let sub = versionCounter(item);
            result += (count + sub);

        }
    }
    return result;
}
console.log(versionCounter(inputArray));
//d17p1
const y=Math.abs(Math.min(...`<input>`.split(", ")[1].slice(2).split("..").map(Number)))
console.log(Math.floor(y*(y-1)/2))
//d17p2
const input=`<input>`.split(", ")
const ymin=Math.min(...input[1].slice(2).split("..").map(Number))
const ymax=Math.max(...input[1].slice(2).split("..").map(Number))
const xmin=Math.min(...input[0].slice(15).split("..").map(Number))
const xmax=Math.max(...input[0].slice(15).split("..").map(Number))
var dxmin=0
const checkx=(x=>{return xmin <= x&&x <= xmax})
const checky=(y=>{return ymin <= y&&y <= ymax})
while(dxmin*(dxmin+1)/2<=xmin) {
	dxmin++
}
var validx=[]
for (var dx=dxmin;dx<xmax+1;dx++) {
	var step=0
	var x=0
	var xv=dx
	var valid2=new Set()
	while (step<2*Math.abs(ymin)+2&&x<=xmax) {
  	x += xv
  	xv = Math.max(xv-1, 0)
  	step += 1
  	if (checkx(x)) {
			valid2.add(step)
		}
	}
	validx.push(valid2)
}
var validy=[]
for (var dy=ymin;dy<-ymin+1;dy++) {
	var step=0
	var y=0
	var yv=dy
	var valid2=new Set()
	while (y>=ymin) {
  	y += yv
    yv -= 1
    step += 1
  	if (checky(y)) {
			valid2.add(step)
		}
	}
	validy.push(valid2)
}
count=0
for (var i of validx) {
	for (var j of validy) {
		if ([...i].filter(e => j.has(e)).length>0) count++
	}
}
console.log(count)
//d21p1
const input=`<input>`.split("\n").map(e=>e[e.length-1]).map(Number)
var p1=[input[0],0]
var p2=[input[1],0]
var die=0
var rolls=0
function turn(p) {
		if (p) {
		for (i=0;i<3;i++) {
			p1[0]+=die%100+1
			die++
		}
		p1[0]=(p1[0]-1)%10+1
		p1[1]+=p1[0]
		} else {
		for (i=0;i<3;i++) {
			p2[0]+=die%100+1
			die++
		}
		p2[0]=(p2[0]-1)%10+1
		p2[1]+=p2[0]
		}
}
for (var k=0;k<200;k++) {
	turn(true)
	if (p1[1]>=1000) break
	turn(false)
	if (p2[1]>=1000) break
}
console.log(die*Math.min(p1[1],p2[1]))
//d25p1
var input = `<input>`.replace(/\./g,"0").replace(/>/g,"1").replace(/v/g,"2")
const xlen = input.split("\n")[0].length
const ylen = input.split("\n").length
function step() {
	var newmap=[...new Array(ylen)].map(()=>(new Array(xlen).fill("0")))
	var map=input.split("\n")
	for (var y=0;y<ylen;y++) {
		for (var x=0;x<xlen;x++) {
			if (map[y][x]=="1") {
				if (map[y][(x+1)%xlen]=="0") {
					newmap[y][(x+1)%xlen] = "1"
				} else {
					newmap[y][x] = "1"
				}
			}
		}
	}
	for (var y=0;y<ylen;y++) {
		for (var x=0;x<xlen;x++) {
			if (map[y][x]=="2") {
				if (newmap[(y+1)%ylen][x]!="1" &&map[(y+1)%ylen][x]!="2") {
					newmap[(y+1)%ylen][x] = "2"
				} else {
					newmap[y][x] = "2"
				}
			}
		}
	}
	return newmap.map(e=>e.join('')).join("\n")
}
var save=""
for (var i=0;i<Infinity;i++) {
	input=step()
	if (input==save) {
		console.log(i+1)
		break
	}
	save=input
}
