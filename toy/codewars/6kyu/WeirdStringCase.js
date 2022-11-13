function toWeirdCase(s){
    s=s.split(" ").map(p=>p.split("").map((e,i)=>i%2==0?s[i]=e.toUpperCase():s[i]=e.toLowerCase()).join("")).join(" ")
    return s//.split("").forEach((e,i)=>i%2==0?s[i]=e.toUpperCase():s[i]=e.toLowerCase())
  }