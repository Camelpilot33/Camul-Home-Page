var lastDigit = function(a, b){
	const f=(a,b=1)=>Number(String(a)[String(a).length-b])
  if (b=="0")return 1
	a=f(a)
	let p=[a]
	let r=2
	while (f(a**r)!=a){p.push(f(a**r));r++}
	let l=p.length
	b=b>9?String(f(b,2))+f(b):b
	let c=(b%l)-1==-1?l-1:(b%l)-1
	return p[c]
}
