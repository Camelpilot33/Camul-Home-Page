function narcissistic(value) {
    var sum=0
    for (var i of value.toString())sum+=i**value.toString().length
    return sum==value
  }