function tribonacci(signature,n){
    var lst = signature
    for (var i=3;i<n;i++) {
      lst.push(lst[i-1]+lst[i-2]+lst[i-3])
    }
    var a=signature.slice(0, n);
    return n<=3?a:lst
  }