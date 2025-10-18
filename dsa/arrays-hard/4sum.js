const arr = [1, 0, -1, 0, -2, 2];
const target = 0;
/**
 * 4-sum
 * [-1,0,1,0] = 0;
 * [-1,-2,-1,2] = 0;
 * [2,0,0,-2] = 0;
 * unique set of arrays, that leads to 0
 */

/**
 * Optimal
 * 2 pointers
 */
var fourSum = function (nums, target) {
  n = nums.length;
  res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      k = j + 1;
      l = n - 1;
      while (k < l) {
        sum = nums[i] + nums[j] + nums[k] + nums[l];
        if (target === sum) {
          temp = [nums[i], nums[j], nums[k], nums[l]];
          res.push(temp);
          k++;
          l--;
          while (k < l && nums[k] === nums[k - 1]) k++;
          while (k < l && nums[l] === nums[l + 1]) l--;
        } else if (sum < target) {
          k++;
        } else {
          l--;
        }
      }
    }
  }

  return res;
};

/**
 * Better
 * hashing
 */
var fourSumBetter = function (nums, target) {
  const n = nums.length;
  const set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      hashset = new Set();
      for (let k = j + 1; k < n; k++) {
        sum = nums[i] + nums[j] + nums[k];
        fourth = target - sum;
        if (hashset.has(fourth)) {
          temp = [nums[i], nums[j], nums[k], fourth];
          temp.sort((a, b) => a - b);
          set.add(JSON.stringify(temp));
        }
        hashset.add(nums[k]);
      }
    }
  }

  const res = [];
  for (let key of set) {
    res.push(JSON.parse(key));
  }

  return res;
};

/**
 * Brute
 */
var fourSumBrute = function (nums, target) {
  n = nums.length;
  set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            temp = [nums[i], nums[j], nums[k], nums[l]];
            temp.sort((a, b) => a - b);
            set.add(JSON.stringify(temp));
          }
        }
      }
    }
  }

  res = [];
  for (let key of set) {
    res.push(JSON.parse(key));
  }

  return res;
};

console.log(fourSumBetter(arr, target));
