const nums={
    "M":1000,
    "D":500,
    "C":100,
    "L":50,
    "X":10,
    "V":5,
    "I":1
}
const RomanNumerals={
    toRoman:(n)=>{
        let ret=""
        for (var i of Object.keys(nums)) {
            let f=Math.floor(n/nums[i])
            ret+=i.repeat(f)
            n%=nums[i]
        }
        return ret.replace(/DC{4}/,"CM")
            .replace(/C{4}/g,"CD")
            .replace(/LX{4}/g,"XC")
            .replace(/X{4}/g,"XL")
            .replace(/VI{4}/g,"IX")
            .replace(/I{4}/g,"IV")
    },
    fromRoman:(r)=>{
        let ret=0
        for (let i=0;i<r.length;i++) {
            if (nums[r[i+1]]>nums[r[i]]){
                ret+=nums[r[i+1]]-nums[r[i]]
                i++
            } else ret+=nums[r[i]]
        } return ret
    }
}