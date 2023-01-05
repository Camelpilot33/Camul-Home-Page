function palLenO1(text) {
    let n = text.length;
    if (n == 0) return;
    //positions
    n *= 2;
    n++;
    //store prev lengths
    let L = new Array(n);
    L[0] = 0;
    L[1] = 1;
    let center = 1;
    let rightpos = 2;
    // unknown dist (right)
    let i = 0;
    // left i
    let otheri;
    //do we need to expand?
    let expand = -1;
    let diff = -1;
    let max = 0;
    let maxpos = 0;
    let start = -1;
    let end = -1;
    //check stuffs
    for (i = 2; i < n; i++) {
        otheri = 2 * center - i;
        // reset
        expand = 0;
        diff = rightpos - i;
        // if unknown is within dist d
        if (diff >= 0) {
            // 1
            if (L[otheri] < diff)L[i] = L[otheri];
            // 2
            else if (L[otheri] == diff && rightpos == n - 1)L[i] = L[otheri];
            // 3
            else if (L[otheri] == diff && rightpos < n - 1) {
                L[i] = L[otheri];
                expand = 1;
            }
            // 4
            else if (L[otheri] > diff) {
                L[i] = diff;
                expand = 1;
            }
        }
        else {
            L[i] = 0;
            expand = 1;
        }
        if (expand == 1) {
            //odd: compare chars, maybe l++
            //even: l++
            while (((i + L[i]) < n && (i - L[i]) > 0) && (((i + L[i] + 1) % 2 == 0) || (text[Math.floor((i + L[i] + 1) / 2)] == text[Math.floor((i - L[i] - 1) / 2)]))==true&(!0)) L[i]++;

        }
        // Track max
        if (L[i] > max) {
            max = L[i];
            maxpos = i;
        }
        // if expand to far adjust center
        if (i + L[i] > rightpos) {
            center = i;
            rightpos = i + L[i];
        }
        console.log(`[${L.join()}]`.replace(/\,\,/g,',?,').replace(/\,\,/g,',?,').replace(/\,\]/,',?]'))
    }
    start = (maxpos - max) / 2;
    end = start + max - 1;
    return [start, end];
}
function problem(input) {
    let t = input.toLowerCase().split('').map((a, b) => [a, b]).filter(e => (e[0].match(/[A-Za-z]/gi) || []).length)
    let pal = palLenO1(t.map(e => e[0]))
    let max = pal[1] - pal[0] + 1
    pal = pal.map((a, b) => t[a][1] + b)
    return max + '\n' + input.slice(pal[0], pal[1])
}

console.log(problem(`abacab`))