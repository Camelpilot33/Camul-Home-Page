function high(x){
    var words=x.split(' ').map(e=>e.toUpperCase())
    var h=[0,""]
    for (var i of words) {
      var a=eval(i.toUpperCase().match(/[a-z]/gi).map( (c) => c.charCodeAt() - 64).join('+'))
      if (a>h[0])h=[a,i]
    }
    return h[1].toLowerCase()
  }