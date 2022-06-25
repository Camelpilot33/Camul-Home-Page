function low(input) {
  let r = 0;
  let h = input.split("|").map(e=>e.split("").map(Number))
  const ga = ([cl, cc], l, c) => {
    let a = [];
    if (cc - 1 >= 0) a.push([cl, cc - 1])
    if (cc + 1 < c) a.push([cl, cc + 1])
    if (cl - 1 >= 0) a.push([cl - 1, cc])
    if (cl + 1 < l) a.push([cl + 1, cc])
    return a;
  }
  for (i = 0; i < h.length; i++) {
    for (j = 0; j < h[0].length; j++) {
      let a = ga([i, j], h.length, h[0].length);
      if (!a.some(([line, col]) => h[i][j] >= h[line][col])) {
        r += h[i][j]
      }
    }
  }
  return r
}
