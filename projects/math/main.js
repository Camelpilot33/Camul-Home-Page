//const AST = e => ast(tokenize(expression));
class AST {
    constructor (token) {
        this.tkn = token;
        this.l = null;
        this.r = null;
    }
    left(a) {
        this.l = a;
    }
    right(a) {
        this.r = a;
    }
}
var rules = [
    {
        key: "sin|cos|tan|cot|ln|sqrt|asin|acos|atan",
        data: {
            type: "func",
            args: 1,
            precedence: 4
        }
    },
    {
        key: "e|i|pi",
        data: {
            type: "const"
        }
    },
    {
        key: "[\\^]",
        data: {
            type: "op",
            args: 2,
            precedence: 3
        }
    },
    {
        key: "[\\*\\/]",
        data: {
            type: "op",
            args: 2,
            precedence: 2
        }
    },
    {
        key: "[\\+\\-]",
        data: {
            type: "op",
            args: 2,
            precedence: 1
        }
    },
    { key: "[(\\[]", data: { type: "left" } },
    { key: "[)\\]]", data: { type: "right" } },
    { key: "[0-9.,]+", data: { type: "num" } },
    { key: "[a-zA-Z]", data: { type: "var" } }
];
function tokenize(expression) {
    let exprs = [expression.replace(/ /g, '')];
    let output = exprs;
    for (r in rules) {
        output = output.map(a => {
            if (typeof a == "object") return a;
            let key = new RegExp(rules[r].key, 'g');
            const split = a.split(key);
            let match = (a.match(key) || []).map(e => new Object({ token: e, ...rules[r].data }));
            let combine = [split[0]];
            for (i = 0; i < match.length; i++) {
                combine.push(match[i], split[i + 1]);
            }
            return combine;
        }).flat();
    }
    output = output.filter(x => typeof x != "string");

    return output;
}


const toast = tokens => { //implementation of shunting-yard algo
    let ops = [];
    let nodes = [];
    for (let token of tokens) {
        // console.log('\n',token)
        if (['num', 'var', 'const'].includes(token.type)) nodes.push(new AST(token));
        if (token.type == "left") ops.push(token);
        if (token.type == "right") {
            while (ops.length > 0 && !(ops[ops.length - 1].type == 'left')) {
                let tk = ops.pop();
                let add = new AST(tk);
                if (tk.args > 1) add.right(nodes.pop());
                add.left(nodes.pop());
                nodes.push(add);
            }
            ops.pop();
        }
        if (['op', 'func'].includes(token.type)) {
            while (ops.length > 0 && ops[ops.length - 1].precedence >= token.precedence && (token.type != "left")) {
                let tk = ops.pop();
                let add = new AST(tk);
                if (tk.args > 1) add.right(nodes.pop());
                add.left(nodes.pop());
                nodes.push(add);
            }
            ops.push(token)
        }
        // console.log(ops,nodes)
    }
    // console.log('\n\n',ops,'\n',nodes,'\n\n')
    while(ops.length>0) {
        let tk = ops.pop();
        let add = new AST(tk);

        if (tk.args > 1) add.right(nodes.pop());
        add.left(nodes.pop());
        nodes.push(add);
    }
    // console.log(nodes)
    return nodes.pop();
};


function transpose(matrix) {
    return matrix[0].map((col, i) => matrix.map(row => row[i]));
}
function plotBinaryTree(root, prefix = 'V',lr=[],m=true,mode='v') {
    let char=0;
    if (mode == 'h') char = ['(', ')', '|', '-', 5,'┤','R','L']
    else char = ['', '', '-', '|', 2, '', '.','.']
    ind=lr=>{
        let ch=' '
        let ret = ch.repeat(char[4]);
        for (i = 1; i < lr.length; i++) {
            if (lr[i] == lr[i - 1]) ret += ch.repeat(char[4]);
            else ret += char[2] + ch.repeat(char[4]-1);
        }
        return ret;
    }

    let str = []
    if (root.l) str.push(plotBinaryTree(root.l, char[7],[...lr,'l'],false,mode))
    if (mode != 'h') str.push(ind(lr))
    str.push(`${m ? '' : ind(lr)}${prefix}${char[3]+char[0]+root.tkn.token+char[1]}${root.l || root.r ?char[5]:''}`)
    if (mode != 'h') str.push(ind(lr))
    if (root.r) str.push(plotBinaryTree(root.r, char[6], [...lr, 'r'], false, mode))
    if (m) {
        let x = str.flat(Infinity).map(e => (typeof e == "string" ? e.split('') : e[0].split()))
        let max=0
        for (i of x) max=i.length>max?i.length:max
        if (mode=='h') {
            x=x.map(e=>e.concat('\n'))
            console.log(x.map(e => e.join('')).join(''))
        }
        else {
            x = x.map(e => e.concat(new Array(max - e.length).fill(' ')))
            console.log(transpose(x).map(e => e.join('')).join('\n'))
        }
    }
    return str
}

str="(e^(i*x)-e^(0-i*x))/(2*i)"
console.log(str)
// console.log(toast(tokenize(str)))
plotBinaryTree(toast(tokenize(str)))
// console.log(char)
plotBinaryTree(toast(tokenize(str)),'>',[],true,'h')