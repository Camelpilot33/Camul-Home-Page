const f = (n) => {
    let res = 1;
    for (var i = 2; i <= n; i++) res = res * i;
    return n == 0 ? 1 : res
  }
  const nCr = (n, r) => n < r ? 0 : f(n) / (f(r) * f(n - r))
  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
  
  
  const c = (z) => {
    let n = 0
    let t = 1
    for (var i of Object.keys(z)) n += z[i]
    for (i = 0; i < alphabet.length; i++) {
      t *= nCr(n, z[alphabet[i]])
      n -= z[alphabet[i]]
      z[alphabet[i]] = 0
    }
    return t
  }
  
  function listPosition(w) {
    if (w.length == 1) return 1
    let first = w[0]
    let x = w.substring(1)
    let indx = {}
    for (var i of alphabet) indx[i] = x.split(i).length - 1
    let y = alphabet.indexOf(first)
    let z = []
    for (i = y - 1; i >= 0; i--)
      if (x.includes(alphabet[i])) z.push(alphabet[i])
    let cb = 0
    for (i of z) {
      let l = {
        ...indx
      }
      l[i]--
      l[first]++
      cb += c(l)
    }
    return cb + listPosition(x)
  }