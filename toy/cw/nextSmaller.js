function nextSmaller(n) {
	const qsort=(u)=>{
		if(u.length<2) return u;
		var l=[[],[]]
		for (var i=1;i<u.length;i++) {
			if (u[i]>u[0]) l[0].push(u[i])
			else l[1].push(u[i])
		}
		return [...qsort(l[0]),u[0],...qsort(l[1])]
	}
  let digits=String(n).split("").map(Number)
	let len=digits.length-1
	var X=Infinity
	var a=digits[len]
	for (var i=len-1;i>=0;i--) {
		if (a<digits[i]) {
			X=i
			break
		}
		a=digits[i]
	}
	if (X==Infinity) return -1
	let r=[...digits]
	let l=r.splice(0,X+1).length
	let Y=-1
	for (var R in r) {
		if (r[R]<digits[X]&r[R]>(Y==-1?Y:r[Y])) Y=Number(R)
	}
	Y+=l
	r=[...digits].splice(X+1,digits.length)
	r.splice(Y-X-1,Y-X)
	let f=[...digits].splice(0,X)
	let m=[...f,
					digits[Y],
					...qsort([...r,digits[X]])
					]
	return m[0]==0?-1:Number(m.join(""))
}
