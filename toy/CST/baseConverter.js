const conv=(a,b,c)=>{
	let n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	a=a.split("").map(e=>e.toUpperCase()).join("")
	let x=0,p=0
	while (a.length>0) {
		x+=n.indexOf(a[a.length-1])*(b**p)
		a=a.substring(0,a.length-1)
		p++
	}
	let h=""
	while (x>0) {
        h+=n[String(x%c)]
		x=(x-(x%c))/c
	}
	return h.split('').reverse().join('')
}
