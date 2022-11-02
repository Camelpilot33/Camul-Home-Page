function solution(k){
	let m=[]
	for (var i=0;i<k.length;i++) {
		let t=[k[i],k[i]]
		while (k[i]+1==k[i+1]) {
			t[1]=k[i+1]
			i++
		}
		if (t[0]==t[1]) m.push(t[0])
		else if (t[1]-t[0]==1) {m.push(t[0]);m.push(t[1])}
		else m.push(`${t[0]}-${t[1]}`)
	}
	return m.join(',')
}
