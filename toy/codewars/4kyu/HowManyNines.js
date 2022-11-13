function nines(n) {
    if (n < BigInt(10)) return n == 9 ? BigInt(1) : BigInt(0)    
    let str = String(n)
    let len = BigInt(str.length - 1)
    let head = BigInt(str[0])
    let tail = BigInt(str.slice(1))
    let recur = head == 9 ? tail + BigInt(1) : nines(tail)
    let f = n => n == 1 ? BigInt(1) : BigInt(10) ** (--n) + BigInt(9) * f(n)
    return head * f(len) + recur
}