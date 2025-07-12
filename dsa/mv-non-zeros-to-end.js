// brute force
const arr = [0, 1, 4, 0, 5, 2];

function rmZeros(arr) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            temp.push(arr[i]);
        }
    }
    // console.log(temp)
    for (let i = 0; i < arr.length; i++) {
        arr[i] = temp[i] ?? 0;
    }
    // console.log(arr)
}

rmZeros(arr);

// console.log(arr)

// optimized
