//opt: 6push10,10push6

function square_sums_row(n) {
    let con=new Array(n+1).fill().map(e=>[])
    for (let i=1;i<=n;i++) {
        // console.log("==",i)
        let lm=Math.ceil(Math.sqrt(i))
        let lx=Math.floor(Math.sqrt(n+i))
        // console.log(lm**2,lx**2)
        for (let j=lm;j<=lx;j++) {
            let a=(j**2)
            if (a==i|a-i==i) continue
            con[i/*-1*/].push(a-i)
        }
    }
    return con//.filter(e=>e.length%2)
}
const sqr=n=>!(Math.sqrt(n)%1)

//15:
// 9 has 1 branch
//EULERIAN WALK - must have ends at 8&9
// 9 - 7 - 2 - 14 - 11 - 5 - 4 - 12 - 13 - 3 - 1 - X8X
//                                         |   |
//                                         6   15 - 10 - X6X
//                                         |
//                                         10 - 15 - 1 - =8=



// for (i=1;i<10;i++)console.log(i**2)
console.table(square_sums_row(15))