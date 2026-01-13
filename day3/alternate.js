
function rightRotate(arr, start, end) {
    let temp = arr[end];
    for (let i = end; i > start; i--) {
        arr[i] = arr[i - 1];
    }
    arr[start] = temp;
}

// Function to rearrange the array
function rearrange(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        
        // Check if the current positive element is out of place
        if (arr[i] >= 0 && i % 2 === 1) {
          
            // Find the next negative element and rotate the subarray
            // between these two elements
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < 0) {
                    rightRotate(arr, i, j);
                    break;
                }
            }
        }
        
        // Check if the current negative element is out of place
        else if (arr[i] < 0 && i % 2 === 0) {
            
            // Find the next positive element and rotate the subarray
            // between these two elements
            for (let j = i + 1; j < n; j++) {
                if (arr[j] >= 0) {
                    rightRotate(arr, i, j);
                    break;
                }
            }
        }
    }
}

// Driver Code
const arr = [1, 2, 3, -4, -1, 4];

rearrange(arr);
console.log(arr.join(' '));