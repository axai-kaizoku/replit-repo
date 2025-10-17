const arr = [-1, 0, 1, 2, -1, -4];

/**
 * 3-sum
 * [-1,0,1] = 0;
 * [-1,2,-1] = 0;
 * unique set of arrays, that leads to 0
 */

/**
 * Optimal
 * 2 pointers
 */
function ThreeSumOptimal(nums) {
  const n = nums.length;
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let j = i + 1,
      k = n - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        temp = [nums[i], nums[j], nums[k]];
        ans.push(temp);
        j++;
        k--;
        while (j < k && nums[j] == nums[j - 1]) j++;
        while (j < k && nums[k] == nums[k + 1]) k--;
      }
    }
  }

  return ans;
}

/**
 * Better
 * hashing
 */
function ThreeSumBetter(nums) {
  const n = nums.length;
  const set = new Set();
  for (let i = 0; i < n; i++) {
    const hashset = new Set();
    for (let j = i + 1; j < n; j++) {
      const k = -(nums[i] + nums[j]);
      if (hashset.has(k)) {
        const temp = [nums[i], nums[j], k];
        temp.sort((a, b) => a - b);
        set.add(JSON.stringify(temp));
      }
      hashset.add(nums[j]);
    }
  }

  const res = [];
  for (let key of set) {
    res.push(JSON.parse(key));
  }

  return res;
}

/**
 * Brute
 */
function ThreeSumBrute(nums) {
  const n = nums.length;
  const set = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const temp = [nums[i], nums[j], nums[k]];
          temp.sort((a, b) => a - b);
          set.add(JSON.stringify(temp));
        }
      }
    }
  }

  const res = [];
  for (let key of set) {
    res.push(JSON.parse(key));
  }

  return res;
}

console.log(ThreeSumOptimal(arr));
