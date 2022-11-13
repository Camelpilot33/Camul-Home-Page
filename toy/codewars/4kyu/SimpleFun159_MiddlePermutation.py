import math
def middle_permutation(string): 
    ans, tmp = '', sorted(list(string)) 
    dividend = math.factorial(len(tmp)) // 2 - 1 
    for i in range(len(tmp)): 
        perms = math.factorial(len(tmp)) // len(tmp) 
        if len(tmp) == 1: 
            ans += tmp[0] 
            break 
        letter = tmp[dividend // perms] 
        ans += letter 
        tmp.remove(letter) 
        dividend -= perms * (dividend // perms) 
    return ans