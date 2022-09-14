const f = (n) => {
  let res = 1;
  for (var i = 2; i <= n; i++) res = res * i;
  return n == 0 ? 1 : res
}
const nCr = (n, r) => n < r ? 0 : f(n) / (f(r) * f(n - r))

function expand(eq) {
	let p=eq.match(/[A-Za-z]/)[0]
	eq=eq.split(/[()^A-Za-z]/)
	p= {a:eq[1]==""?1:eq[1]=="-"?-1:parseInt(eq[1]),b:parseInt(eq[eq.length-3]),x:p,c:parseInt(eq[eq.length-1])}
	if (p.c==0)return "1"
	if (p.b==0)return ((p.a**p.c==1?"":p.a**p.c)+p.x+"^"+p.c).replace(/-1[A-Za-z]/g,"-"+p.x)
	let str=""
	for (var k=0;k<=p.c;k++) {
		let a=String((p.a**(p.c-k))*nCr(p.c,k)*(p.b**k))
		str+=[str.length==0||a[0]=="-"?"":"+",a=="1"&&(p.c-k)!=0?"":a,p.c-k==0?"":p.c-k==1?p.x:p.x+"^"+(p.c-k)].join('').replace(/-1[A-Za-z]/g,"-"+p.x)
	}
	return str
}
