function sumOfDivided(lst) {
    const primef=(n)=>{const factors = [];let divisor=2;while (n>=2) {if(n % divisor == 0){factors.push(divisor);n/=divisor}else{divisor++}}return [...new Set(factors)]}
    const qsort=(u)=>{if(u.length<2) return u;var l=[[],[]];for (var i=1;i<u.length;i++) {if (u[i]>u[0]) l[0].push(u[i]);else l[1].push(u[i])}return [...qsort(l[1]),u[0],...qsort(l[0])]}
    let a=[]
    for (var i of lst) a=a.concat(primef(i)).concat(primef(-i))
    a=qsort([...new Set(a)]).map(e=>[e,0])
    for (var i in a) {
      for (var j of lst) {
        if (j%a[i][0]==0)a[i][1]+=j
      }
    }
    return a;
  }