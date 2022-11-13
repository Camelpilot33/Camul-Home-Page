function findNextSquare(sq) {
    let a=Math.sqrt(sq)
    if (Math.floor(a)==a) return (a+1)**2
    return -1;
  }