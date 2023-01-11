Cons.fromArray = function(list){
    if (!list.length) return null
      let ret=new Cons(list[list.length-1],null)
      list.pop()
      while (list.length) {
          ret=new Cons(list[list.length-1],ret)
          list.pop()
      }
      return ret
  // 	return null;
  };
  function toArray(list) {
      if(list){
          var more = list.tail;
          return [list.head].concat(more? toArray(more) : []);
      }
      return [];
  }
  function filter(list, predicate){
    return Cons.fromArray(toArray(list).filter(predicate))
  }
  
  function map(list, mapper){
    return Cons.fromArray(toArray(list).map(mapper))
  }
  
  Cons.prototype.filter = function(predicate){ return filter(this,predicate); };
  Cons.prototype.map = function(mapper){ return map(this, mapper); };
  