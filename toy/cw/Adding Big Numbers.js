function add(a, b) {
  var c= new Array(a.length>b.length?a.length+1:b.length+1).fill(0)
  a=a.split("").map(Number)
  b=b.split("").map(Number)
  while (a.length<c.length) a.unshift(0)
  while (b.length<c.length) b.unshift(0)
  var carry=0
  for (var i=c.length-1;i>=0;i--) {
    c[i]=a[i]+b[i]+carry
    carry=Math.floor(c[i]/10)
    c[i]%=10
  }
  carry=0
  while(c[0]==0) c.shift()
  return c.join("")
}
