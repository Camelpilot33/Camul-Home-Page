function humanReadable (seconds) {
    var h=Math.floor(seconds/3600)%100
    var m=Math.floor(seconds/60)%60
    var s=seconds%60
    h=h<10?"0"+h:h
    m=m<10?"0"+m:m
    s=s<10?"0"+s:s
    return h+":"+m+":"+s;
  }