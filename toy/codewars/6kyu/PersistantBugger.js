function persistence (num) {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * b)) 
      : 0;
  }