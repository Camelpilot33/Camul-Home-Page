String.prototype.splice = function (idx, rem, str) {
    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
};
const RPNEvaluator = (input) => {
    const stack = [];

    const handleToken = (token) => {
        if (!isNaN(parseFloat(token))) {
            stack.push(token);
            return;
        }

        const right = parseFloat(stack.pop());
        const left = parseFloat(stack.pop());

        switch (token) {
            case '+': // Addition
                stack.push(left + right);
                return;
            case '-': // Subtraction
                stack.push(left - right);
                return;
            case '*': // Multiplication
                stack.push(left * right);
                return;
            case '/': // Division
                stack.push(left / right);
                return;
            case '^': // Exponentiation
                stack.push(left ** right);
                return;
            default:
                throw new Error(`Invalid token: ${token}`);
        }
    };

    for (let i of input) {
        if (i === ' ') continue;

        handleToken(i);
    }

    return stack.pop();
};

const operators = {
    '^': {
        prec: 4,
        assoc: 'right',
    },
    '*': {
        prec: 3,
        assoc: 'left',
    },
    '/': {
        prec: 3,
        assoc: 'left',
    },
    '+': {
        prec: 2,
        assoc: 'left',
    },
    '-': {
        prec: 2,
        assoc: 'left',
    },
};

const assert = (predicate) => {
    if (predicate) return;
    throw new Error('Assertion failed due to invalid token');
};

const toRPN = (input) => {
    const opSymbols = Object.keys(operators);
    const stack = [];
    let output = '';

    const peek = () => {
        return stack.at(-1);
    };

    const addToOutput = (token) => {
        output += ' ' + token;
    };

    const handlePop = () => {
        return stack.pop();
    };

    const handleToken = (token) => {
        switch (true) {
            case !isNaN(parseFloat(token)):
                addToOutput(token);
                break;
            case opSymbols.includes(token):
                const o1 = token;
                let o2 = peek();

                while (
                    o2 !== undefined &&
                    o2 !== '(' &&
                    (operators[o2].prec > operators[o1].prec ||
                        (operators[o2].prec === operators[o1].prec &&
                            operators[o1].assoc === 'left'))
                ) {
                    addToOutput(handlePop());
                    o2 = peek();
                }
                stack.push(o1);
                break;
            case token === '(':
                stack.push(token);
                break;
            case token === ')':
                let topOfStack = peek();
                while (topOfStack !== '(') {
                    assert(stack.length !== 0);
                    addToOutput(handlePop());
                    topOfStack = peek();
                }
                assert(peek() === '(');
                handlePop();
                break;
            default:
                throw new Error(`Invalid token: ${token}`);
        }
    };

    for (let i of input) {
        if (i === ' ') continue;
        // console.log(i);
        handleToken(i);
    }

    while (stack.length !== 0) {
        assert(peek() !== '(');
        addToOutput(stack.pop());
    }

    return output;
};

// console.log([1, 2].concat(5, 6));
const tokenize = s => {
    s = s.replace(/ /g, '');
    let p = [...s.matchAll(/\d[x(]/g)].map(e => e.index);
    for (i = 0; i < p.length; i++) {
        s = s.splice(p[i] + 1 + i, 0, '*');
    }
    for (t of Object.keys(operators).concat(')', '(', 'x')) s = s.replace(new RegExp('\\' + t, 'g'), ' ' + t + ' ');
    return s.replace(/  /g, ' ').trim().split(' ');
};
function main() {



}
console.log("%cTokenize", "color:#00ff00");
console.log(tokenize('3( 10 + 2 ) * 3 - 4'));
console.log(tokenize('(10+2)*3-4'));
// console.log("%cToRPN", "color:#00ff00");
// console.log(toRPN('( 10 + 2 ) * 3 - 4'))