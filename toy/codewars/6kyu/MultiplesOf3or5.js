function solution(number){
    var arr=[]
    for (var i=3;i<number;i++) if (i%3==0||i%5==0) arr.push(i)
    return arr.length>=1?eval(arr.join('+')):0
}