//return the total number of smiling faces in the array
function countSmileys(arr) {
    var c=0
    for (var i of arr) {
      if (i.length==3&&
          ((i[0]==":")||(i[0]==";"))&&
          ((i[1]=="~")||(i[1]=="-"))&&
           ((i[2]==")")||(i[2]=="D"))
         ) c++
      else if (i.length==2&&((i[0]==":")||(i[0]==";"))&&((i[1]==")")||(i[1]=="D")))c++
    }
    return c
  }