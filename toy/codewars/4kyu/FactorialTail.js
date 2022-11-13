function factorize(n) {
    let i=2;
    let f={};
    while (n>1) {
      if (n%i==0) {
        n/=i;
        f[i]=f[i]==undefined?1:f[i]+1;
      } else i++;
    }
    return f;
  }
  
  function zeroes(base,n) {
    let factors=factorize(base);
    let x=[];
    for (let i=0;i<Object.keys(factors).length;i++) {
          let a=Object.keys(factors)[i];
      x[i]=0;
          for (let j=1;j<=Math.floor(Math.log(n)/Math.log(a));j++) {
              x[i]+=Math.floor(n/(a**j));
          }
          x[i]=Math.floor(x[i]/factors[a]);
    }
    return Math.min(...x);
  }