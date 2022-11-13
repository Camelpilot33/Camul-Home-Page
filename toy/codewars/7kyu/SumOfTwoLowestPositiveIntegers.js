function sumTwoSmallestNumbers(numbers) {  
  var a=[numbers[0],numbers[1]]
  for (i=2;i<numbers.length;i++) {
    if (numbers[i]<a[0]||numbers[i]<a[1]) {
      if (a[0]<a[1]) a[1]=numbers[i]
      else a[0]=numbers[i]
    }
  }
  return a[0]+a[1]
}