function rot13(message){
  var e=""
  var abc="abcdefghijklmnopqrstuvwxyz"
  var cap="abcdefghijklmnopqrstuvwxyz".split("").map(e=>e.toUpperCase()).join("")
  for (var i in message) {
    if (abc.includes(message[i])) e+=abc[(abc.indexOf(message[i])+13)%26]
    else if (cap.includes(message[i])) e+=cap[(cap.indexOf(message[i])+13)%26]
    else e+=message[i]
  }
  return e
}