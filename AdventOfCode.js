//Advent of Code 2021
//d1p1
a=Infinity
b=0
str=`<Input>`
str=str.split("\n")
for (var i in str) {
	str[i] = parseInt(str[i])
	if (str[i] > a) b++
	a=str[i]
}
console.log(b)
//d1p2
a=Infinity;
b=0;
str=`<Input>`
str=str.split("\n");
for (var i in str) {
	str[i] = parseInt(str[i]);
}
for (let i = 1; i < str.length-1; i++) {
	if (str[i]+str[i-1]+str[i+1]>a) b++;
	a=str[i]+str[i-1]+str[i+1];
}
console.log(str);
console.log(b);
