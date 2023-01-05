console.log("\n10:")
Bomb.diffuse(Bomb.key)
console.log("\n9:")
while (Bomb.hint=="just keep trying") Bomb.diffuse(Bomb.key)
console.log('\n8:')
Bomb.diffuse(global.BombKey)
console.log('\n7:')
diffuseTheBomb=()=>1
Bomb.diffuse()
console.log("\n6:")
Bomb.diffuse(3.14159)
console.log("\n5:")
Bomb.diffuse(new Date().setFullYear(new Date().getFullYear() - 4))
console.log("\n4:")
Bomb.diffuse(Object.freeze({ key: 43 }))
console.log("\n3:")
Bomb.diffuse(obj = {
  i: 0,
  valueOf: function() {
    let res = this.i > 0 ? 11 : 9
    this.i++;
    return res;
  }
})
const MathRandom = Math.random
Math.random = function () {
  return {
    valueOf: () => {
      let val = !this.applied ? 0.5 : 1
      this.applied = true
      return val
    },
  }
}
console.log("\n2:")
Bomb.diffuse(42)
Math.random=MathRandom
console.log(Bomb.diffuse.toString())
Array.prototype.valueOf = () => 14;
Bomb.diffuse('eWVz')