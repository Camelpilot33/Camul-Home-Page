function isPerfect(n) {
    for (var i=2,max=Math.sqrt(n),rs=0;i<=max;i++) if (n%i==0) rs+= i==n/i ? i : i+n/i; 
    return n!=1&&rs+1==n;
  }