function findNb(m) {
    var n=0
    var b=0
    while(m>b) {
      n++
      b+=(n*n*n)
    }
    return m-b==0?n:(-1);
}