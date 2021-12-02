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
