function moveZeros(arr) {
  var a=[[],[]]
  for (var i of arr) a[i===0?1:0].push(i)
  return [...a[0],...a[1]]
}
