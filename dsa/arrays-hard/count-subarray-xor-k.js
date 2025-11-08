const arr = [4, 2, 2, 6, 4],
  k = 6;

function countSubArray(nums, k) {
  const n = nums.length;
  let xr = 0,
    count = 0;
  const map = new Map();
  map.set(0, 1);
  for (let i = 0; i < n; i++) {
    xr = xr ^ nums[i];
    let x = xr ^ k;
    count += map.get(x) ?? 0;
    map.set(xr, (map.get(xr) ?? 0) + 1);
  }
  return count;
}

function countSubArrayBrute(nums, t) {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let xor = 0;
    for (let j = i; j < n; j++) {
      xor = xor ^ nums[j];
      if (xor === t) {
        count++;
      }
    }
  }

  return count;
}

console.log(countSubArray(arr, k));
