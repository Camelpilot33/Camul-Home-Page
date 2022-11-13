function simple_assembler(program) {
    let reg={}
    let step=0
    let i=0
    while (step<program.length) {
      i++
      let cmd=program[step].split(/ /g)
      switch(cmd[0]) {
        case "mov":
          reg[cmd[1]]=cmd[2]==Number(cmd[2])?Number(cmd[2]):reg[cmd[2]]
        break;
        case "inc":
          reg[cmd[1]]++
        break;
        case "dec":
          reg[cmd[1]]--
        break;
        case "jnz":
          if (cmd[1]==Number(cmd[1])?Number(cmd[1]):reg[cmd[1]]!=0) step += cmd[2]==Number(cmd[2])?Number(cmd[2]):reg[cmd[2]]
          else step++
        break;
        default:
        break
      }
      if (cmd[0]!='jnz')step++
    }
    return reg
  }