function getMinBase (n) {
    if (n==3)return 2
    let x=3
    let d=(y,a,s=0)=>{
        while (y>0) {
            y--
            s+=a**(y)
        }
        return s
    }
    while (true) {
        let b=Math.floor(n**(1/(x-1)))
        if (d(x,b)==n) return b
        x++
        if (x>100) return n-1
    }
}
console.log(getMinBase(3))//ERR: sometimes solves for second lowest