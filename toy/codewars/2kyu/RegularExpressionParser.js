function parseRegExp(s) {
    //len 0 check

    return parser(s.split(''));
}
function parser(s) {
    console.log(s)
    //typeOf string
    let layer = 0
    let base = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') layer++
        else if (s[i] == ')') layer--
        else {
            if (layer != 0) continue
            base += s[i]
        }
    }
    if (base.length == 0) return parser(s.slice(1, s.length - 1))
    //associative check
    let q = base.indexOf('|')
    if (q != -1) return new Or(parser(s.slice(0, q)), parser(s.slice(q + 1, s.length)))
    if (base.replace(/[\*]/g,'').length==1) return h(base)

    console.log('err')
    return base
}
const h=base=>{
    //double star check
    let x=base.replace(/[\*]/g,'')=='.'?new Any():new Normal(base.replace(/[\*]/g,''))
    return base.includes('*')?new ZeroOrMore(x):x
}

console.log(parseRegExp("ab"))

function Normal(a) { this.char = a; return "new" }
function Any() { }
function ZeroOrMore(a) { this.char = a; return "new" }
function Or(a, b) { this.leftRegex = a; this.rightRegex = b; return "new" }
function Str(...a) { this.regexes = a; return "new" }
/*
 * symbols: ().*|, normals: A-Za-z
 * (a.*)|(bb)*
 *  =>  OR
 *    /   \
 *  str    *
 *  |  \    \
 * "a" *    str
 *      \    | \
 *     "b"  "b" "b"
 * 
 * OOP: 
 * 
 */