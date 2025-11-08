const nums = [1, -1, 3, 2];
const nums1 = [1, -1, 3, 2, -2];
/**
 * Optimal
 * preSum, hashmap
 */
function maxLenOptimal(nums) {
  const n = nums.length;
  let preFixSum = 0,
    maxi = 0;
  const map = new Map();
  for (let i = 0; i < n; i++) {
    preFixSum += nums[i];
    if (preFixSum === 0) {
      maxi = i + 1;
    } else {
      if (map.has(preFixSum)) {
        maxi = Math.max(maxi, i - map.get(preFixSum));
      } else {
        map.set(nums[i], i);
      }
    }
  }

  return maxi;
}

function maxLenBrute(nums) {
  const n = nums.length;
  let len = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (nums[i] + nums[j] === 0) {
        len = Math.max(len, j - i + 1);
      }
    }
  }
  return len;
}

console.log(maxLenOptimal(nums));
