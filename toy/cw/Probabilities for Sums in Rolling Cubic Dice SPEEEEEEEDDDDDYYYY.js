function rolldiceSumProb(m, n){
	let f=n=>n<0?-1:n==0?1:n*f(n-1)
	let c=(n,r)=>n<r?0:f(n)/(f(r)*f(n-r))
	let s=0
	for(let i=0;i<=Math.floor((m-n)/6); ++i) {
		s+=((-1)**i)*c(n,i)*c(m-(6*i)-1,n-1)
  }
	return s/(6**n)
}
