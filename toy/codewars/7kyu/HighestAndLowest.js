function highAndLow(numbers){
  var h=-Infinity
  var l=Infinity
  var lst=numbers.split(" ")
  for (var i of lst) {
    if (parseInt(i)<l)l=parseInt(i)
    if (parseInt(i)>h)h=parseInt(i)
  }
  return h+" "+l
}