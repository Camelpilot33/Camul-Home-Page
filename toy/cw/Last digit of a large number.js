var lastDigit = function(a, b){
	var o={
		0:[0],
		1:[1],
		2:[2,4,8,6],
		3:[3,9,7,1],
		4:[4,6],
		5:[5],
		6:[6],
		7:[7,9,3,1],
		8:[8,4,2,6],
		9:[9,1],
	}
  if (b=="0")return 1
	a=Number(a[a.length-1])
	if (o[a].length==1) return a
	b=b>9?b[b.length-2]+b[b.length-1]:b
	let c=(b%o[a].length)-1==-1?o[a].length-1:(b%o[a].length)-1
	return o[a][c]
}
