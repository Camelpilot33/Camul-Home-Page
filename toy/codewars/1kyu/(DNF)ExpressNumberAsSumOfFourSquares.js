function bigSqrt(value) {
    if (value < 2n) return value;
    function newtonIteration(n, x0) {
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }
    return newtonIteration(value, 1n);
}
function mod(n, m) {
    return ((n % m) + m) % m;
  }
function legendre(n){ //Boolean - returns if n can be represented by a sum of 3 squares
    while (!(n%4n)&n!=0n)n/=4n
    return !!mod(n-7n,8n)
}
function factor(n) {//return 0 if prime, else lowest factor
    // let j=2n
    // let rt=bigSqrt(n)
    // while(j<=rt) {
    //     if (!mod(n,j))return j
    //     j++
    // }
    // return 1
}
function foursquares(n) {//Bigint[4]

}


console.log(Math)