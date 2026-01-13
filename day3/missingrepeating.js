function findTwoElement(arr) {
    let n = arr.length;
    let freq = new Array(n + 1).fill(0);
    let repeating = -1, missing = -1;

    for (let i = 0; i < n; i++) {
        freq[arr[i]]++;
    }

    for (let i = 1; i <= n; i++) {
        if (freq[i] === 0) missing = i;
        else if (freq[i] === 2) repeating = i;
    }

    return [repeating, missing];
}

let arr = [1,2,3,3];
let ans = findTwoElement(arr);
console.log("[" + ans[0], ans[1] + "]");