function formatDuration (n) {
    if (n==0) return "now"
    let [t,a,b]=[[],['year','day','hour','minute','second'],[31536000,86400,3600,60,1]]
    for (let i in a) {
      let m=Math.floor(n/b[i])
      if (m>0){
        t.push(String(m)+" "+a[i]+(m==1?"":"s"))
        n%=b[i]
      }
    }
    let e=t.pop()
    return (t.length>0?t.join(', ')+" and ":"")+e
  }