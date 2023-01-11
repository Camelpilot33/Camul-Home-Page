String.prototype.replaceAt = function (index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
const parse = (x) => x[0] == "_" ? -parse(x.substring(1)) : parseFloat(x)
const parenth = (e) => {
    while (e.includes("(")) {
        let start = e.indexOf("("), end = -1, c = 0
        for (var i = start + 1; i < e.length; i++) {
            if (e[i] == "(") c++
            else if (e[i] == ")") {
                if (c == 0) end = i
                else c--
            } if (end != -1) break
        }
        e = e.substring(0, start) + calc(e.substring(start + 1, end)) + e.substring(end + 1)
    } return e
}
const neg = (e) => {
    if (e[0] == "-") e = e.replaceAt(0, "_")
    while (/[\+\-\/\*\(\_]-/g.exec(e)) {
        let x = /[\+\-\/\*\(\_]-/g.exec(e).index
        e = e.replaceAt(x + 1, "_")
    }
    return e
}
const dust = (e, re0, re1, d, re2, f,mod=false) => {
    if (mod)e = parenth("(" + e.replace(re1, ")" + d + "(").replace(re2, ")" + f + "(") + ")".replace(/\%/g, ")" + '%' + "(") + ")")
    else e = parenth("(" + e.replace(re1, ")" + d + "(").replace(re2, ")" + f + "(") + ")")
    e = neg(e)
    let s = e.split(re0)
    let r = e.match(re0)
    let sum = s[0]
    for (var i in r) {
        sum = calc(sum + r[i] + s[parse(i) + 1])
    }
    return sum
}
var calc = function (e) {
    let re1 = /[\+\-\/\*\%]/g
    e = e.replace(/ /g, "")
    e = neg(e)
    e = neg(parenth(e))
    if ((e.match(re1) || []).length == 0) return parse(e)
    if ((e.match(re1) || []).length == 1) {
        let a = e.split(re1).map(e => parse(e))
        let y = e.match(re1)[0]
        return y == "-" ? a[0] - a[1] : y == "+" ? a[0] + a[1] : y == "*" ? a[0] * a[1] : y == "/" ? a[0] / a[1] :y=='%'?a[0]%a[1]: null
    }
    if (e.includes("+") | e.includes("-")) return dust(e, /\+|-/g, /\+/g, "+", /\-/g, "-")
    return dust(e, /\*|\//g, /\*/g, "*", /\//g, "/",true)
}

class Interpreter {
    constructor(v={}) {
        this.vars = v;
    }
    static tokenize(program) {
        const regex = /\s*([-+*\/\%=\(\)]|[A-Za-z_][A-Za-z0-9_]*|[0-9]*\.?[0-9]+)\s*/g;
        return program.split(regex).filter(s => /\S/.test(s));
    }
    input(expr) {
      console.log(this.vars,expr)
        if (expr=='')return ''
        const tokens = Interpreter.tokenize(expr)
        if (tokens.includes('=')) {
            let p=tokens.join('').split('=')
            let HEHUFHUEFI=new Interpreter(this.vars)
            this.vars[p[0]]=HEHUFHUEFI.input(p[1])
            return HEHUFHUEFI.input(p[1])
        } else {
            for (let e of Object.keys(this.vars)) {
                while (~tokens.indexOf(e)) {
                    tokens[tokens.indexOf(e)]=this.vars[e]
                }
            }
            if ((tokens.join('').match(/[A-Za-z]/g)||[]).length>0){
                throw "error"
            }
            return calc(tokens.join(''))
        }
    }
}