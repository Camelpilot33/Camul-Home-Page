let a="Lowest base system"
console.log(a.split(' ').map(e=>e.toLowerCase().split('').map((a,b)=>b==0?a.toUpperCase():a).join('')).join('')+'.js')