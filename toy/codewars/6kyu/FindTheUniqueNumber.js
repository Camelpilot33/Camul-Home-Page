function findUniq(arr) {
  var a=arr[0]==arr[1]?arr[0]:arr[2]
  for (var i of arr) {
    if (i!=a) return i
  }
}