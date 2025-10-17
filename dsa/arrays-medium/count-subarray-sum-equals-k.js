/**
 * Optimal
 * hashing, preSum map approach
 */
function countSubArray(nums, k) {
  const n = nums.length;
  let preSum = 0;
  let count = 0;
  const preSumMap = new Map();
  preSumMap.set(0, 1);

  for (let i = 0; i < n; i++) {
    preSum += nums[i];
    let rem = preSum - k;
    count += preSumMap.get(rem) ?? 0;
    preSumMap.set(preSum, (preSumMap.get(preSum) ?? 0) + 1);
  }

  console.log(preSumMap);

  return count;
}

/**
 * Better
 */
function countSubArray1(nums, k) {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
  }

  return count;
}

// const arr = [1, 2, 3, -3, 1, 1, 1, 4, 2, -3];
const arr = [1, -1, 0];
// const arr = [3, -3, 1, 1, 1];

const k = 0;

console.log(countSubArray(arr, k));
