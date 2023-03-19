function multiply(a, b) {
    if (!(a.replace(/[-0\.]/g, '').length && b.replace(/[-0\.]/g, '').length)) return "0"
    let n = a[0] == '-' ^ b[0] == '-'
    if (a.includes('.')) a = a.replace(/0+$/, '')
    if (b.includes('.')) b = b.replace(/0+$/, '')
    let de = (a.indexOf('.') != -1 || b.indexOf('.') != -1) ?
        ((a.indexOf('.') > 0 ? a.length - a.indexOf('.') - 1 : 0) +
            (b.indexOf('.') > 0 ? b.length - b.indexOf('.') - 1 : 0)) : -1
    a = clean(a).replace('.', '').split('')
    b = clean(b).replace('.', '').split('')
    let s = []
    for (i in a) {
        let p = [0, ...b].map(e => e * a[i])
        let c = 0
        for (j = p.length - 1; j >= 0; j--) {
            p[j] += c
            c = Math.floor(p[j] / 10)
            p[j] %= 10
        }
        s[i] = "0".repeat(i) + p.join('') + "0".repeat(a.length - i - 1)
    }
    r = s.reduce((d, e) => o([d, e])).replace(/^0+/, '')
    if (de != -1) {
        r = "0".repeat(de) + r
        r = clean(r.slice(0, r.length - de) + "." + r.slice(r.length - de))
    }
    if (r[r.length - 1] == '.') r = r.substring(0, r.length - 1)
    if (r[0] == '.') r = '0' + r
    return r == '' | r == '0' ? '0' : n ? '-' + r : r
}
const clean = a => a.replace('-', '').replace(/^0+/, '').replace(a.includes('.') ? /0+$/ : 'p', '')
function o(c) {
    var b = new Array(c[0].length > c[1].length ? c[0].length + 1 : c[1].length + 1).fill(0)
    c = c.map(e => e.split("").map(Number))
    c.forEach(e => { while (e.length < b.length) e.unshift(0) });
    var a = 0
    for (var i = b.length - 1; i >= 0; --i) {
        b[i] = c[0][i] + c[1][i] + a
        a = Math.floor(b[i] / 10)
        b[i] %= 10
    }
    while (b[0] == 0) b.shift()
    return b.join("")
}