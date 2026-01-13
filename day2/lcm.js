function lcm(a, b) {
    
    let g = Math.max(a, b);
    let s = Math.min(a, b); 

    for (let i = g; i <= a * b; i += g) {
        if (i % s === 0)
            return i;
    }
    return a * b; 
}

let a = 10, b = 15;
console.log(lcm(a, b));