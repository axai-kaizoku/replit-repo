const arr = [15, -2, 2, -8, 1, 7, 10, 23];

/**
 * Optimal
 * preSum, hashmap
 */
function maxLenOptimal(nums) {
  const n = nums.length;
  const hashmap = new Map();
  hashmap.set(0, 1);
  let preSum = 0,
    maxi = 0;
  for (let i = 0; i < n; i++) {
    preSum += nums[i];
    if (preSum === 0) {
      maxi = i + 1;
    } else {
      if (hashmap.has(preSum)) {
        maxi = Math.max(maxi, i - hashmap.get(preSum));
      } else {
        hashmap.set(preSum, i);
      }
    }
  }

  return maxi;
}

console.log(maxLenBrute(arr));
